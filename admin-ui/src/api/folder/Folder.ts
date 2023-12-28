import { Task } from "../task/Task";
import { User } from "../user/User";

export type Folder = {
  createdAt: Date;
  id: string;
  name: string;
  tasks?: Array<Task>;
  uid?: User;
  updatedAt: Date;
};
