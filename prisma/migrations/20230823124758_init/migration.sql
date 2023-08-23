-- CreateTable
CREATE TABLE "Contacts" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "Contacts_pkey" PRIMARY KEY ("id")
);
