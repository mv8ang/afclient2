import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// Material-UI
import { withStyles } from '@material-ui/core/styles'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 140,
  }
})

class Selector extends PureComponent {
  state = {
    type: '',
  }

  _generateListItems = items =>
    items.map(item => (
      <MenuItem key={item.type} value={item.type}>
        {item.type}
      </MenuItem>
    ))

  _handleChange = e => {
    this.props.onChange(e)
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { items, classes } = this.props

    return (
      <form className={classes.root} autoComplete='off'>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor='model-selector'>Models</InputLabel>
          <Select
            value={this.state.type}
            onChange={e => this._handleChange(e)}
            input={<Input name='type' id='model-selector' />}
            variant='filled'
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>

            {this._generateListItems(items)}

          </Select>
          {!this.state.type.length
            ? <FormHelperText>To begin, select a type from the list</FormHelperText>
            : null
          }
        </FormControl>
      </form>
    )
  }
}

Selector.propTypes = {
  items: PropTypes.array,
  onChange: PropTypes.func,
}

export default withStyles(styles)(Selector)
