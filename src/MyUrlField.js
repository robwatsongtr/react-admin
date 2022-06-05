import * as React from "react";
import { useRecordContext } from 'react-admin';

// in react-admin, fields are simple React components. At runtime
// they grab the the record fetched from the API with a custom hook

const MyUrlField = ({ source }) => {
    const record = useRecordContext();
    return record ? (
        <a href={record[source]}>
            {record[source]}
        </a>
    ) : null;
}

export default MyUrlField;