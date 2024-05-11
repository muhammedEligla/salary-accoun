// @ts-nocheck
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Container, Typography } from '@mui/material';
import Totals from './Totlas';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { TextLang } from '../App';
import { useContext } from 'react';



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

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}


export default function Home() {

  const text = useContext(TextLang)
  
  const data = useSelector((state)=> state.todos);
 
  
  const today = ((data.today * data.hourwork) - data.absence) / data.hourwork
  const hourValues = (data.salary / 30) / data.hourwork
  const salary = (today) * (data.salary / 30)
  
  const extra = data.extra
  const extraDays = extra / data.hourwork
  const extraSalary = hourValues * (extra * 1.5)

  const dobleExtra = data.dobleExtra;
  const dobleDays = dobleExtra / data.hourwork
  const dobleSalary = hourValues * (dobleExtra * 2);

  const absence = data.absence
  const absenceDays = absence / data.hourwork;
  const absenceSalary = hourValues * absence


const rows = [
  createData(text.text.normal , today.toFixed(1) , today * data.hourwork , salary.toFixed()),
  createData(text.text.extra, extraDays.toFixed(1) , extra , extraSalary.toFixed()),
  createData(text.text.doble, dobleDays.toFixed(1) ,dobleExtra , dobleSalary.toFixed()),
  createData(text.text.absn, absenceDays.toFixed(1) , absence, absenceSalary.toFixed(),)
];


const date = moment().format('LL');












  return (
    <Container>
    <Box sx={{textAlign:'center'}}>
    <Typography sx={{my:4}} variant="h4" >{date}</Typography>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>   </StyledTableCell>
            <StyledTableCell align="right">{text.text.days}</StyledTableCell>
            <StyledTableCell align="right">{text.text.hours}</StyledTableCell>
            <StyledTableCell align="right">{text.text.salary}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Totals />
    </Box>
    </Container>
  );
}