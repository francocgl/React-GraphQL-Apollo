import { render, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { GET_PRODUCTS } from './graphql/queries'
import App from './App'

describe('<App />', () => {
  it('renders loading state', () => {
    const { getByText } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <App />
      </MockedProvider>
    )

    expect(getByText('Loading...')).toBeInTheDocument()
  })

  it('renders error state', async () => {
    const errorMessage = 'An error occurred.'
    const mockErrorQuery = {
      request: {
        query: GET_PRODUCTS,
      },
      error: new Error(errorMessage),
    }

    const { getByText } = render(
      <MockedProvider mocks={[mockErrorQuery]} addTypename={false}>
        <App />
      </MockedProvider>
    )

    await waitFor(() => {
      expect(getByText(errorMessage)).toBeInTheDocument()
    })
  })
})
