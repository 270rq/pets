/*
  Warnings:

  - You are about to drop the column `forWhom` on the `food` table. All the data in the column will be lost.
  - You are about to drop the column `breed` on the `pet` table. All the data in the column will be lost.
  - Added the required column `breedId` to the `food` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "food" DROP COLUMN "forWhom",
ADD COLUMN     "breedId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "pet" DROP COLUMN "breed",
ADD COLUMN     "breedId" INTEGER;

-- CreateTable
CREATE TABLE "breed" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "breed_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pet" ADD CONSTRAINT "pet_breedId_fkey" FOREIGN KEY ("breedId") REFERENCES "breed"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food" ADD CONSTRAINT "food_breedId_fkey" FOREIGN KEY ("breedId") REFERENCES "breed"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
