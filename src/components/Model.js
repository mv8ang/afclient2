import React from 'react'
import Var from './Var'

const Model = ({ model, onChange }) => {

  const _renderVars = items => items.map(item => (
    <Var item={item} />
  ))

  return (
    <div>
      <p>Type: {model.type}</p>
      <p>{model.vars.length} default vars:</p>
      {_renderVars(model.vars)}

      <button onClick={() => onChange()}> Stage </button>
    </div>
  )
}

export default Model
