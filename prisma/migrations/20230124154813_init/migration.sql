/*
  Warnings:

  - The primary key for the `Chains` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `Chains` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[serialNo]` on the table `Chains` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[hash]` on the table `Chains` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Chains" DROP CONSTRAINT "Chains_pkey",
ALTER COLUMN "id" SET DATA TYPE VARCHAR(255);

-- CreateIndex
CREATE UNIQUE INDEX "Chains_id_key" ON "Chains"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Chains_serialNo_key" ON "Chains"("serialNo");

-- CreateIndex
CREATE UNIQUE INDEX "Chains_hash_key" ON "Chains"("hash");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_id_key" ON "Employee"("id");
