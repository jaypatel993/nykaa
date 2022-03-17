import {  makeStyles,Link,
  Avatar,
  Container,
  ImageList,
  ImageListItem,
 
  Typography,
  Divider,} from '@material-ui/core'

import React from 'react'


import { AvatarGroup } from "@material-ui/lab";


const material_ui_Styles = makeStyles((theme) =>(
{
  Container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
  link: {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize: 16,
  },

}
));

 const Rightbar= () => {

const material_ui_container = material_ui_Styles();
  return (
    <Container className={material_ui_container.Container}>


     <Typography className={material_ui_container.title} gutterBottom>
      Online Friends
      </Typography>
     
      <AvatarGroup max={6} style={{ marginBottom: 20 }}>

      <Avatar
          alt="Remy Sharp"
          src="1.jpg"
        />
           <Avatar
          alt="Travis Howard"
          src="https://material-ui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://material-ui.com/static/images/avatar/3.jpg"
        />
        <Avatar alt="Agnes Walker" src="" />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/6.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/7.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/8.jpg"
        />

      </AvatarGroup>

      <Typography className={material_ui_container.title} gutterBottom>
        Gallery
      </Typography>

      <ImageList rowHeight={100} style={{ marginBottom: 20 }} cols={2}>
        <ImageListItem>
          <img
            src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/vegetables.jpg"
            alt=""
          />
        </ImageListItem>

        </ImageList>
        <Typography className={material_ui_container.title} gutterBottom>
        Categories
      </Typography>
      <Link href="#" className={material_ui_container.link} variant="body2">
        Sport
      </Link>
      <Link href="#" className={material_ui_container.link} variant="body2">
        Food
      </Link>
      <Link href="#" className={material_ui_container.link} variant="body2">
        Music
      </Link>
      <Divider flexItem style={{marginBottom:5}}/>
      <Link href="#" className={material_ui_container.link} variant="body2">
        Movies
      </Link>
      <Link href="#" className={material_ui_container.link} variant="body2">
        Science
      </Link>
      <Link href="#" className={material_ui_container.link} variant="body2">
        Life
      </Link>
    </Container>
    
  )
};

export default Rightbar;