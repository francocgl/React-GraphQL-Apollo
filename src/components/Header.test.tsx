import { render } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { GET_ORDER_SUBTOTAL } from '../graphql/queries'
import { Header } from './Header'

const mockData = {
  activeOrder: {
    id: '1',
    total: 1000,
    __typename: 'Order',
  },
}

const mockQuery = {
  request: {
    query: GET_ORDER_SUBTOTAL,
  },
  result: {
    data: mockData,
  },
}

describe('<Header />', () => {
  it('should render the header with subtotal', async () => {
    const { getByText } = render(
      <MockedProvider mocks={[mockQuery]} addTypename={false}>
        <Header />
      </MockedProvider>
    )

    await new Promise((resolve) => setTimeout(resolve, 0))

    expect(getByText('Subtotal: $1,000')).toBeInTheDocument()
  })

  it('should render the loading state', () => {
    const { getByText } = render(
      <MockedProvider mocks={[mockQuery]} addTypename={false}>
        <Header />
      </MockedProvider>
    )

    expect(getByText('Loading...')).toBeInTheDocument()
  })
})
