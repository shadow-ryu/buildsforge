
import QueryProvider from "@/components/QueryProvider";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in");
  }
  const user = await prisma.user.findUnique({
    where: { clerkId: userId! },
  });
  if (user?.onboardingCompleted) {
    redirect("/dashboard");
  }
  return <QueryProvider>{children}</QueryProvider>;
}
