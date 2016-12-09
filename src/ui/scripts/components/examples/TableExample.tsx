import * as React from 'react';
import {
    Table,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableRow,
    TableCell
} from '../photon';

const TableExample = () => (
    <div className="padded-more">
        <Table striped>
            <TableHeader>
                <TableRow>
                    <TableHeaderCell>Header 1</TableHeaderCell>
                    <TableHeaderCell>Header 2</TableHeaderCell>
                    <TableHeaderCell>Header 3</TableHeaderCell>
                    <TableHeaderCell>Header 4</TableHeaderCell>
                    <TableHeaderCell>Header 5</TableHeaderCell>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>Row 1 - Column 1</TableCell>
                    <TableCell>Row 1 - Column 2</TableCell>
                    <TableCell>Row 1 - Column 3</TableCell>
                    <TableCell>Row 1 - Column 4</TableCell>
                    <TableCell>Row 1 - Column 5</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Row 2 - Column 1</TableCell>
                    <TableCell>Row 2 - Column 2</TableCell>
                    <TableCell>Row 2 - Column 3</TableCell>
                    <TableCell>Row 2 - Column 4</TableCell>
                    <TableCell>Row 2 - Column 5</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Row 3 - Column 1</TableCell>
                    <TableCell>Row 3 - Column 2</TableCell>
                    <TableCell>Row 3 - Column 3</TableCell>
                    <TableCell>Row 3 - Column 4</TableCell>
                    <TableCell>Row 3 - Column 5</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Row 4 - Column 1</TableCell>
                    <TableCell>Row 4 - Column 2</TableCell>
                    <TableCell>Row 4 - Column 3</TableCell>
                    <TableCell>Row 4 - Column 4</TableCell>
                    <TableCell>Row 4 - Column 5</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
);

export default TableExample;
