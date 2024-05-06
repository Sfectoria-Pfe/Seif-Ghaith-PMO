/*
  Warnings:

  - Made the column `orderReparationId` on table `ficheintervention` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `ficheintervention` DROP FOREIGN KEY `FicheIntervention_orderReparationId_fkey`;

-- AlterTable
ALTER TABLE `ficheintervention` MODIFY `orderReparationId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `FicheIntervention` ADD CONSTRAINT `FicheIntervention_orderReparationId_fkey` FOREIGN KEY (`orderReparationId`) REFERENCES `OrderReparation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
