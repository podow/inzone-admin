import React, { useState, useEffect } from 'react';
import axios from 'axios';

import DataList from './DataList';

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
    <DataList cols={cols} data={rows} />
  )
};

export default Cities;
