import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
  
} from "@material-ui/core";


const material_ui_Styles = makeStyles((theme) =>
(

  {card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
}
),
);

 const Post= () => {

const material_ui_container = material_ui_Styles();

return (
  <Card className={material_ui_container.card}>
    <CardActionArea>
      <CardMedia className={material_ui_container.media} image='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg' title="My Post" />
      <CardContent>
        <Typography gutterBottom variant="h5">
         My first post
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          consectetur earum est.
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
      <Button size="small" color="primary">
        Learn More
      </Button>
    </CardActions>
  </Card>
);
}
export default Post;