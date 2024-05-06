/*
  Warnings:

  - You are about to drop the column `description` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `order` table. All the data in the column will be lost.
  - You are about to alter the column `confirm` on the `order` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `TinyInt`.
  - Added the required column `item` to the `Orderline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prix_unitaire` to the `Orderline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qunatity` to the `Orderline` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `employee` ADD COLUMN `isArchived` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `description`,
    DROP COLUMN `name`,
    ADD COLUMN `currency` VARCHAR(191) NULL,
    ADD COLUMN `currentDate` DATETIME(3) NULL,
    ADD COLUMN `dateOfIssue` DATETIME(3) NULL,
    ADD COLUMN `discountAmount` DOUBLE NULL,
    ADD COLUMN `discountRate` DOUBLE NULL,
    ADD COLUMN `invoiceNumber` INTEGER NULL,
    ADD COLUMN `notes` VARCHAR(191) NULL,
    ADD COLUMN `subTotal` DOUBLE NULL,
    ADD COLUMN `taxAmount` DOUBLE NULL,
    ADD COLUMN `taxRate` DOUBLE NULL,
    ADD COLUMN `total` DOUBLE NULL,
    MODIFY `confirm` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `orderline` ADD COLUMN `item` VARCHAR(191) NOT NULL,
    ADD COLUMN `prix_unitaire` DOUBLE NOT NULL,
    ADD COLUMN `qunatity` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `isActive` BOOLEAN NOT NULL DEFAULT true;
