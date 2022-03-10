import {   Button,
  Container,
  Fab,
  FormControlLabel,
  FormLabel,
  makeStyles,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Tooltip, } from '@material-ui/core'
import { Add as AddIcon } from '@material-ui/icons';
import { useState } from 'react';
import MuiAlert from "@material-ui/lab/Alert";

const material_ui_Styles = makeStyles((theme) =>(  
    
    {
      fab: {
        position: "fixed",
        bottom: 20,
        right: 20,
      },
      container: {
        width: 500,
        height: 550,
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
        [theme.breakpoints.down("sm")]: {
          width: "100vw",
          height: "100vh",
        },
      },
      form: {
        padding: theme.spacing(1),
      },
      item: {
        marginBottom: theme.spacing(3),
      },
      
    }   
));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const Add= () => {

    const [open, setOpen] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);

    const material_ui_container = material_ui_Styles();

    const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
  
      setOpenAlert(false);
    };


  return (
    <>    
    <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
    <Fab color="primary" className={material_ui_container.fab}>
    <AddIcon />
    </Fab>
    </Tooltip>
    <Modal open={open}>
    <Container  className={material_ui_container.container}>
    <form className={material_ui_container.form} autoComplete="off"></form>

              <div className={material_ui_container.item}>
              <TextField
                id="standard-basic"
                label="Title"
                size="small"
                style={{ width: "100%" }}
              />
            </div>

            <div className={material_ui_container.item}>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                defaultValue="Write here..."
                variant="outlined"
             
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={material_ui_container.item}>
              <TextField select label="Visibility" value="Public">
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Unlisted">Unlisted</MenuItem>
              </TextField>
            </div>
            <div className={material_ui_container.item}>
              <FormLabel component="legend">Who can comment?</FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="Everybody"
                  control={<Radio size="small" />}
                  label="Everybody"
                />
                <FormControlLabel
                  value="My Friends"
                  control={<Radio size="small" />}
                  label="My Friends"
                />
                <FormControlLabel
                  value="Nobody"
                  control={<Radio size="small" />}
                  label="Nobody"
                />
                <FormControlLabel
                  value="Custom"
                  disabled
                  control={<Radio size="small" />}
                  label="Custom (Premium)"
                />
              </RadioGroup>
            </div>
            <div className={material_ui_container.item}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: 20 }}
                onClick={() => setOpenAlert(true)}
               
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>


    </Container>
    </Modal>
    <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </>

     
  );
};
export default Add;