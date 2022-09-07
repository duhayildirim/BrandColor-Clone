import React from 'react'

function Copied({ color }) {
  return (
    <div className="copied">
      Copied <strong>{color}</strong> to Clipboard
    </div>
  )
}

export default Copied
