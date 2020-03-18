import React from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { CardContent } from '@material-ui/core';

const getStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
  },
  media: {
    height: 'auto',
    width: '25%',
    margin: '2rem',
  },
  content: {
    flexBasis: '65%',
  },
  title: {
    fontWeight: 'bold',

  },
  subtitle: {
    fontWeight: '400',
  }
}))

const ShowsCard = ({ id, title, release_date, popularity, overview, poster_path }) => {
  const classes = getStyles()
  return (
    <Card key={id} className={classes.card}>
      <CardMedia
        alt={title}
        component='img'
        className={classes.media}
        image={poster_path}
        title={title}
      />
      <CardContent title={title} className={classes.content}>
        <Typography variant="h5" color="textSecondary" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p" className={classes.subtitle}>
          Release Date: {release_date} | Popularity: {popularity}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {overview}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ShowsCard
