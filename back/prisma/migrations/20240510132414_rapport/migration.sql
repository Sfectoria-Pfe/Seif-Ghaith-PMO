/*
  Warnings:

  - You are about to drop the column `rapport` on the `entreedevice` table. All the data in the column will be lost.
  - You are about to drop the `ficheinterventiondetails` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `ficheinterventiondetails` DROP FOREIGN KEY `FicheInterventionDetails_ficheInterventionId_fkey`;

-- DropIndex
DROP INDEX `EntreeDevice_etapeId_fkey` ON `entreedevice`;

-- AlterTable
ALTER TABLE `entreedevice` DROP COLUMN `rapport`;

-- DropTable
DROP TABLE `ficheinterventiondetails`;

-- CreateTable
CREATE TABLE `FicheInterventionDetail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `rapport` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `ficheInterventionId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `FicheInterventionDetail` ADD CONSTRAINT `FicheInterventionDetail_ficheInterventionId_fkey` FOREIGN KEY (`ficheInterventionId`) REFERENCES `FicheIntervention`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
