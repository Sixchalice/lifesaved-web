import { TaskCreateNestedManyWithoutFoldersInput } from "./TaskCreateNestedManyWithoutFoldersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FolderCreateInput = {
  tasks?: TaskCreateNestedManyWithoutFoldersInput;
  uid: UserWhereUniqueInput;
};
