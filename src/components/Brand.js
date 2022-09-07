import React, { useContext } from 'react'
import { getContrastYIQ } from '../Contrast'
import MainContext from '../MainContext'

function Brand({ brand }) {
  const { selectedBrands, setSelectedBrands } = useContext(MainContext)
  const toggleSelected = () => {
    if (selectedBrands.includes(brand.slug)) {
      setSelectedBrands(selectedBrands.filter(slug => slug !== brand.slug))
    } else {
      setSelectedBrands([...selectedBrands, brand.slug])
    }
  }

  return (
    <div onClick={toggleSelected} className={`brand ${selectedBrands.includes(brand.slug) ? 'selected' : ''}`}>
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
