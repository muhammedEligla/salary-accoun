import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css'
import Appbar from './components/AppBar'
import List from './components/List'
import Add from './components/Add'
import Settings from './components/Settings'
import { useEffect, useMemo, useState } from 'react';
import { getDesignTokens } from './theming/getDesignTokens';

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Occasions from './components/Occasions';
import Manual from './components/Manual';
import Footer from './components/Footer';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { checked, clear } from './rtk/DateSlice';





function App() {
  const checkDay =  moment().date()
  const dispatch = useDispatch()
  // @ts-ignore
  const data = useSelector((state)=> state.todos);
  useEffect(()=>{
    if(data.today > checkDay ){
      dispatch(clear())
    }else if(data.today < checkDay){
      dispatch(checked())
    }
  }, [])
  
  const myThemem = localStorage.myTheme === 'dark' ? 'light' : 'dark'
  const [mode, setMode] = useState(myThemem);

  
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

const Layout = ()=>{
  return(
    <>
    <Appbar />
    <Outlet />
    <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />   ,
    children:[
      {
        path:"/",
        element: <Home />,
      },{
        path:'list',
        element:<List />
      },{
        path:'add',
        element:<Add />
      },{
        path:'manual',
        element:<Manual />
      },{
        path:'occasions',
        element:<Occasions />
      },{
        path:'settings',
        element:<Settings setMode={setMode} />
      }
    ]
  },
]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
