import React, { Component } from 'react'

class Var extends Component {
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

export default Var
