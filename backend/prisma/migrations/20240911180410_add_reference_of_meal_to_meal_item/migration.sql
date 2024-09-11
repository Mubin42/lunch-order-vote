/*
  Warnings:

  - Added the required column `mealId` to the `MealItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MealItem" ADD COLUMN     "mealId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "MealItem" ADD CONSTRAINT "MealItem_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "Meal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
