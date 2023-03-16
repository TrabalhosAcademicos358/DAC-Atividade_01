-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "release_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "publishers" (
    "codigo" SERIAL NOT NULL,
    "place_of_origin" TEXT NOT NULL,
    "trading_name" TEXT NOT NULL,

    CONSTRAINT "publishers_pkey" PRIMARY KEY ("codigo")
);
