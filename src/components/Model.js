import React from 'react'
import Var from './Var'

const Model = ({ model, onSubmit }) => {

  const _renderVars = items => items.map(item => (
    <Var key={item.name} item={item} />
  ))

  return (
    <div>
      <p>Type: {model.type}</p>
      <p>{model.vars.length} default vars:</p>
      {_renderVars(model.vars)}

      <button onClick={() => onSubmit()}> Stage </button>
    </div>
  )
}

export default Model
