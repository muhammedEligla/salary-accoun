// @ts-nocheck
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { TextLang } from '../App';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat) {
  return { name, calories, fat };
}


export default function Totals() {
  const text = useContext(TextLang).text
  const data = useSelector((state)=> state.todos);
  const today = ((data.today * data.hourwork) - data.absence) / data.hourwork

  const salary = data.salary;
  const hourValues = (data.salary / 30) / data.hourwork


  const extraSalary = hourValues * (data.extra * 1.5)
  const dobleSalary = hourValues * (data.dobleExtra * 2);

  const totalExtra = extraSalary + dobleSalary ;
  const total = ((today) * (data.salary / 30)) + totalExtra

const rows = [
  createData( salary.toFixed() + ' TL', totalExtra.toFixed() + ' TL', total.toFixed() + ' TL'),
];

  return (
    <Box sx={{mt:7}}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell >{text.yourSalary}</StyledTableCell>
            <StyledTableCell align="right">{text.totaltheExtra}</StyledTableCell>
            <StyledTableCell align="right">{text.total}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
}