/*
  Warnings:

  - The primary key for the `publishers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `codigo` on the `publishers` table. All the data in the column will be lost.
  - Added the required column `id` to the `publishers` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_publishers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "place_of_origin" TEXT NOT NULL,
    "trading_name" TEXT NOT NULL,
    "link_img" TEXT NOT NULL
);
INSERT INTO "new_publishers" ("link_img", "place_of_origin", "trading_name") SELECT "link_img", "place_of_origin", "trading_name" FROM "publishers";
DROP TABLE "publishers";
ALTER TABLE "new_publishers" RENAME TO "publishers";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
