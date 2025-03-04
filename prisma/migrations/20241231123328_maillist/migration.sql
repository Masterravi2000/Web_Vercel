/*
  Warnings:

  - You are about to drop the `mail` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "mail";

-- CreateTable
CREATE TABLE "Mailist" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Mailist_pkey" PRIMARY KEY ("id")
);
