/*
  Warnings:

  - You are about to drop the column `content` on the `Posts` table. All the data in the column will be lost.
  - You are about to drop the column `userName` on the `Users` table. All the data in the column will be lost.
  - Added the required column `authorId` to the `Posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contentText` to the `Posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Posts" DROP COLUMN "content",
ADD COLUMN     "authorId" INTEGER NOT NULL,
ADD COLUMN     "contentText" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "userName";

-- AddForeignKey
ALTER TABLE "Posts" ADD CONSTRAINT "Posts_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Users"("idUsers") ON DELETE RESTRICT ON UPDATE CASCADE;
