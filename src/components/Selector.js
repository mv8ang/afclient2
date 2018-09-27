import React from 'react'
import PropTypes from 'prop-types'

const Selector = ({ items, onChange }) => {
  const _generateListItems = items =>
    items.map(item => (
      <option key={item.type} value={item.type}>
        {item.type}
      </option>
    ))

  return (
    <select onChange={e => onChange(e)}>
      {_generateListItems(items)}
    </select>
  )
}

Selector.propTypes = {
  items: PropTypes.array,
  onChange: PropTypes.func,
}

export default Selector
