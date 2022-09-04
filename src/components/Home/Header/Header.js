import React,{useState,useEffect} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import decode from 'jwt-decode'
import styles from './Header.module.css'

import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
// import { makeStyles } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   paper: {
//     marginRight: theme.spacing(2),
//   },
// }));

const Header = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const navigate = useNavigate();
  const location = useLocation();

//   useEffect(() => {
//     setUser(JSON.parse(localStorage.getItem('profile')))
// },[location])

const logout =() => {
 navigate.push('/login')
  setUser(null)
}  


useEffect(()=> {
  const token = user?.token
  
  //If token expires, logout the user
  if(token) {
      const decodedToken = decode(token)
      if(decodedToken.exp * 1000 < new Date().getTime()) logout()
  }
  
}, [location, user]) //when location changes, set the user





// const classes = useStyles();
const [open, setOpen] = React.useState(false);
const anchorRef = React.useRef(null);

const handleToggle = () => {
setOpen((prevOpen) => !prevOpen);
};

const handleClose = (event ) => {
if (anchorRef.current && anchorRef.current.contains(event.target)) {
return;
}

setOpen(false);
};


const openLink =(link) => {
navigate.push(`/${link}`)
setOpen(false);
}

function handleListKeyDown(event) {
if (event.key === 'Tab') {
event.preventDefault();
setOpen(false);
}
}

// return focus to the button when we transitioned from !open -> open
const prevOpen = React.useRef(open);
React.useEffect(() => {
if (prevOpen.current === true && open === false) {
anchorRef.current.focus();
}

prevOpen.current = open;
}, [open]);


  return  <>

</>
  
}

export default Header
