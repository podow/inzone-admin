import React, { useState, useEffect } from 'react';
import DataTable from './DataTable';
import Card from './Card';

import axios from 'axios';
import Icon from './Icon';

const Cities = () => {
  const cols = [
    {
      name: 'ID',
      selector: 'id',
      sortable: true
    },
    {
      name: 'Name',
      selector: 'name',
      sortable: true
    },
    {
      name: 'Country',
      selector: 'country',
      sortable: true
    }
  ];
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://inzone-api.herokuapp.com/api/v1/cities'
      );

      setRows(result.data.data.rows);
    };

    fetchData();
  }, []);

  return (
    <Card useBody={false}>
      <DataTable
        actions={[
          { url: 'view', label: <Icon icon='eye'/> },
          { url: 'edit', label: <Icon icon='pencil'/> },
          { url: 'delete', label: <Icon icon='trash'/> },
        ]}
        data={{ cols, rows }}
        hovered
      />
    </Card>
  )
};

export default Cities;
