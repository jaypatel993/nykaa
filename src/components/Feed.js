import {  makeStyles,Container } from '@material-ui/core'

import React from 'react'


const material_ui_Styles = makeStyles((theme) =>(
{
  Container: {
    paddingTop: theme.spacing(10),
  },

}
))

 const Feed= () => {

const material_ui_container = material_ui_Styles();
  return (
    <Container className={material_ui_container.Container}>    
     Feed
    </Container>

     
  )
}
export default Feed;