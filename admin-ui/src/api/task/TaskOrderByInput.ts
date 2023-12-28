import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  createdAt?: SortOrder;
  fidId?: SortOrder;
  id?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
