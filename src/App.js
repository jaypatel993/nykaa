

import { Grid ,makeStyles} from '@material-ui/core';
import Leftbar from './components/Leftbar';
import Navbar from'./components/Navbar';
import Rightbar from './components/Rightbar';
import Feed from './components/Feed'
import Add from './components/Add';

const material_ui_Styles = makeStyles((theme)=>
(
  {
  right :{
    [theme.breakpoints.down("sm")]:
    {
      display : "none"
    }
  }
}
));

 const App = () => {

 

const material_ui_container = material_ui_Styles();
  return (
    <div>
     <Navbar position="fixed"/>
     <Grid container>
       <Grid item sm={2} sx={2}><Leftbar/></Grid>
       <Grid item sm={7} sx={10}><Feed/></Grid>
       <Grid item sm={3} className ={material_ui_container.right}><Rightbar/></Grid>   
     </Grid>

     <Add/>
      </div>
  )
};

export default App;