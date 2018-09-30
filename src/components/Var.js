import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// Material-UI
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'

class Var extends PureComponent {
  state = {
    currentValue: this.props.item.val,
  }

  _handleInputChange = e => {
    this.setState({
      currentValue: e.target.value,
    })
  }

  render() {
    const { item: { name } } = this.props
    const { currentValue } = this.state

    return (
      <FormControl fullWidth gutterBottom margin='normal'>
        <Input
          value={currentValue}
          onChange={e => this._handleInputChange(e)}
          startAdornment={<InputAdornment position="start">{name}: </InputAdornment>}
        />
      </FormControl>
    )

  }
}

Var.propTypes = {
  item: PropTypes.object,
}

export default Var
