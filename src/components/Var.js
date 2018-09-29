import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Var extends PureComponent {
  state = {
    currentValue: this.props.item.val,
  }

  _handleInputChange = e => {
    this.setState({
      currentValue: e.target.value
    })
  }

  render() {
    const { item: { name } } = this.props
    const { currentValue } = this.state

    return (
      <p>
        {`${name}: `}
        <input value={currentValue} onChange={e => this._handleInputChange(e)} />
      </p>
    )

  }
}

Var.propTypes = {
  item: PropTypes.object,
}

export default Var
