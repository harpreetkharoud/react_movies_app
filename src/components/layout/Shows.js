import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/styles'
import { POSTER_URL } from '../../config/api_config'

import ShowsCard from './ShowsCard'

const getStyles = makeStyles(theme => ({
  root: {
    margin: '5em 0'
  }
}))


const Shows = (props) => {
  const classes = getStyles()
  return (
    <div className='container'>
      <Grid container className={classes.root} spacing={5}>
        {props.shows.map(show => {
          const { id, title, date, popularity, overview, poster } = show
          return (
            <Grid item xs={12}>
              <ShowsCard
                key={id}
                id={id}
                title={title}
                popularity={popularity}
                overview={overview}
                poster_path={POSTER_URL + poster}
                release_date={date}
              />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default Shows
