import React  from 'react';
import DataTable from './DataTable';
import Card from './Card';

import mockData from '../mock/table-data';

export default () => {
    return (
        <>
            <h1>{process.env.REACT_APP_API_HOST}</h1>
            <Card
                title={<h5>Card title</h5>}
                useBody={false}
            >
                <DataTable
                    data={mockData}
                />
            </Card>
        </>
    )
}