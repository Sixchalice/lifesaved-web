import { TaskUpdateManyWithoutFoldersInput } from "./TaskUpdateManyWithoutFoldersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FolderUpdateInput = {
  name?: string;
  tasks?: TaskUpdateManyWithoutFoldersInput;
  uid?: UserWhereUniqueInput;
};
