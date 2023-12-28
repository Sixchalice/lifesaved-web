import { FolderCreateNestedManyWithoutUsersInput } from "./FolderCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  folders?: FolderCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
