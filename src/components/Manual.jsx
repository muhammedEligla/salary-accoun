// @ts-nocheck

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Box, Container, TextField } from "@mui/material";
import { useState } from "react";
import { useSelector } from 'react-redux';
import SubTable from './SubTable';




const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
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
    return { name, calories, fat, carbs};
  }
  
  

const Manual = () => {
    const [days , setDays ] = useState(0);
    const [abons , setAbons ] = useState(0);
    const [extra , setExtra ] = useState(0);
    const [doble , setDoble ] = useState(0);
    const [salary , setSalary ] = useState(0);

    const data = useSelector((state)=> state.todos);


    const normalHour = days * data.hourwork
    const subSalary = (salary / 30) * days
    const hourSalary = (salary / 30) / data.hourwork

    const extraSalary = (hourSalary * 1.5) * extra


  const totalExtra = extraSalary + ((hourSalary * 2) * doble)


  const rows = [
    createData('الدوام العادي', days, normalHour, subSalary.toFixed() ),
    createData('الاضافي x1.5', extra / data.hourwork , extra , extraSalary.toFixed() ),
    createData('الاضافي x2', doble / data.hourwork , doble, (hourSalary * 2) * doble ),
    createData('الغياب', abons / data.hourwork , abons ,(hourSalary * abons).toFixed() ),
  ];


    return (
      <Container>
        <Box>
            <Box sx={{display:'flex' , flexDirection:'row' , flexWrap:'wrap' , gap:2, mb:5}}>

            <TextField label="ايام الدوام"
            variant="filled" type="number"
            sx={{flexGrow:1 , minWidth:'100px' , width:'130px'}} onChange={ (event) => setDays(event.target.value)} /> 

            <TextField label="ساعات الغياب"
            variant="filled" type="number"
            sx={{flexGrow:1 , minWidth:'100px' , width:'130px'}} onChange={(event) => setAbons(event.target.value)} /> 

            <TextField label="x1.5 ساعات الاضافي "
            variant="filled" type="number"
            sx={{flexGrow:1 , minWidth:'100px' , width:'130px'}} onChange={(event) => setExtra(event.target.value)} /> 

            <TextField label="x2 ساعات الاضافي "
            variant="filled" type="number"
            sx={{flexGrow:1 , minWidth:'100px' , width:'130px'}} onChange={(event) => setDoble(event.target.value)} /> 

            <TextField label="راتبك"
            variant="filled" type="number"
            sx={{flexGrow:1 , minWidth:'100px' , width:'100%'}} onChange={(event) => setSalary(event.target.value)} /> 

            </Box>


            <Box>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell align="right">ايام</StyledTableCell>
            <StyledTableCell align="right">ساعات</StyledTableCell>
            <StyledTableCell align="right">الاجرة </StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
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
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </Box>
    <SubTable salary={salary} totalExtra={totalExtra} total={(subSalary + totalExtra) - ( hourSalary * abons)} />
        </Box>
        </Container>
    );
}

export default Manual;





















