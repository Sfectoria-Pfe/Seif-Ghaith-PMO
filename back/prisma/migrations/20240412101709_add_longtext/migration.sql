-- AlterTable
ALTER TABLE `client` MODIFY `photo` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `employee` MODIFY `photo` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `entreedevice` MODIFY `image` LONGTEXT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `photo` LONGTEXT NOT NULL;
