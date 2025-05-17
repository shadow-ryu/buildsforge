/* eslint-disable no-var */
// lib/prisma.ts

import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient({
      log: ["query", "info", "warn", "error"], // Enable logging for dev
    });
  }
  prisma = global.prisma;
}

export default prisma;
