import {  makeStyles,Container } from '@material-ui/core'

import Post from "./Post";


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
     <Post/>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
     <Post/>

    </Container>

     
  )
}
export default Feed;