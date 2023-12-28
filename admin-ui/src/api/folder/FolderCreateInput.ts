import { TaskCreateNestedManyWithoutFoldersInput } from "./TaskCreateNestedManyWithoutFoldersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FolderCreateInput = {
  name: string;
  tasks?: TaskCreateNestedManyWithoutFoldersInput;
  uid: UserWhereUniqueInput;
};
