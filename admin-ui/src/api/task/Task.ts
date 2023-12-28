import { Folder } from "../folder/Folder";

export type Task = {
  createdAt: Date;
  fid?: Folder;
  id: string;
  text: string;
  updatedAt: Date;
};
