import React, { useContext } from 'react'
import MainContext from '../MainContext'
import { GrLink, GrDownload, GrClose } from 'react-icons/gr'

function Download() {
  const { selectedBrands, setSelectedBrands } = useContext(MainContext)

  return (
    <div className="download">
      <div className="actions">

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
