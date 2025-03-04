/*
  Warnings:

  - Added the required column `user` to the `Mail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Mail" ADD COLUMN     "user" TEXT NOT NULL;
