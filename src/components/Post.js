import {  Button, Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography} from '@material-ui/core'


const material_ui_Styles = makeStyles((theme) =>
(

  {
    media : {
      height : 250,
      [theme.breakpoints.down("sm")]:{
        height :150,
      },
    },
   
   card:{
          marginBottom: theme.spacing(5)
   },
  }
),
);

 const Post= () => {

const material_ui_container = material_ui_Styles();

  return (
    <Card className={material_ui_container.card}>
      <CardActionArea>
       <CardMedia
        className={material_ui_container.media}
        image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
        title="My Post"
        />
        <CardContent>
          <Typography gutterBottom variant='h5'> my first post </Typography>
          <Typography variant='body2'> A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.
          A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.
           </Typography>
         </CardContent>   
          </CardActionArea>
         <CardActionArea>
         <Button size="small" color="primary">share
         </Button>        
         <Button size="small" color="primary"> Learn more
          </Button>
          </CardActionArea>

    </Card>   
  )
}
export default Post;