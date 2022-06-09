import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  useRecordContext,
} from 'react-admin';

// Relationships: each post is related to a user 
// relationships created by <ReferenceField>
// Also we have a nicely UX'ed design here with just the name, title, and edit button.
export const PostList = () => (
    <List>
        <Datagrid>

            <TextField source="id" />

            <ReferenceField source="userId" reference="users">
              <TextField source="name" />
            </ReferenceField>

            <TextField source="title" />
            <EditButton />

        </Datagrid>
    </List>
);

const PostTitle = () => {
  // context API is like a global store in React
  const record = useRecordContext()
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
  
}

export const PostEdit = () => (
  <Edit title={ <PostTitle /> }>

      <SimpleForm>

          <TextInput disabled source="id" />
          <ReferenceInput source="userId" reference="users">
              <SelectInput optionText="name" />
          </ReferenceInput>

          
          <TextInput source="title" />
          <TextInput multiline source="body" />

      </SimpleForm>

  </Edit>
);

export const PostCreate = props => (
    <Create {...props}>

        <SimpleForm>

            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>

            <TextInput source="title" />
            <TextInput multiline source="body" />

        </SimpleForm>
        
    </Create>
);
