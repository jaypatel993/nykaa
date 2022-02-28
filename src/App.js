import {  makeStyles } from '@material-ui/core'

import Navbar from'./components/Navbar';

const material_ui_Styles = makeStyles((theme) =>(
{

}
))

 const App = () => {

const material_ui_container = material_ui_Styles();
  return (
    <div>
     <Navbar/>
      </div>
  )
}

export default App;