// @ts-nocheck
import { useSelector } from "react-redux";
import BTable from "./BTable";
import { Box, Container, Typography } from "@mui/material";
import { useContext } from "react";
import { TextLang } from "../App";


const List = () => {
    const text = useContext(TextLang).text
  const data = useSelector((state)=> state.todos);
if(data.monthAgo.length > 0){
    return (
        <Container>
        <Box sx={{minHeight:"80vh"}}>
            {data.monthAgo.map((item , i )=>{
                return(
                    <BTable key={i} extra={item.extra} 
                    today={item.today} doble={item.dobleExtra}
                    absence={item.absence} salary={item.salary}
                    hourwork={item.hourwork} date={item.date} />
                )
            })}
        </Box>
        </Container>
    );
}else{
    return(
        <Typography sx={{display:'flex' , justifyContent:'center' , alignItems:'center'}} variant="h5" >{text.list}</Typography>
    )
}
    
}

export default List;
