/*
  Warnings:

  - The primary key for the `Users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `createdAt` on the `Employee` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `updatedAt` on the `Employee` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `createdAt` on the `Users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `updatedAt` on the `Users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" VARCHAR(21) NOT NULL,
DROP COLUMN "updatedAt",
ADD COLUMN     "updatedAt" VARCHAR(21) NOT NULL;

-- AlterTable
ALTER TABLE "Users" DROP CONSTRAINT "Users_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" VARCHAR(21) NOT NULL,
DROP COLUMN "updatedAt",
ADD COLUMN     "updatedAt" VARCHAR(21) NOT NULL,
ADD CONSTRAINT "Users_pkey" PRIMARY KEY ("id");
