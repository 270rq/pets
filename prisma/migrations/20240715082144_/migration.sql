/*
  Warnings:

  - You are about to drop the column `ForWhom` on the `food` table. All the data in the column will be lost.
  - Added the required column `forWhom` to the `food` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "food" DROP COLUMN "ForWhom",
ADD COLUMN     "forWhom" INTEGER NOT NULL;
