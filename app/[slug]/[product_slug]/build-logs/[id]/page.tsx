import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { CardContent } from "@/components/ui/card";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from 'next/link';

interface BuildLogPageProps {
  params: {
    slug: string; // User slug
    product_slug: string; // Product slug
    id: string; // BuildLog ID
  };
}

export default async function BuildLogPage({ params }: BuildLogPageProps) {
  const { slug, product_slug, id: buildLogId } = params;

  const buildLog = await prisma.buildLog.findUnique({
    where: {
      id: buildLogId,
      // It's good practice to also ensure this buildLog belongs to the product_slug and slug
      // to prevent unauthorized access if someone guesses a buildLogId.
      // product: {
      //   slug: product_slug,
      //   user: {
      //     settings: {
      //       slug: slug
      //     }
      //   }
      // }
    },
    // Optionally include product data if needed for the back button text,
    // or rely on the params for the link.
    // include: {
    //   product: {
    //     select: { name: true }
    //   }
    // }
  });

  if (!buildLog) {
    console.log(
      `BuildLog with ID ${buildLogId} not found for product ${product_slug} by user ${slug}.`
    );
    return notFound();
  }

  return (
    <div className=" mx-auto px-4 py-12 text-white bg-black min-h-screen">
      <div className="mb-6"> {/* Added margin-bottom for spacing */}
        <Link href={`/${slug}/${product_slug}`} className="text-purple-400 hover:text-purple-300 hover:underline mb-4 inline-block">
          &larr; Back to Product
        </Link>
      </div>
      <div className=" ">
        <CardContent className="prose text-white">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[]}
            components={{
              h1: ({ ...props }) => (
                <h1 className="text-3xl font-bold mt-6 mb-4" {...props} />
              ),
              h2: ({ ...props }) => (
                <h2 className="text-2xl font-semibold mt-6 mb-3" {...props} />
              ),
              h3: ({ ...props }) => (
                <h3 className="text-xl font-semibold mt-5 mb-2" {...props} />
              ),
              h4: ({ ...props }) => (
                <h4 className="text-lg font-medium mt-4 mb-2" {...props} />
              ),
              p: ({ ...props }) => (
                <p className="mb-3 leading-relaxed text-gray-300" {...props} />
              ),
              ul: ({ ...props }) => (
                <ul
                  className="list-disc list-inside mb-3 ml-4 text-gray-300"
                  {...props}
                />
              ),
              li: ({ ...props }) => <li className="mb-1" {...props} />,
              strong: ({ ...props }) => (
                <strong className="text-white font-semibold" {...props} />
              ),
              hr: () => <hr className="my-6 border-purple-700" />,
              em: ({ ...props }) => (
                <em className="italic text-gray-400" {...props} />
              ),
            }}
          >
            {buildLog.summary}
          </ReactMarkdown>

        </CardContent>
      </div>
    </div>
  );
}
