/*
  Warnings:

  - You are about to drop the column `checkedBy` on the `Chains` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Chains` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Chains` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Chains" DROP COLUMN "checkedBy",
DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";
