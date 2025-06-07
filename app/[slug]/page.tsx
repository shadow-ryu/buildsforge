import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Card, CardContent} from "@/components/ui/card";
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
      logoUrl?: string | null; // New optional field
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
      icon: <Twitter className="w-5 h-5" />,
    },
    {
      name: "GitHub",
      url: user.settings?.github
        ? `https://github.com/${user.settings.github}`
        : null,
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      url: user.settings?.linkedin
        ? `https://linkedin.com/in/${user.settings.linkedin}`
        : null,
      icon: <Linkedin className="w-5 h-5" />,
    },
  ].filter((link) => link.url);

  return (
    <div className="container mx-auto px-4 py-12 bg-black text-white min-h-screen">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Sidebar */}
        <div className="md:w-1/3 w-full">
          <Card className="bg-[#111111] border border-purple-700 shadow-md">
            <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
              {user.settings?.profileImageUrl ? (
                <div className="w-32 h-32 rounded-full overflow-hidden relative border-2 border-purple-500">
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
                <div className="w-32 h-32 rounded-full bg-gray-700 flex items-center justify-center text-4xl font-bold border-2 border-purple-500">
                  {displayName.charAt(0).toUpperCase()}
                </div>
              )}
              <h1 className="text-2xl font-semibold">{displayName}</h1>
              {bio && <p className="text-gray-400 text-sm">{bio}</p>}

              {socialLinks.length > 0 && (
                <div className="flex gap-4 mt-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
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
        <div className="md:w-2/3 w-full">
          <h2 className="text-2xl font-bold mb-6 text-purple-400">Projects</h2>

          {user.products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {user.products.map((product) => (
                <Card
                  key={product.id}
                  className="group relative overflow-hidden bg-[#1a1a1a] border border-gray-800 hover:border-purple-600 transition-shadow hover:shadow-md rounded-2xl"
                >
                  <div className="flex items-center gap-4 p-6">
                    {/* Product Logo or Initial */}
                    {product.logoUrl ? (
                      <div className="w-12 h-12 rounded-md overflow-hidden relative border border-purple-400">
                        <Image
                          src={product.logoUrl}
                          alt={`${product.name} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-md bg-purple-700 text-white flex items-center justify-center font-bold text-lg">
                        {product.name.charAt(0).toUpperCase()}
                      </div>
                    )}

                    {/* Product Details */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <Link
                          href={`/${product.slug}`}
                          className="text-lg font-semibold text-white hover:underline"
                        >
                          {product.name}
                        </Link>
                        <Link
                          href={`/${product.slug}`}
                          className="text-gray-400 hover:text-purple-400"
                          aria-label={`View ${product.name}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </div>
                      <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                        {product.description || "No description available."}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="bg-[#1a1a1a] border border-gray-800 p-8 rounded-lg text-center">
              <p className="text-gray-400">No projects to display</p>
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
  console.log("Fetching user with slug:", await params.slug);
  const { slug } = await params;

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
    console.log("User not found or profile is not public for slug:", slug);
    notFound();
    // return null; // This line is no longer needed
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
