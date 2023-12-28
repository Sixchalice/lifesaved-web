import { SortOrder } from "../../util/SortOrder";

export type FolderOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  uidId?: SortOrder;
  updatedAt?: SortOrder;
};
