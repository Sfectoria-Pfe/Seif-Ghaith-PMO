/*
  Warnings:

  - Made the column `date` on table `etape` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `etape` MODIFY `date` DATETIME(3) NOT NULL;
