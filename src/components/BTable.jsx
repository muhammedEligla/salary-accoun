/* eslint-disable react/prop-types */
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SubTable from './SubTable';
import { Box, Button, Divider, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { removeItem } from '../rtk/DateSlice';
import { useContext } from 'react';
import { TextLang } from '../App';

export default function BTable({extra , doble , today , absence , salary , hourwork , date}) {

  const text = useContext(TextLang).text;
  const dispatch = useDispatch();


  const day = ((today * hourwork) - absence) / hourwork
  const normalhour = day * hourwork
  const normalSalary = (salary / 30 ) * day;
  const hourASalary = ((salary / 30 ) / hourwork)

  const extraDay = extra / hourwork
  const extraSalary = (hourASalary * 1.5) * extra ;

  
  const dobleDay = doble / hourwork
  const dobleSalary =( hourASalary * 2) * doble;


  const absenceDay = absence / hourwork
  const absencelary = hourASalary * absence;

  const totalExtra = extraSalary + dobleSalary




function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData(text.normal, day.toFixed(2) , normalhour ,normalSalary.toFixed() ),
  createData(text.extra, extraDay.toFixed(2), extra, extraSalary.toFixed()),
  createData(text.doble, dobleDay.toFixed(2), doble,dobleSalary.toFixed()),
  createData(text.absn, absenceDay.toFixed(2), absence,absencelary.toFixed()),
];



  return (
    <>
    <Box sx={{mt:5 , mb:10 , textAlign:'center'}}>
    <Typography variant="h4" >{date}</Typography>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
            <Button onClick={()=> dispatch(removeItem(date))}><Close /></Button>
            </TableCell>
            <TableCell align="right">{text.days}</TableCell>
            <TableCell align="right">{text.hours}</TableCell>
            <TableCell align="right">{text.salary}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <SubTable text={text} salary={salary} totalExtra={totalExtra} total={normalSalary + totalExtra} />
    </Box>
    <Divider />
    </>
  );
}
