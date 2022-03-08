import {createTheme} from '@material-ui/core';
import {blue} from '@material-ui/core/colors';




export const theme_material_ui = createTheme (
    {
      palette :{
          primary :{
              main :blue[800],
          },
          },

          myButton :{
              backgroundColor: 'green',
              color: 'black',
              border: '2px solid black',
          }
    }
) ;
 

