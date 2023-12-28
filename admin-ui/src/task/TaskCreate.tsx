import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { FolderTitle } from "../folder/FolderTitle";

export const TaskCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="fid.id" reference="Folder" label="FID">
          <SelectInput optionText={FolderTitle} />
        </ReferenceInput>
        <TextInput label="Text" source="text" />
      </SimpleForm>
    </Create>
  );
};
