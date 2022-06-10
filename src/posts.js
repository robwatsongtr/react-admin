import * as React from "react";
import {
  List,
  SimpleList,
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
import { useMediaQuery } from '@mui/material';

// React-admin can use Input components to create a multi-criteria search 
// engine in the list view. Pass an array of such Input components
// to the List filters prop to enable filtering:
const postFilters = [
  <TextInput source="q" label="Search-o-rama" alwaysOn />,

  <ReferenceInput source="userId" label="User-find" reference="users">
        <SelectInput optionText="name" />
  </ReferenceInput>,
]

// Relationships: each post is related to a user 
// relationships created by <ReferenceField>
// Also we have a nicely UX'ed design here with just the name, title, and edit button.
// 
// Now added mobile functionality with useMediaQuery and putting small and large in a ternary.
export const PostList = () => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  return (
    <List filters={postFilters}>
        {isSmall ? (
            <SimpleList
                primaryText={ record => record.title }
                secondaryText={ record => `${record.views} views`}
                tertiaryText={ record => new Date(record.published_at).toLocaleDateString() }
            />
        ) : (
            <Datagrid>
                <TextField source="id" />
                <ReferenceField label="User" source="userId" reference="users">
                    <TextField source="name" />
                </ReferenceField>
                <TextField source="title" />
                <EditButton />
            </Datagrid>
        )}
    </List>
  )
};

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
