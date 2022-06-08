import * as React from "react";
import { Datagrid, List, ReferenceField, TextField, EditButton } from 'react-admin';

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