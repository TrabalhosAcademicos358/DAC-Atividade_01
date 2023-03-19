/*
  Warnings:

  - You are about to alter the column `release_date` on the `books` table. The data in that column could be lost. The data in that column will be cast from `Unsupported("timestamp(3)")` to `DateTime`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_books" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "link_img" TEXT NOT NULL,
    "release_date" DATETIME NOT NULL
);
INSERT INTO "new_books" ("id", "link_img", "release_date", "title") SELECT "id", "link_img", "release_date", "title" FROM "books";
DROP TABLE "books";
ALTER TABLE "new_books" RENAME TO "books";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
