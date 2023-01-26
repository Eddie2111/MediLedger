/*
  Warnings:

  - You are about to drop the column `userType` on the `Employee` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "userType",
ADD COLUMN     "email" VARCHAR(35) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Employee_email_key" ON "Employee"("email");
