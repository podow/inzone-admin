import React from 'react';
import { Link } from 'react-router-dom';
import * as DT from 'react-data-table-component';
import PropTypes from 'prop-types';

import styles from './styles/DataTable.module.scss'

/**
 * DataTable Component wrapper
 * https://github.com/jbetancur/react-data-table-component
 */
const DataTable = (
  {
    title,
    headerActions,
    bordered,
    data,
    hovered,
    striped,
    actions
  }) => {
  if (!!actions) {
    data.cols = [...data.cols, {
      name: 'Actions',
      selector: 'actions',
      cell: (row) => row.actions.map((action, idx) => (
        <Link
          key={idx}
          className={styles.actions}
          to={`${action.url}/${row.id}`}
        >
          {action.label}
        </Link>
      ))
    }];

    data.rows = data.rows.map(row => (
      {
        ...row,
        actions
      }
    ));
  }

  return (
    <DT
      title={title}
      noHeader={!title}
      actions={headerActions}
      bordered={bordered}
      columns={data.cols}
      data={data.rows}
      highlightOnHover={hovered}
      // pointerOnHover={hovered}
      striped={striped}
      selectableRows
      pagination
    />
  );
};

DataTable.propTypes = {
  // Common types
  keyField: PropTypes.string,
  noDataComponent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  className: PropTypes.string,
  style: PropTypes.object,

  // Header types
  title: PropTypes.string,
  headerActions: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  contextTitle: PropTypes.string,
  contextActions: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  noHeader: PropTypes.bool,
  fixedHeader: PropTypes.bool,
  fixedHeaderScrollHeight: PropTypes.string,
  subHeader: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  subHeaderAlign: PropTypes.string,
  subHeaderWrap: PropTypes.bool,
  subHeaderComponent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),

  // Design types
  responsive: PropTypes.bool,
  bordered: PropTypes.bool,
  hovered: PropTypes.bool,
  disabled: PropTypes.bool,
  overflowY: PropTypes.bool,
  overflowYOffset: PropTypes.string,

  // Data types
  data: PropTypes.shape({
    cols: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        selector: PropTypes.string.isRequired,
        sort: PropTypes.bool,
        format: PropTypes.func,
        cell: PropTypes.func,
        grow: PropTypes.number,
        width: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.string
        ]),
        minWidth: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.string
        ]),
        maxWidth: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.string
        ]),
        right: PropTypes.bool,
        center: PropTypes.bool,
        compact: PropTypes.bool,
        button: PropTypes.bool,
        wrap: PropTypes.bool,
        allowOverflow: PropTypes.bool,
        ignoreRowClick: PropTypes.bool,
        hide: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number
        ])
      })
    ).isRequired,
    rows: PropTypes.arrayOf(PropTypes.object).isRequired
  }).isRequired,

  // Data actions types
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
      ])
    })
  ),

  // Functional types
  onTableUpdate: PropTypes.func,
  onRowClicked: PropTypes.func,

  // Progress Indicator types
  progressPending: PropTypes.bool,
  progressComponent: PropTypes.element,
  progressCentered: PropTypes.bool,

  // Rows types
  selectableRows: PropTypes.bool,
  clearSelectedRows: PropTypes.bool,
  selectableRowsComponent: PropTypes.func,
  selectableRowsComponentProps: PropTypes.object,
  expandableRows: PropTypes.bool,
  expandableIcon: PropTypes.object,
  expandableDisabledField: PropTypes.string,
  defaultExpandedField: PropTypes.string,
  expandableRowsComponent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),

  // Pagination types
  pagination: PropTypes.bool,
  paginationServer: PropTypes.bool,
  paginationDefaultPage: PropTypes.number,
  paginationTotalRows: PropTypes.number,
  paginationPerPage: PropTypes.number,
  paginationRowsPerPageOptions: PropTypes.number,
  onChangePage: PropTypes.func,
  onChangeRowsPerPage: PropTypes.func,
  paginationComponent: PropTypes.func,
  paginationComponentOptions: PropTypes.object,
  paginationIconFirstPage: PropTypes.element,
  paginationIconLastPage: PropTypes.element,
  paginationIconNext: PropTypes.element,
  paginationIconPrevious: PropTypes.element,

  // Sotring types
  defaultSortField: PropTypes.string,
  defaultSortAsc: PropTypes.bool,
  sortIcon: PropTypes.element,
  onSort: PropTypes.func,
  sortFunction: PropTypes.func,
};

export default DataTable;
