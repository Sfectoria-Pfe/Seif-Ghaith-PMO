/*
  Warnings:

  - You are about to drop the column `email` on the `client` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `client` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `photo` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `client` DROP COLUMN `email`,
    DROP COLUMN `password`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `first_name`,
    DROP COLUMN `last_name`,
    DROP COLUMN `photo`,
    ADD COLUMN `isClient` BOOLEAN NOT NULL DEFAULT true;
