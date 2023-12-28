import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FolderListRelationFilter } from "../folder/FolderListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  folders?: FolderListRelationFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
