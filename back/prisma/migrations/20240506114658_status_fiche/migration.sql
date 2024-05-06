/*
  Warnings:

  - You are about to drop the column `ongoing` on the `etape` table. All the data in the column will be lost.
  - You are about to alter the column `status` on the `etape` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(2))`.
  - You are about to alter the column `status` on the `ficheintervention` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.
  - Added the required column `description` to the `FicheInterventionDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rapport` to the `FicheInterventionDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `FicheInterventionDetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `etape` DROP COLUMN `ongoing`,
    MODIFY `status` ENUM('inProgress', 'completed', 'pending', 'onhold') NOT NULL;

-- AlterTable
ALTER TABLE `ficheintervention` MODIFY `status` ENUM('inProgress', 'toFactured', 'closed') NOT NULL DEFAULT 'inProgress';

-- AlterTable
ALTER TABLE `ficheinterventiondetails` ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `rapport` VARCHAR(191) NOT NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;
