import {  makeStyles} from '@material-ui/core'

import React from 'react'


const material_ui_Styles = makeStyles((theme) =>(
{
  Container: {
    paddingTop: theme.spacing(10),
  },

}
))

 const Post= () => {

const material_ui_container = material_ui_Styles();


  return (
    <>hello</>

     
  )
}
export default Post;