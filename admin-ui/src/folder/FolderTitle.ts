import { Folder as TFolder } from "../api/folder/Folder";

export const FOLDER_TITLE_FIELD = "name";

export const FolderTitle = (record: TFolder): string => {
  return record.name?.toString() || String(record.id);
};
