import React from 'react';
import PropTypes from 'prop-types';

import DataTable from './DataTable';
import Card from './Card';
import Icon from './Icon';

const DataList = ({ cols, data, actions }) => {
  return (
    <Card useBody={false}>
      <DataTable
        actions={actions}
        data={{ cols, rows: data }}
        hovered
      />
    </Card>
  )
};

DataList.propTypes = {
  cols: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
      ])
    })
  )
};

DataList.defaultProps = {
  actions: [
    { url: 'view', label: <Icon icon='eye'/> },
    { url: 'edit', label: <Icon icon='pencil'/> },
    { url: 'delete', label: <Icon icon='trash'/> },
  ]
};

export default DataList;
