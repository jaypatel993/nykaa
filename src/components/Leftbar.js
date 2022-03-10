import {  Container,  makeStyles, Typography} from '@material-ui/core'
import { Bookmark, ExitToApp, Home, List, Person, PhotoCamera, PlayCircleOutline, Settings, Storefront, TabletMac } from '@material-ui/icons';

import React from 'react'


const material_ui_Styles = makeStyles((theme) =>(
{

   container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}
)
);

const Leftbar= () => {
 
const material_ui_container = material_ui_Styles();

return (
  <Container className={material_ui_container.container}>
    <div className={material_ui_container.item}>
      <Home className={material_ui_container.icon} />
      <Typography className={material_ui_container.text}>Homepage</Typography>
    </div>
    <div className={material_ui_container.item}>
      <Person className={material_ui_container.icon} />
      <Typography className={material_ui_container.text}>Friends</Typography>
    </div>
    <div className={material_ui_container.item}>
      <List className={material_ui_container.icon} />
      <Typography className={material_ui_container.text}>Lists</Typography>
    </div>
    <div className={material_ui_container.item}>
      <PhotoCamera className={material_ui_container.icon} />
      <Typography className={material_ui_container.text}>Camera</Typography>
    </div>
    <div className={material_ui_container.item}>
      <PlayCircleOutline className={material_ui_container.icon} />
      <Typography className={material_ui_container.text}>Videos</Typography>
    </div>
    <div className={material_ui_container.item}>
      <TabletMac className={material_ui_container.icon} />
      <Typography className={material_ui_container.text}>Apps</Typography>
    </div>
    <div className={material_ui_container.item}>
      <Bookmark className={material_ui_container.icon} />
      <Typography className={material_ui_container.text}>Collections</Typography>
    </div>
    <div className={material_ui_container.item}>
      <Storefront className={material_ui_container.icon} />
      <Typography className={material_ui_container.text}>Market Place</Typography>
    </div>
    <div className={material_ui_container.item}>
      <Settings className={material_ui_container.icon} />
      <Typography className={material_ui_container.text}>Settings</Typography>
    </div>
    <div className={material_ui_container.item}>
      <ExitToApp className={material_ui_container.icon} />
      <Typography className={material_ui_container.text}>Logout</Typography>
    </div>
  </Container>
);
};

export default Leftbar;