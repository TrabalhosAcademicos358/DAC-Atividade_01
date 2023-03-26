/*
  Warnings:

  - You are about to drop the column `release_date` on the `books` table. All the data in the column will be lost.
  - Added the required column `author_name` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_books" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "link_img" TEXT NOT NULL,
    "author_name" TEXT NOT NULL
);
INSERT INTO "new_books" ("id", "link_img", "title") SELECT "id", "link_img", "title" FROM "books";
DROP TABLE "books";
ALTER TABLE "new_books" RENAME TO "books";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
