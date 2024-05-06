/*
  Warnings:

  - You are about to drop the column `statues` on the `entreedevice` table. All the data in the column will be lost.
  - You are about to drop the column `rapport` on the `orderreparation` table. All the data in the column will be lost.
  - You are about to alter the column `status` on the `orderreparation` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(3))`.

*/
-- AlterTable
ALTER TABLE `entreedevice` DROP COLUMN `statues`,
    ADD COLUMN `reclamationId` INTEGER NULL;

-- AlterTable
ALTER TABLE `orderreparation` DROP COLUMN `rapport`,
    ADD COLUMN `entreeDeviceId` INTEGER NULL,
    MODIFY `status` ENUM('inProgress', 'completed', 'pending', 'onhold') NOT NULL;

-- AddForeignKey
ALTER TABLE `EntreeDevice` ADD CONSTRAINT `EntreeDevice_reclamationId_fkey` FOREIGN KEY (`reclamationId`) REFERENCES `Reclamation`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderReparation` ADD CONSTRAINT `OrderReparation_entreeDeviceId_fkey` FOREIGN KEY (`entreeDeviceId`) REFERENCES `EntreeDevice`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
