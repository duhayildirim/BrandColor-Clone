import { useEffect, useState } from 'react';
import './App.css';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import MainContext from './MainContext';
import BrandsData from './brands.json'
import Copied from './components/Copied';

function App() {
  const brandsArray = []
  Object.keys(BrandsData).map(key => {
    brandsArray.push(BrandsData[key])
  })
  const [brands, setBrands] = useState(brandsArray)
  const [selectedBrands, setSelectedBrands] = useState([])
  const [copied, setCopied] = useState(false)
  const [search, setSearch] = useState('')
  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
    search,
    setSearch
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopied(false)
    }, 1500)

    return () => {
      clearTimeout(timeout)
    }
  }, [copied])
  useEffect(() => {
    setBrands(brandsArray.filter(brand => brand.title.toString().toLowerCase()
      .includes(search.toString().toLocaleLowerCase())))
  }, [search])

  return (
    <>
      <MainContext.Provider value={data}>
        {copied && <Copied color={copied} />}
        <Sidebar />
        <Content />
      </MainContext.Provider>
    </>
  );
}

export default App;
