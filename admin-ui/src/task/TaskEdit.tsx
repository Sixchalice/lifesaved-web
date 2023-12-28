import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { FolderTitle } from "../folder/FolderTitle";

export const TaskEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="fid.id" reference="Folder" label="FID">
          <SelectInput optionText={FolderTitle} />
        </ReferenceInput>
        <TextInput label="Text" source="text" />
      </SimpleForm>
    </Edit>
  );
};
