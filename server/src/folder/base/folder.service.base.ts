/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Folder, // @ts-ignore
  Task, // @ts-ignore
  User,
} from "@prisma/client";

export class FolderServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.FolderCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.FolderCountArgs>
  ): Promise<number> {
    return this.prisma.folder.count(args);
  }

  async folders<T extends Prisma.FolderFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FolderFindManyArgs>
  ): Promise<Folder[]> {
    return this.prisma.folder.findMany(args);
  }
  async folder<T extends Prisma.FolderFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FolderFindUniqueArgs>
  ): Promise<Folder | null> {
    return this.prisma.folder.findUnique(args);
  }
  async createFolder<T extends Prisma.FolderCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FolderCreateArgs>
  ): Promise<Folder> {
    return this.prisma.folder.create<T>(args);
  }
  async updateFolder<T extends Prisma.FolderUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FolderUpdateArgs>
  ): Promise<Folder> {
    return this.prisma.folder.update<T>(args);
  }
  async deleteFolder<T extends Prisma.FolderDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FolderDeleteArgs>
  ): Promise<Folder> {
    return this.prisma.folder.delete(args);
  }

  async findTasks(
    parentId: string,
    args: Prisma.TaskFindManyArgs
  ): Promise<Task[]> {
    return this.prisma.folder
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .tasks(args);
  }

  async getUid(parentId: string): Promise<User | null> {
    return this.prisma.folder
      .findUnique({
        where: { id: parentId },
      })
      .uid();
  }
}