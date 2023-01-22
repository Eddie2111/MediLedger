-- CreateEnum
CREATE TYPE "UsersType" AS ENUM ('MANUFRACTURER', 'SUPPLIER', 'DISTRIBUTOR', 'RETAILER', 'CUSTOMER');

-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "nid" VARCHAR(64) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "phoneNo" VARCHAR(64) NOT NULL,
    "userType" "UsersType" NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" INTEGER NOT NULL,
    "nid" VARCHAR(64) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "licenseNo" VARCHAR(64) NOT NULL,
    "phoneNo" VARCHAR(64) NOT NULL,
    "userType" "UsersType" NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chains" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "serialNo" VARCHAR(255) NOT NULL,
    "hash" VARCHAR(255) NOT NULL,
    "checkedBy" VARCHAR(255)[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Chains_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_nid_key" ON "Employee"("nid");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_phoneNo_key" ON "Employee"("phoneNo");

-- CreateIndex
CREATE UNIQUE INDEX "Users_nid_key" ON "Users"("nid");

-- CreateIndex
CREATE UNIQUE INDEX "Users_licenseNo_key" ON "Users"("licenseNo");
