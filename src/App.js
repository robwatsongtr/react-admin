import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { PostList } from './posts'
import { PostEdit } from "./posts";
import { PostCreate } from "./posts";
import { UserList } from "./users";
import Dashboard from './Dashboard'
import authProvider  from './authProvider'
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import jsonServerProvider from 'ra-data-json-server';

// use jsonplaceholder as dummy API data 
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

// The App component renders an <Admin> component, which is the root component
// of a react-admin app. 

// This component expects a dataProvider prop.

// The work is in writing the dataProvider as it is an adapter to an API. 

// The admin component expects one or more <Resource> child components.
// Each resource maps a NAME to an ENDPOINT. 

// The line <Resource name="users" /> informs react-admin 
// to fetch the “users” records from the 
// https://jsonplaceholder.typicode.com/users URL. 
// <Resource> also defines the React components to use for each CRUD operation 
// (list (Read), create, edit(update, delete), and show).

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="users" list={UserList} icon={UserIcon} />
    <Resource 
      name="posts"  
      list={PostList} 
      edit={PostEdit} 
      create={PostCreate}
      icon={PostIcon}
    />
  </Admin>
)
export default App;