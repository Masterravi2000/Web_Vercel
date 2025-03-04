/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Mail` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Mail_email_key" ON "Mail"("email");
