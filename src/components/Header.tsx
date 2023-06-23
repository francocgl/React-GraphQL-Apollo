import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'

import { GET_ORDER_SUBTOTAL } from '../graphql/queries'
import { getFormatPriceNumber } from '../helpers'
import { HeaderSubTotal } from '../styles/Header'

export function Header() {
  const { loading, error, data } = useQuery(GET_ORDER_SUBTOTAL)
  const [subTotal, setSubtotal] = useState(0)

  useEffect(() => {
    if (!data?.activeOrder || data?.activeOrder === null) {
      setSubtotal(0)
    } else {
      const { total } = data.activeOrder
      setSubtotal(total)
    }
  }, [data])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }

  return (
    <header style={{ padding: '2rem', background: 'red' }}>
      <img
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="logo"
      />
      <HeaderSubTotal>
        <h4>Subtotal: ${getFormatPriceNumber(subTotal)}</h4>
      </HeaderSubTotal>
    </header>
  )
}
