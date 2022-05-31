import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { UserList } from "./users";
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

// The App component renders an <Admin> component, which is the root component
// of a react-admin app. This component expect a dataProvider prop.
// The admin component expects one or more <Resource> child components.
// Each resource maps a NAME to an ENDPOINT. 

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource 
      name="users" 
      list={UserList} 
    />
  </Admin>
)
export default App;