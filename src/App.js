import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { UserList } from "./users";
import jsonServerProvider from 'ra-data-json-server';

// use jsonplaceholder as dummy API data 
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

// The App component renders an <Admin> component, which is the root component
// of a react-admin app. 

// This component expect a dataProvider prop.
// The admin component expects one or more <Resource> child components.
// Each resource maps a NAME to an ENDPOINT. 

// The line <Resource name="users" /> informs react-admin 
// to fetch the “users” records from the 
// https://jsonplaceholder.typicode.com/users URL. 
// <Resource> also defines the React components to use for each CRUD operation 
// (list (Read), create, edit(update, delete), and show).

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource 
      name="users" 
      list={UserList} 
    />
  </Admin>
)
export default App;