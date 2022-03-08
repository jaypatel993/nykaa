import {  makeStyles,Tooltip, Fab, Modal, Container } from '@material-ui/core'
import { Add as AddIcon } from '@material-ui/icons';
import { useState } from 'react';


const material_ui_Styles = makeStyles((theme) =>(  
    
    {
        fab: {
            position: "fixed",
            bottom: 20,
            right: 20,
          },
          container:{
            width: 500,
            height: 550,
            backgroundColor: "white",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            margin: "auto",
            [theme.breakpoints.down("sm")]: 
            {
              width: "100vw",
              height: "100vh",

          }
        },
    }
));

const Add= () => {

    const [open, setOpen] = useState(false);

const material_ui_container = material_ui_Styles();
  return (
    <>    
    <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
    
    <Fab color="primary" className={material_ui_container.fab}>
    <AddIcon />
  </Fab>
</Tooltip>
<Modal open={open}>
    <Container  className={material_ui_container.container}
    >My model</Container>
</Modal>
    </>

     
  );
};
export default Add;