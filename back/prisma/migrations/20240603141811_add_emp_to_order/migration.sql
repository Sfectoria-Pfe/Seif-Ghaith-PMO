-- AlterTable
ALTER TABLE `orderreparation` ADD COLUMN `employeeId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `OrderReparation` ADD CONSTRAINT `OrderReparation_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `Employee`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
