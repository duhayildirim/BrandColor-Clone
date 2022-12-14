import React, { useContext, useEffect, useState } from 'react'
import MainContext from '../MainContext'
import { GrLink, GrDownload, GrClose } from 'react-icons/gr'
import { Link } from 'react-router-dom'

function Download() {
  const { selectedBrands, setSelectedBrands, brands } = useContext(MainContext)
  const [downloadUrl, setDownloadUrl] = useState()
  // const getLink = () => {
  //   prompt('Selected brands:', `${selectedBrands.join(',')}`)
  // }
  const [changeCSS, setChangeCSS] = useState('css')

  useEffect(() => {
    if (selectedBrands.length > 0) {
      let output = ''
      switch (changeCSS) {
        case 'css':
          output += ':root {\n'
          selectedBrands.map(slug => {
            let brand = brands.find(brand => brand.slug === slug)
            brand.colors.map((color, key) => {
              output += `--${slug}-${key}: #${color};\n`
            })
          })
          output += '}'
          break

        case 'scss':
          selectedBrands.map(slug => {
            let brand = brands.find(brand => brand.slug === slug)
            brand.colors.map((color, key) => {
              output += `\$${slug}-${key}: #${color};\n`
            })
          })
          break

        case 'less':
          selectedBrands.map(slug => {
            let brand = brands.find(brand => brand.slug === slug)
            brand.colors.map((color, key) => {
              output += `@${slug}-${key}: #${color};\n`
            })
          })
          break
      }
      const blob = new Blob([output])
      const url = URL.createObjectURL(blob)
      setDownloadUrl(url)
      return () => {
        URL.revokeObjectURL(url)
        setDownloadUrl('')
      }
    }
  }, [selectedBrands, changeCSS])

  return (
    <div className="download">
      <div className="actions">
        <select onChange={(e) => setChangeCSS(e.target.value)}>
          <option value="css">CSS</option>
          <option value="scss">SCSS</option>
          <option value="less">LESS</option>
        </select>
        <a download={`brands.${changeCSS}`} href={downloadUrl}>
          <GrDownload />
        </a>
        <Link to={`/collection/${selectedBrands.join(',')}`}>
          <GrLink />
        </Link>
      </div>
      <div className="selected">
        <button onClick={() => setSelectedBrands([])}>
          <GrClose />
        </button>
        {selectedBrands.length} brands collected.
      </div>
    </div>
  )
}

export default Download
