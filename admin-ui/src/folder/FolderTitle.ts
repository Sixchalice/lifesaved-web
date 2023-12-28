import { Folder as TFolder } from "../api/folder/Folder";

export const FOLDER_TITLE_FIELD = "id";

export const FolderTitle = (record: TFolder): string => {
  return record.id?.toString() || String(record.id);
};
