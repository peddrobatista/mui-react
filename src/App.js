import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Hello from './pages/Hello';
import Botao from './pages/Botao';
import { Divider, List, ListItem,ListItemButton, ListItemText} from "@mui/material";

const Menu = () => { 
  return (
    <>
    <nav>
                <ul>
                    <li>
                        <Link to="Hello">Hello</Link>
                    </li>
                    <li>
                        <Link to="Botao">Botao</Link>
                    </li>
                </ul>
    </nav>
    <Divider/>
    <nav>
      <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="Hello">
              <ListItemText primary="Hello" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="Botao">
              <ListItemText primary="Botao" />
            </ListItemButton>
          </ListItem>
      </List>
    </nav>
    <Divider/>
    <Outlet/>
    </>
    
  );
  
}
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu/>}>
          <Route path="Botao" element={<Botao/>}/>
          <Route path="Hello" element={<Hello/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;