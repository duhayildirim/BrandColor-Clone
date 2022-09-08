import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import MainContext from '../MainContext'
import LazyLoad from 'react-lazyload'
import Download from './Download'
import Brand from './Brand'
import { GrLinkPrevious } from 'react-icons/gr'
import Loader from './Loader'

function Collection() {
  const { slugs } = useParams()
  const { setSelectedBrands, selectedBrands, brands } = useContext(MainContext)
  const history = useNavigate()
  const clearSelectedBrands = () => {
    setSelectedBrands([])
    history.push('/')
  }

  useEffect(() => {
    setSelectedBrands(slugs.split(','))
  }, [])

  return (
    <main className="content">
      <header className="header">
        <Link to='/' onClick={clearSelectedBrands}>
          <a className="back-btn">
            <GrLinkPrevious />
            All Brands
          </a>
        </Link>
        {selectedBrands.length > 0 && <Download />}
      </header>
      <section className='brands'>
        {selectedBrands.map((slug) => {
          let brand = brands.find(brand => brand.slug === slug)
          return (
            <LazyLoad key={brand.slug} once={true} overflow={true} placeholder={<Loader />} >
              <Brand brand={brand} />
            </LazyLoad>
          )
        })}
      </section>
    </main >
  )
}

export default Collection
