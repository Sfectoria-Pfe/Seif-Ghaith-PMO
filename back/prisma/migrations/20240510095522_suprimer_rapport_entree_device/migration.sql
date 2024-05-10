/*
  Warnings:

  - You are about to drop the column `rapport` on the `entreedevice` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `entreedevice` DROP FOREIGN KEY `EntreeDevice_etapeId_fkey`;

-- AlterTable
ALTER TABLE `entreedevice` DROP COLUMN `rapport`;
