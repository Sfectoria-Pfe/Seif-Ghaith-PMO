/*
  Warnings:

  - You are about to drop the column `password` on the `employee` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `employee` DROP COLUMN `password`;

-- CreateIndex
CREATE UNIQUE INDEX `Employee_email_key` ON `Employee`(`email`);
