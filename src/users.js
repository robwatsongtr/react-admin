import * as React from "react";
import { Datagrid, EmailField, List, TextField } from 'react-admin';
import MyUrlField from './MyUrlField';

// this is the code that comes from list={ListGuesser}

// The <list> component grabs the information from the API.

// The actual disply is delegated to the <Datagrid> component
// The child field components determine the columns to render.

// Each Field component maps a different field in the API response, 
// as specified by the source prop

// now we modify the url field to a custom component MyUrlField.js 

// *****
// so the react admin dev process is let the guesser do its job,
// select the fields you want, then customise the types
// *****


export const UserList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="phone" />
      <MyUrlField source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
);


