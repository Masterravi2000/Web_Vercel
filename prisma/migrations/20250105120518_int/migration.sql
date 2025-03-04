/*
  Warnings:

  - You are about to alter the column `phone` on the `Query` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Query" ALTER COLUMN "phone" SET DATA TYPE INTEGER;
