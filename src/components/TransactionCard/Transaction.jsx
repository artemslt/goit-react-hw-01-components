import PropTypes from 'prop-types';

import {
    Table,
    TableHead,
    TableRow,
    TableTh,
    TableRowType,
    TableTr,
} from './Transaction.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <TableHead>
                <tr>
                    <TableTh>Type</TableTh>
                    <TableTh>Amount</TableTh>
                    <TableTh>Currency</TableTh>
                </tr>
            </TableHead>

            <tbody>
                {items.map(item => {
                    return (
                        <TableTr key={item.id}>
                            <TableRowType>{item.type}</TableRowType>
                            <TableRow>{item.amount}</TableRow>
                            <TableRow>{item.currency}</TableRow>
                        </TableTr>
                    );
                })}
            </tbody>
        </Table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ),
};
