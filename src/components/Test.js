import React, { useState, useEffect } from 'react';
import DataTable from './DataTable';
import Card from './Card';

import axios from 'axios';

const Test = () => {
    const cols = [
        {
            label: 'ID',
            field: 'id'
        },
        {
            label: 'Name',
            field: 'name'
        },
        {
            label: 'Country',
            field: 'country',
        },
        {
            label: 'isDeleted',
            field: 'isDeleted',
        },
        {
            label: 'published',
            field: 'published',
        },
        {
            label: 'createdAt',
            field: 'createdAt',
        },
        {
            label: 'updatedAt',
            field: 'updatedAt',
        }
    ];
    const [rows, setRows] = useState([]);

    useEffect (() => {
        const fetchData = async () => {
            const result = await axios(
                'https://inzone-api.herokuapp.com/api/v1/cities'
            );

            setRows(result.data.data.rows);
        };

        fetchData();
    }, []);

    return (
        <Card
            title={<h5>Card title</h5>}
            useBody={false}
        >
            <DataTable
                striped
                data={{ cols, rows }}
            />
        </Card>
    )
};

export default Test;