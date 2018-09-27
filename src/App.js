import React, { Component, Fragment } from 'react'
import './App.css'

import Selector from './components/Selector'
import Model from './components/Model'

import { models as items } from './models'

class App extends Component {
  state = {
    stagedItems: {},
  }

  _handleSelectItem = e => {
    const itemType = e.target.value
    const selectedItem = items.filter(item => item.type === itemType)[0]

    this.setState({
      selectedItemType: itemType,
      selectedItem: selectedItem,
    })
  }

  _handleStageItem = item => {
    this.setState(prevState => ({
      stagedItems: Object.assign(prevState.stagedItems, item),
    }))
  }

  render() {
    return (
      <Fragment>
        <Selector items={items} onChange={e => this._handleSelectItem(e)} />
        {this.state.selectedItem
          ?  <Model model={this.state.selectedItem} onChange={item => this._handleStageItem(item)} />
          : <p>Select an item from the list</p>
        }
      </Fragment>
    )
  }
}

export default App
