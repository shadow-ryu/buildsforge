import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Create Clerk-authenticated User
  const user = await prisma.user.create({
    data: {
      email: "jane.builder@example.com",
      name: "Jane Builder",
      clerkId: "user_clerk_123456", // ← Replace with real Clerk ID in production
    },
  });
  console.log(`User created: ${user.name}`);

  // console.log(`Seed complete: Product -> ${product.name}, Roadmap -> ${roadmap.mvpSummary}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
