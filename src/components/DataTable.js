import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './styles/DataTable.module.scss';

const DataTable = ({ striped, bordered, hovered, data }) => {
    const [sort, setSort] = useState(null);

    const sortingHandler = () => {
        if (sort === 'asc' || sort === null) {
            setSort('desc');
        } else {
            setSort('asc');
        }
    };

    return (
        <>
            <table
                className={classNames([
                    styles.dataTable,
                    striped && styles.striped,
                    bordered && styles.bordered,
                    hovered && styles.hovered
                ])}
            >
                <thead>
                    <tr>
                        { data.cols.map(col => (
                            <th
                                key={col.field}
                                className={classNames([
                                    sort === 'asc' && styles.asc,
                                    sort === 'desc' && styles.desc
                                ])}
                                onClick={sortingHandler}
                            >{col.label}</th>
                        )) }
                    </tr>
                </thead>
                <tbody>
                    { data.rows.map(row => (
                        <tr key={row.id}>
                            { data.cols.map(col => (
                                <td key={col.label}>{row[col.field]}</td>
                            )) }
                        </tr>
                    )) }
                </tbody>
            </table>
        </>
    );
};

DataTable.propTypes = {
    striped: PropTypes.bool,
    bordered: PropTypes.bool,
    data: PropTypes.shape({
        cols: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string.isRequired,
                field: PropTypes.string.isRequired,
                sort: PropTypes.string,
                width: PropTypes.number
            })
        ).isRequired,
        rows: PropTypes.arrayOf(PropTypes.object).isRequired
    })
};

DataTable.defaultProps = {
    striped: false,
    bordered: false
};

export default DataTable;