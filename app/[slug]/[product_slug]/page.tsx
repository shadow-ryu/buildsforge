import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";

interface PageProps {
  params: { slug: string; product_slug: string };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug, product_slug } = params;

  // Fetch the product with a limited number of recent build logs and settings
  const product = await prisma.product.findFirst({
    where: {
      slug: product_slug,
    },
    include: {
      buildLogs: {
        orderBy: {
          dayIndex: "desc",
        },
      },
      settings: true, // Include product settings
      _count: {
        select: {
          buildLogs: true,
        },
      },
    },
  });
  if (!product) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Product Details */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Product Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {product.description && (
                  <div>
                    <p className="text-sm text-muted-foreground">Description</p>
                    <p>{product.description}</p>
                  </div>
                )}
                <div>
                  <p className="text-sm text-muted-foreground">Created</p>
                  <p>{format(new Date(product.createdAt), "MMM d, yyyy")}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Tech Stack</p>
                  <p>{product.techStack || "Not specified"}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <p className="capitalize">
                    {product.active ? "Active" : "Inactive"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Build Logs Preview */}
        <div className="md:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Recent Build Logs</h2>
            {product.settings?.buildLogsPublic && product._count.buildLogs > 0 && (
              <a
                href={`/${slug}/${product_slug}/builds`}
                className="text-sm font-medium text-primary hover:underline"
              >
                View All Build Logs ({product._count.buildLogs})
              </a>
            )}
          </div>

          {!product.settings?.buildLogsPublic ? (
            <Card>
              <CardContent className="py-6 text-center">
                <p className="text-muted-foreground">
                  Build logs are not publicly available for this product.
                </p>
              </CardContent>
            </Card>
          ) : product.buildLogs.length > 0 ? (
            <div className="space-y-4">
              {product.buildLogs.map((log) => (
                <Card
                  key={log.id}
                  className="group hover:shadow-md transition-shadow"
                >
                  <a href={`/${product_slug}/build-logs/${log.id}`}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        Day {log.dayIndex}
                        </CardTitle>

                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground line-clamp-2">
                        {log.summary}
                      </p>

                      <p className="mt-2 text-sm text-primary font-medium">
                        Read more →
                      </p>
                    </CardContent>
                  </a>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-6 text-center">
                <p className="text-muted-foreground">
                  No build logs available yet.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
