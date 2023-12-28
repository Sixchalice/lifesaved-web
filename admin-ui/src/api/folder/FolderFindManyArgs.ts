import { FolderWhereInput } from "./FolderWhereInput";
import { FolderOrderByInput } from "./FolderOrderByInput";

export type FolderFindManyArgs = {
  where?: FolderWhereInput;
  orderBy?: Array<FolderOrderByInput>;
  skip?: number;
  take?: number;
};
