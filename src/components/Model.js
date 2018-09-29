import React from 'react'
import PropTypes from 'prop-types'
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

Model.propTypes = {
  model: PropTypes.object,
  onSubmit: PropTypes.func,
}

export default Model
