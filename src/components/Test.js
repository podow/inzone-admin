import React from 'react';
import DataTable from './DataTable';
import Card from './Card';

export default () => (
    <>
        <h1>{process.env.REACT_APP_API_HOST}</h1>
        <Card
            title={
                <h5>Card title</h5>
            }
            actions={[
                {
                    icon: <span>123</span>,
                    onClick() {
                        console.log(123);
                    }
                },
                {
                    icon: <span>456</span>,
                    onClick() {
                        console.log(456);
                    }
                }
            ]}
            useBody={false}
            footer={
                <span>Card footer</span>
            }
        >
            <DataTable striped />
        </Card>
    </>
)