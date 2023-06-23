import { render } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'

import MOCK_PRODUCTS, {
  MOCK_DESCRIPTION_1,
  MOCK_DESCRIPTION_2,
} from '../const/mocks'
import ProductList from './ProductList'

describe('<ProductList />', () => {
  it('renders the product list', () => {
    const { getByText } = render(
      <MockedProvider>
        <ProductList products={MOCK_PRODUCTS} />
      </MockedProvider>
    )

    expect(getByText('Tablet')).toBeInTheDocument()
    expect(getByText('Laptop')).toBeInTheDocument()
    expect(getByText(MOCK_DESCRIPTION_1)).toBeInTheDocument()
    expect(getByText(MOCK_DESCRIPTION_2)).toBeInTheDocument()
  })
})
