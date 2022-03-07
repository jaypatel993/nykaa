import {  makeStyles,Container } from '@material-ui/core'
import { Person } from '@material-ui/icons';
import React from 'react'


const material_ui_Styles = makeStyles((theme) =>(
{
  Container: {
    paddingTop: theme.spacing(10),
  },

}
));

 const Rightbar= () => {

const material_ui_container = material_ui_Styles();
  return (
    <Container className={material_ui_container.Container}>
      Rightbar
    </Container>
    
  )
};

export default Rightbar;