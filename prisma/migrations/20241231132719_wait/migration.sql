/*
  Warnings:

  - You are about to drop the column `email` on the `Mail` table. All the data in the column will be lost.
  - Added the required column `waitingemail` to the `Mail` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Mail_email_key";

-- AlterTable
ALTER TABLE "Mail" DROP COLUMN "email",
ADD COLUMN     "waitingemail" TEXT NOT NULL;
