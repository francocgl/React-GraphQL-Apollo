import { useContext, useEffect } from 'react'
import { useQuery } from '@apollo/client'

import { GET_ORDER_SUBTOTAL } from '../graphql/queries'
import { getFormatPriceNumber } from '../helpers'
import useStateWithStorage from '../hooks/useStateWithStorage'
import { HeaderSubTotal } from '../styles/Header'
import { MainContext } from '../MainContext'

export function Header() {
  const [state, setState] = useStateWithStorage('subtotal', 0)
  const { order } = useContext(MainContext)
  const { loading, error, data } = useQuery(GET_ORDER_SUBTOTAL)

  useEffect(() => {
    if (!data?.activeOrder || data?.activeOrder === null) {
      setState(order)
    } else {
      const { total } = data.activeOrder
      setState(total)
    }
  }, [data, order, setState])

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
        <h4>Subtotal: ${getFormatPriceNumber(state)}</h4>
      </HeaderSubTotal>
    </header>
  )
}
