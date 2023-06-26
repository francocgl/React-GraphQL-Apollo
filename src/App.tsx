import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'

import { GET_PRODUCTS } from './graphql/queries'
import { Header } from './components/Header'
import ProductList from './components/ProductList'
import { MainContext } from './MainContext'

function App() {
  const { loading, error, data } = useQuery(GET_PRODUCTS)
  const [order, setOrder] = useState(0)
  const [products, setItems] = useState([])

  useEffect(() => {
    if (data) {
      setItems(data?.products?.items)
    }
  }, [data, products])

  if (loading) return <div>Loading...</div>

  if (error) return <pre>{error.message}</pre>

  return (
    <MainContext.Provider value={{ order, setOrder }}>
      <Header />
      <div>
        <ProductList products={products}></ProductList>
      </div>
    </MainContext.Provider>
  )
}

export default App
