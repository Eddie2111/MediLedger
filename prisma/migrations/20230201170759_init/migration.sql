/*
  Warnings:

  - Added the required column `creatorEmail` to the `Chains` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chains" ADD COLUMN     "creatorEmail" VARCHAR(35) NOT NULL;
