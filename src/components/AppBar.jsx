// @ts-nocheck
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Stack, useTheme } from '@mui/material';
import { Add, CalendarMonth, DesignServicesRounded, Home, Settings } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

const iconList = [
    {icon:<Home sx={{mx:'auto'}} /> , path:'/'},
    {icon:<Add sx={{mx:'auto'}} /> , path:'/add'},
    {icon:<CalendarMonth sx={{mx:'auto'}} /> , path:'/list'},
    {icon:<DesignServicesRounded sx={{mx:'auto'}} /> , path:'/manual'},
    {icon:<Settings sx={{mx:'auto'}} /> , path:'/settings'},
  ]
const Appbar = () => {
  const location = useLocation().pathname
  const navigate = useNavigate()
  const theme = useTheme()
    return (
        <Box sx={{mb:3 , "& .MuiPaper-root":{background:theme.palette.bgbody.main}}}>
      <AppBar position="static" >
        <Toolbar >


        <Stack direction={'row'} sx={{justifyContent:'space-between', width:'100%' , direction:'rtl'}}>
        {iconList.map(item =>{
          return(
             <IconButton
             key={item.path}
            size="large"
            sx={{textAlign:'center' , color:location === item.path && theme.palette.info.main}}
            
            onClick={()=> navigate(item.path)}
          >
            <Stack sx={{justifyContent:'center'}}>
              {item.icon}
              {location === item.path &&
                <Box sx={{width:'100%', height:'2px' , bgcolor:theme.palette.info.main , display:'block' 
                , position:'absolute' , bottom:{xs:'-4px' , md:'-7px' , lg:'-7.5' } , right:'0'}} />
              }
            </Stack>
          </IconButton>
          )
        })}
        </Stack>
         




        </Toolbar>
      </AppBar>
    </Box>
    );
}

export default Appbar;
