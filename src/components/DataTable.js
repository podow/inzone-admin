import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './styles/DataTable.module.scss';

const DataTable = ({ striped, bordered }) => {
    return (
        <table
            className={classNames([
                styles.dataTable,
                striped && styles.striped,
                bordered && styles.bordered
            ])}
        >
            <thead>
                <tr>
                    <th>123</th>
                    <th>456</th>
                    <th>789</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>123</td>
                    <td>456</td>
                    <td>789</td>
                </tr>
                <tr>
                    <td>123</td>
                    <td>456</td>
                    <td>789</td>
                </tr>
                <tr>
                    <td>123</td>
                    <td>456</td>
                    <td>789</td>
                    <td>000</td>
                </tr>
            </tbody>
            <tfoot>
            <tr>
                <td>123</td>
                <td>456</td>
                <td>789</td>
            </tr>
            </tfoot>
        </table>
    );
};

DataTable.propTypes = {
    striped: PropTypes.bool,
    bordered: PropTypes.bool
};

DataTable.defaultProps = {
    striped: false,
    bordered: false
};

export default DataTable;