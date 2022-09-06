import React from 'react'

function Sidebar() {
  return (
    <React.Fragment>
      <aside className="sidebar">
        <div className="logo">
          <a>Brand<b>Colors</b></a>
        </div>
        <div className="description">
          The biggest collection of official brand color codes around. Curated by @brandcolors and friends.
        </div>
        <nav className="menu">
          <ul>
            <li><a>Suggest a Brand</a></li>
            <li><a>About BrandColors</a></li>
          </ul>
        </nav>
      </aside>
    </React.Fragment>
  )
}

export default Sidebar
