import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const getStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
    
  },
  select: {
    marginTop: theme.spacing(2),
  },
  FormControl: {
minWidth: 120,
  }

}))


const Search = (props) => {
  const classes = getStyles()
  const { onInputChange, onSearch } = props
  return (
    <form className={classes.form} onSubmit={props.onSubmit}>

       <FormControl  variant="outlined" className={classes.formControl}>
        
        <TextField
          className={classes.textField}
          label='Search'
          margin='normal'
          name='searchText'
        
          onChange={e => onInputChange('searchText', e.target.value)}
          type='search'
          variant='outlined'
        />
      </FormControl>
           <FormControl style={{minWidth: 200}} variant="outlined" className={classes.formControl}>
        <InputLabel ref={InputLabel} id="demo-simple-select-outlined-label">
        Search Type
        </InputLabel>
        <Select
              className={classes.textField}
              label='select type'
              margin='normal'
              name='select type'
              onChange={e => onInputChange('category', e.target.value)}
              type='select'
              variant='outlined'
        >
          <MenuItem value={'movie'}>movie</MenuItem>
          <MenuItem value={'multi'}>multi</MenuItem>
          <MenuItem value={'tv'}>tv</MenuItem>
        </Select>
      </FormControl>

      <Button className={classes.button} 
      variant='contained' 
       color='primary' 
       onClick={onSearch}
       >
        Search
      </Button>
    </form>
  )
}

export default Search