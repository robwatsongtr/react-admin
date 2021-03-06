import * as React from "react";
import { useRecordContext } from 'react-admin';
import { Link } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';


// in react-admin, fields are simple React components. At runtime
// they grab the the record fetched from the API with a custom hook

// STYLES:
// React relies on MUI, which support a prop called 'sx', which allows
// custom inline styles. Here we will remove the underline from 
// the link and add a lauch icon. 

const MyUrlField = ({ source }) => {
    const record = useRecordContext();
    return record ? (
        <Link href={record[source]} sx={{ textDecoration: 'none'}}>
            {record[source]}
            <LaunchIcon sx={{ width: '0.5em', height: '0.5em', paddingLeft: 1 }} />
        </Link>
    ) : null;
}

export default MyUrlField;