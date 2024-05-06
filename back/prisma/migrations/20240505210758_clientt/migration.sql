/*
  Warnings:

  - Added the required column `adresse` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numero` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `client` ADD COLUMN `adresse` VARCHAR(191) NOT NULL,
    ADD COLUMN `numero` VARCHAR(191) NOT NULL;
