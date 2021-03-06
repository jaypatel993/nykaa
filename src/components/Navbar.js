import {  alpha,AppBar, Avatar, Badge, Icon, InputBase, makeStyles, Toolbar ,Typography } from '@material-ui/core';

import { Search,Mail,Notifications, Cancel } from '@material-ui/icons';
import { useState } from 'react';

const  material_ui_Styles = makeStyles((theme) =>(
{
toolbar :{
    display : "flex",
    justifyContent : "space-between",
},

logolg :{

    display : 'none',
    [theme.breakpoints.up('sm')]:
    {
        display : 'block',
    },
},

logoSm :{
        display : 'block',
        [theme.breakpoints.up('sm')]:
        {
            display : 'none',
        },
},

search: {
    display : 'flex',
    alignItems : "center",
    borderRadius: theme.shape.borderRadius,
    width : '50% ',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },

    [theme.breakpoints.down('sm')]:
        {
            display :(props)=>(props.open ? 'flex': 'none'),
            width : '70%',
        },
},

searchButton:{
    marginRight : theme.spacing(2),
    [theme.breakpoints.up('sm')]:
        {
            display :"none",
        },

},
input:{
       color : "white",
       marginLeft : theme.spacing(1),
   },

cancel :{
    [theme.breakpoints.up('sm')]:
    {
        display :"none",
    },

 },
icons:{

    alignItems : "center",
   
 
            display :(props)=>(props.open ? 'none': 'flex'),
    
   },

badges:{
    marginRight : theme.spacing(2),
},
}
));

const Navbar = () => {
  

  const [open,setOpen]= useState(false);
  const Navbar_classes =  material_ui_Styles({open});

  return (

    <AppBar>

     <Toolbar className={Navbar_classes.toolbar}>

     <Typography variant="h6" className={Navbar_classes.logolg}>lamaDEV</Typography>

     <Typography variant="h6" className={Navbar_classes.logoSm }>lama</Typography>
    
    <div className = {Navbar_classes.search}>

        <Search />

        <InputBase placeholder='Search....' className={Navbar_classes.input}/>

        <Cancel className={Navbar_classes.cancel} onClick={()=>setOpen(false)}/>  

     </div>

     <div className={Navbar_classes.icons}>

      <Search className={Navbar_classes.searchButton} onClick={()=>setOpen(true)}/>
     
     <Badge badgeContent={4} color="secondary" className={Navbar_classes.badges}>

     <Mail />

     </Badge>

     <Badge badgeContent={2} color="secondary" className={Navbar_classes.badges}>

     <Notifications />
     </Badge>


     <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg" />
    
     </div>

     </Toolbar>

     </AppBar>
  );
  
};

export default Navbar;