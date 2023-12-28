import { StringFilter } from "../../util/StringFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FolderWhereInput = {
  id?: StringFilter;
  tasks?: TaskListRelationFilter;
  uid?: UserWhereUniqueInput;
};
