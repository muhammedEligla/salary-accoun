// @ts-nocheck
/* eslint-disable react/prop-types */
import { useTheme } from '@emotion/react';
import { Chair, DarkModeOutlined, LightMode } from '@mui/icons-material';
import { Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { settingHourW, settingSalary } from '../rtk/DateSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer , toast } from "react-toastify";


const Settings = ({setMode}) => {
    const theme = useTheme()
    const mode = theme.palette.mode;
    const navigate = useNavigate()
    const dispatch = useDispatch();


 const notify = () => toast.success('تم التعديل');


    const [salary , setSalary] = useState(17002)
    const [hourW , setHourW] = useState(8)

    const handleSalary =()=>{
        dispatch(settingSalary(salary))
    }
    return (
        <Container>
        <Stack sx={{gap:2 ,minHeight:"80vh"}}>
        <Paper sx={{display:'flex' , alignItems:'center',justifyContent:'space-between',bgcolor:theme.palette.background.default}}>
            <IconButton color='inherit' sx={{display:'inline-block'}}
                        onClick={()=>{setMode(mode === 'dark' ? 'light' : 'dark');
                        localStorage.setItem('myTheme' , mode);
                        }}>
                        {mode === 'dark' ? <LightMode sx={{color:'gold'}} /> : <DarkModeOutlined /> }
            </IconButton>
            <Typography sx={{display:'inline-block' , mr:1}} variant="body1">الوضع</Typography>
        </Paper>

        <Paper>
            <Stack direction={'row'} sx={{justifyContent:'space-between' , alignItems:'center'}}>
            {salary > 0 ? (
                <Button onClick={()=> notify()  & handleSalary() } variant="contained">OK</Button>
                ): (<Button variant="contained" disabled >OK</Button>)}
            <TextField
            label="راتبك"
            type="number"
            autoComplete="current-password"
            onChange={(event)=> setSalary(+event.target.value) }
            />
            </Stack>
        </Paper>

        <Paper>
            <Stack direction={'row'} sx={{justifyContent:'space-between' , alignItems:'center'}}>
            {hourW > 0 ? (
                <Button onClick={()=> dispatch(settingHourW(hourW)) & notify()} variant="contained">OK</Button>
            ):(<Button disabled variant="contained">OK</Button>)}
            <TextField
            label="ساعات العمل الفعلي"
            defaultValue={hourW}
            type="number"
            autoComplete="current-password"
            onChange={(event)=> setHourW(+event.target.value) }
            />
            </Stack>
        </Paper>

        <Button onClick={()=> navigate('/occasions')} >
            <Paper sx={{width:'100%'}} >
                <Stack variant='' direction={'row'} sx={{p:2,justifyContent:'space-between' , alignItems:'center'}}>
                    <Chair />
                    <Typography variant="body1" >المناسبات</Typography>
                </Stack>
            </Paper>
        </Button>
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

        </Stack>
        </Container>
    );
}

export default Settings;
