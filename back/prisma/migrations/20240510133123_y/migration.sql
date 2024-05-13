/*
  Warnings:

  - You are about to drop the `ficheinterventiondetail` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `ficheinterventiondetail` DROP FOREIGN KEY `FicheInterventionDetail_ficheInterventionId_fkey`;

-- DropTable
DROP TABLE `ficheinterventiondetail`;

-- CreateTable
CREATE TABLE `FicheInterventionDetails` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `rapport` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `ficheInterventionId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `FicheInterventionDetails` ADD CONSTRAINT `FicheInterventionDetails_ficheInterventionId_fkey` FOREIGN KEY (`ficheInterventionId`) REFERENCES `FicheIntervention`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
