-- DropForeignKey
ALTER TABLE `orderline` DROP FOREIGN KEY `Orderline_orderId_fkey`;

-- AddForeignKey
ALTER TABLE `Orderline` ADD CONSTRAINT `Orderline_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
