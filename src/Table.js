import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import pendingicon from "./components/Image/pendingicon.svg"

const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'density',
        label: 'Density',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
];

function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}

const rows = [
    createData('CoinMarketCap', 'IN', 1324171354, '28/05/2024'),
    createData('CoinGecko', 'CN', 1403500365, '28/05/2024'),
    createData('DexView', 'IT', 60483973, 301340),
    createData('Dextools', 'US', 327167434, 9833520),
    createData('Avedex', 'CA', 37602103, 9984670),
    createData('Toobit', 'AU', 25475400, 7692024),
    createData('BitMart', 'DE', 83019200, 357578),
    createData('CoinMarketCap', 'IE', 4857000, 70273),
    createData('CoinGecko', 'MX', 126577691, 1972550),
    createData('DexView', 'JP', 126317000, 377973),
    createData('Dextools', 'FR', 67022000, 640679),
    createData('Avedex', 'GB', 67545757, 242495),
    createData('Toobit', 'RU', 146793744, 17098246),
    createData('NigCoinMarketCaperia', 'NG', 200962417, 923768),
    createData('BitMart', 'BR', 210147125, 8515767),
];

export default function StickyHeadTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', border: 'none', boxShadow: 'none', height: '90%' }}>
            <TableContainer sx={{ maxHeight: 440, '&::-webkit-scrollbar': { width: '0.4em' }, '&::-webkit-scrollbar-thumb': { backgroundColor: 'rgba(0, 0, 0, 0.2)' } }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover tabIndex={-1} key={row.code}>
                                        {columns.map((column, index) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {index === 1 ? (
                                                        <img src={pendingicon} alt="Pending" />
                                                    ) : (
                                                        column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value
                                                    )}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
