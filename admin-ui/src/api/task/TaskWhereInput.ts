import { FolderWhereUniqueInput } from "../folder/FolderWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TaskWhereInput = {
  fid?: FolderWhereUniqueInput;
  id?: StringFilter;
  text?: StringFilter;
};
