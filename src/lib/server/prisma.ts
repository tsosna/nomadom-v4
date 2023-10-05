import { dev } from '$app/environment';
import { PrismaClient } from '@prisma/client';



const prisma = global.__prisma || new PrismaClient();

if (dev) {
  global.__prisma = prisma;
}

export { prisma };
