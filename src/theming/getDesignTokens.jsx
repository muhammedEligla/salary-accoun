import { grey } from "@mui/material/colors";


export const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            head: {
              main: grey[300],
            },
            search:{
              main:'#f6f9fc'
            },
            iconS:{
              main:grey[900],
              bag:grey[300]
            },
            bgbody: {
              main: "#e9e9e9e9",
            },
            btn: {
              main:grey[700]
            },



          }
        : {
            // palette values for dark mode
          
            head: {
              main: grey[700],
            },
            search:{
              main:'#252b32'
            },
            iconS:{
              main:grey[300],
              bag:grey[900]
            },
            bgbody: {
              main: "#424344",
            },btn: {
              main:grey[500]
            },
          }),
    },
  });