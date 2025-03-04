/*
  Warnings:

  - You are about to drop the `Mailist` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Mailist";

-- CreateTable
CREATE TABLE "Mail" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Mail_pkey" PRIMARY KEY ("id")
);
