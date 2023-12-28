import { TaskUpdateManyWithoutFoldersInput } from "./TaskUpdateManyWithoutFoldersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FolderUpdateInput = {
  tasks?: TaskUpdateManyWithoutFoldersInput;
  uid?: UserWhereUniqueInput;
};
