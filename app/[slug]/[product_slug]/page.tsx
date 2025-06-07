import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
// import Image from "next/image";

interface PageProps {
  params: Promise<{ slug: string; product_slug: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { slug, product_slug } = await params;

  const product = await prisma.product.findFirst({
    where: {
      slug: product_slug,
      settings: {
        buildLogsPublic: true,
        detailsPublic: true,
        roadmapPublic: true,
      },
    },
    include: {
      buildLogs: {
        orderBy: {
          dayIndex: "desc",
        },
      },
      settings: true,
      _count: {
        select: {
          buildLogs: true,
        },
      },
    },
  });

  if (!product) return notFound();

  const getSmartName = (name: string) =>
    name.length > 1
      ? name.charAt(0).toUpperCase() + name.charAt(1).toLowerCase()
      : name.charAt(0).toUpperCase();

  return (
    <div className=" px-4 py-12 text-white bg-black min-h-screen">
      <div className="mb-8 flex items-center gap-4">
        {/* Product logo or fallback initials */}
        {/* {product.logoUrl ? (
          <div className="w-12 h-12 relative rounded-md overflow-hidden border border-purple-500">
            <Image
              src={product.logoUrl}
              alt={`${product.name} logo`}
              fill
              className="object-contain"
            />
          </div>
        ) : ( */}
          <div className="w-12 h-12 flex items-center justify-center bg-purple-700 text-white font-bold text-lg rounded-md">
            {getSmartName(product.name)}
          </div>
        {/* )} */}

        <h1 className="text-3xl font-bold text-purple-400">{product.name}</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Product Details */}
        <div className="md:col-span-1">
          <Card className="bg-[#1a1a1a] border border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Product Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm text-gray-300">
                {product.description && (
                  <div>
                    <p className="text-muted-foreground">Description</p>
                    <p>{product.description}</p>
                  </div>
                )}
                <div>
                  <p className="text-muted-foreground">Created</p>
                  <p>{format(new Date(product.createdAt), "MMM d, yyyy")}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Tech Stack</p>
                  <p>{product.techStack || "Not specified"}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Status</p>
                  <p className="capitalize">
                    {product.active ? "Active" : "Inactive"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Build Logs Section */}
        <div className="md:col-span-2 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <h2 className="text-2xl font-semibold text-purple-400">Recent Build Logs</h2>
            <div className="flex gap-4">
              {product.settings?.buildLogsPublic && product._count.buildLogs > 0 && (
                <a
                  href={`/${slug}/${product_slug}/builds`}
                  className="text-sm text-purple-400 hover:underline"
                >
                  View All Build Logs ({product._count.buildLogs})
                </a>
              )}
              {product.settings?.roadmapPublic && (
                <a
                  href={`/${slug}/${product_slug}/roadmap`}
                  className="text-sm text-purple-400 hover:underline"
                >
                  View Product Journey
                </a>
              )}
            </div>
          </div>

          {!product.settings?.buildLogsPublic ? (
            <Card className="bg-[#1a1a1a] border border-gray-800">
              <CardContent className="py-8 text-center text-gray-400">
                Build logs are not publicly available for this product.
              </CardContent>
            </Card>
          ) : product.buildLogs.length > 0 ? (
            <div className="space-y-4">
              {product.buildLogs.map((log) => (
                <Card
                  key={log.id}
                  className="group bg-[#1a1a1a] border border-gray-800 hover:border-purple-500 hover:shadow-md transition rounded-2xl"
                >
                  <a href={`/${product_slug}/build-logs/${log.id}`}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg text-white group-hover:text-purple-400 transition-colors">
                          Day {log.dayIndex}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 line-clamp-2">
                        {log.summary}
                      </p>
                      <p className="mt-2 text-sm text-purple-400 font-medium group-hover:underline">
                        Read more →
                      </p>
                    </CardContent>
                  </a>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="bg-[#1a1a1a] border border-gray-800">
              <CardContent className="py-8 text-center text-gray-400">
                No build logs available yet.
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
