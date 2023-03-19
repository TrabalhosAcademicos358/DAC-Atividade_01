/*
  Warnings:

  - Added the required column `link_img` to the `books` table without a default value. This is not possible if the table is not empty.
  - Added the required column `link_img` to the `publishers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "books" ADD COLUMN     "link_img" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "publishers" ADD COLUMN     "link_img" TEXT NOT NULL;
