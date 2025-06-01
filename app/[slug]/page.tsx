import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface PublicProfileProps {
  user: {
    id: string;
    name: string;
    email: string;
    username: string | null;
    bio: string | null;
    settings: {
      displayName: string | null;
      profileImageUrl: string | null;
      twitter: string | null;
      linkedin: string | null;
      github: string | null;
      bio: string | null;
    } | null;
    products: Array<{
      id: string;
      name: string;
      description: string | null;
      slug: string;
    }>;
  };
}

function PublicProfile({ user }: PublicProfileProps) {
  const displayName = user.settings?.displayName || user.name;
  const bio = user.settings?.bio || user.bio;

  const socialLinks = [
    {
      name: "Twitter",
      url: user.settings?.twitter
        ? `https://twitter.com/${user.settings.twitter}`
        : null,
      icon: <Twitter className="w-4 h-4" />,
    },
    {
      name: "GitHub",
      url: user.settings?.github
        ? `https://github.com/${user.settings.github}`
        : null,
      icon: <Github className="w-4 h-4" />,
    },
    {
      name: "LinkedIn",
      url: user.settings?.linkedin
        ? `https://linkedin.com/in/${user.settings.linkedin}`
        : null,
      icon: <Linkedin className="w-4 h-4" />,
    },
  ].filter((link) => link.url);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Profile Sidebar */}
        <div className="w-full md:w-1/3">
          <Card>
            <CardContent className="pt-6">
              {user.settings?.profileImageUrl ? (
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden relative">
                  <Image
                    src={user.settings.profileImageUrl}
                    alt={`${displayName}'s profile`}
                    fill
                    className="object-cover"
                    sizes="128px"
                    priority
                  />
                </div>
              ) : (
                <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700 mx-auto mb-4 flex items-center justify-center text-4xl font-bold">
                  {displayName.charAt(0).toUpperCase()}
                </div>
              )}

              <h1 className="text-2xl font-bold text-center">{displayName}</h1>

              {bio && (
                <p className="text-muted-foreground text-center mt-2">{bio}</p>
              )}

              {socialLinks.length > 0 && (
                <div className="flex justify-center gap-4 mt-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={link.name}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Projects */}
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>

          {user.products.length > 0 ? (
            <div className="grid gap-4">
              {user.products.map((product) => (
                <Card key={product.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <Link
                        href={`/${product.slug}`}
                        className="hover:underline"
                      >
                        {product.name}
                      </Link>
                      <Link
                        href={`/${product.slug}`}
                        className="text-muted-foreground hover:text-foreground"
                        aria-label={`View ${product.name}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {product.description || "No description available."}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border rounded-lg">
              <p className="text-muted-foreground">No projects to display</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface PageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateStaticParams() {
  // Optionally generate static paths at build time
  return [];
}

export default async function PublicProfilePage({ params }: PageProps) {
  // Ensure params is properly awaited
  const { slug } = await params;
  console.log("Fetching user with slug:", slug);

  // First, find the settings by slug and check if public
  const settings = await prisma.settings.findFirst({
    where: {
      slug: slug,
      isPublic: true,
    },
    include: {
      user: true,
    },
  });

  // Check if settings exist and profile is public
  if (!settings || !settings.user) {
    console.log("User not found or profile is not public");
    notFound();
  }

  const userWithSettings = {
    ...settings.user,
    settings,
  };

  // Then get the user's active products
  const products = await prisma.product.findMany({
    where: {
      userId: userWithSettings.id,
      active: true,
      settings: {
        detailsPublic: true,
      },
    },
    select: {
      id: true,
      name: true,
      description: true,
      slug: true,
    },
  });

  // Combine the user data with their products
  const user = {
    ...userWithSettings,
    products,
  };

  console.log("Found user:", user.username);

  return <PublicProfile user={user} />;
}
