import React from 'react'
import { getContrastYIQ } from '../Contrast'

function Brand({ brand }) {

  return (
    <div className="brand">
      <h5> {brand.title} </h5>
      <div className="brand-colors">
        {brand.colors.map((color, key) => (
          <span key={key} style={{ '--bgColor': `#${color}`, '--textColor': `${getContrastYIQ(color)}` }}>{color}</span>
        ))}
      </div>
    </div>
  )
}

export default Brand
