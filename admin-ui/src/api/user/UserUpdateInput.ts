import { FolderUpdateManyWithoutUsersInput } from "./FolderUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  folders?: FolderUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
