import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import OrderHistoryData from '../../Data/OrderHistoryData';
const styles = { headingStyle: { fontFamily: 'inter', fontWeight: '400', fontSize: '14px', color: '#6C7275' } }
const OrderHistory = () => {
    return (
        <div>

            <Typography
                variant="h4"
                sx={{ fontFamily: "inter", fontWeight: "600", fontSize: "20px", marginBottom: '2rem' }}
            >
                Orders History
            </Typography>

            <TableContainer component={Paper} elevation={0} style={{ borderBottom: '1.5px solid rgb(207 210 213)', borderRadius: '0' }}>
                <Table sx={{ minWidth: 650 }} size="large" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={styles.headingStyle}>Number ID</TableCell>
                            <TableCell style={styles.headingStyle}>Dates</TableCell>
                            <TableCell style={styles.headingStyle}>Status</TableCell>
                            <TableCell style={styles.headingStyle}>Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {OrderHistoryData.map((row) => (
                            <TableRow
                                key={row.ID}

                                sx={{ '&:last-child td, &:last-child th': { border: 0 }, }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.ID}
                                </TableCell>
                                <TableCell >{row.Date}</TableCell>
                                <TableCell >{row.Status}</TableCell>
                                <TableCell >${row.Price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default OrderHistory