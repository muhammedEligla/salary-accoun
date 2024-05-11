// @ts-nocheck
import { Box, Button, Container, Divider, Stack, TextField, useTheme } from "@mui/material";
import { useContext, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDoble, addExtra, removeH } from "../rtk/DateSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer , toast } from "react-toastify";



import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TextLang } from "../App";


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
  
  function createData(name, calories, fat) {
    return { name, calories, fat };
  }
  
  


const Add = () => {
  const text = useContext(TextLang)
    const theme = useTheme()
  const data = useSelector((state)=> state.todos);


    const [extra , setExtra] = useState(0);
    const [doble , setDoble] = useState(0);
    const [mainus , setMainus] = useState(0);

    const mainusRef = useRef(null);
    const dobleRef = useRef(null);
    const extraRef = useRef(null);

 const notify = () => toast.success(text.text.added);
    

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handilPage = ()=>{
        setTimeout(() => {
            navigate('/')
            dispatch(addExtra(+extra)) 
            dispatch(addDoble(+doble)) 
            dispatch(removeH(+mainus))
        }, 2000);
    }

    const handilClick = ()=>{
      
      
      notify()


        handilPage()

        mainusRef.current.value = '' ;
        dobleRef.current.value = '' ;
        extraRef.current.value = '' ;

    }



        
    
const rows = [
    data.list.map((item)=>{
      const type = item.type === 'x1.5 اضافي ' ? text.text.extra : item.type === 'x2 اضافي ' ? 
        text.text.doble : text.text.absn
      
        return createData(type, item.value , item.date )
      })
  ];


    return (
      <Container>
        <Box sx={{textAlign:'center',minHeight:"80vh"}}>
            <Stack direction={'row'} sx={{gap:2 , justifyContent:'space-between' , my:7}}>
                <TextField inputRef={mainusRef} onChange={(event)=> setMainus(event.target.value)} label={text.text.absn}  type="number" variant="filled" />
                <TextField inputRef={dobleRef} onChange={(event)=> setDoble(event.target.value)} label={text.text.doble}  type="number" variant="filled" />
                <TextField inputRef={extraRef} onChange={(event)=> setExtra(event.target.value)} label={text.text.extra}  type="number" variant="filled" />
            </Stack>
            <Button onClick={handilClick} sx={{fontWeight:'bold' , px:5 , mb:5}} variant="contained">{text.text.add}</Button>

            <Divider sx={{mb:2}} />


            <Box>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>{text.text.type}</StyledTableCell>
            <StyledTableCell align="right">{text.text.theCount}</StyledTableCell>
            <StyledTableCell align="right">{text.text.history}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows[0].map((row , i) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </Box>

            <ToastContainer
            position="top-left"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme={theme.palette.mode}
            />
            
        </Box>
        
      </Container>
    );
}

export default Add;






            //<Button onClick={()=> dispatch(clear())} sx={{fontWeight:'bold' , px:5 , mb:5}} variant="contained">اضافة</Button>


