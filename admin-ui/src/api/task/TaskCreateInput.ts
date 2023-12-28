import { FolderWhereUniqueInput } from "../folder/FolderWhereUniqueInput";

export type TaskCreateInput = {
  fid: FolderWhereUniqueInput;
  text: string;
};
