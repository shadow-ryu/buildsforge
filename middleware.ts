// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define public routes
const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/",
  "/coming_soon(.*)",
  "/api/join-waitlist(.*)",
  "/api/webhook(.*)",
  "/([^/]+)", // Match any top-level path (for [slug])
]);

// Middleware
export default clerkMiddleware(async (auth, req: NextRequest) => {
  const hostname = req.headers.get("host") || "";
  const subdomain = hostname.split(".")[0];
  // const isRootDomain = ["buildsforge", "www", "localhost"].includes(subdomain);
  const isRootDomain =
    ["buildsforge", "www", "localhost"].includes(subdomain) ||
    hostname === "localhost:3000" ||
    hostname === "dev.buildsforge.com";

  // 1. Rew rite subdomain to path-based route
  if (!isRootDomain) {
    const url = req.nextUrl.clone();

    // Avoid rewriting public routes or already rewritten paths
    if (!url.pathname.startsWith(`/${subdomain}`)) {
      url.pathname = `/${subdomain}${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  // 2. Skip auth check for public routes
  if (isPublicRoute(req)) return;

  // 3. Auth check (only for root domain, not subdomains)
  if (isRootDomain) {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Optional: skip further logic for API routes
    const isApiRoute = req.nextUrl.pathname.startsWith("/api");
    if (isApiRoute) return;
  }

  // 4. Allow request to continue
  return NextResponse.next();
});

// Matcher to exclude static assets and match all app/api routes
export const config = {
  matcher: [
    "/((?!_next|favicon.ico|.*\\..*).*)", // Exclude static files
    "/(api|trpc)(.*)", // Include API routes for Clerk checks
  ],
};
