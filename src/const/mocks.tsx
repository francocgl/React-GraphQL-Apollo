export const MOCK_DESCRIPTION_1 =
  'If the computer were invented today, what would it look like? It would be powerful enough for any task. So mobile you could take it everywhere. And so intuitive you could use it any way you wanted — with touch, a keyboard, or even a pencil. In other words, it wouldn’t really be a "computer." It would be Tablet.'
export const MOCK_DESCRIPTION_2 =
  'Now equipped with seventh-generation Intel Core processors, Laptop is snappier than ever. From daily tasks like launching apps and opening files to more advanced computing, you can power through your day thanks to faster SSDs and Turbo Boost processing up to 3.6GHz.'

const MOCK_PRODUCTS = [
  {
    id: 1,
    assets: [
      {
        source:
          'https://demo.vendure.io/assets/source/5a/kelly-sikkema-685291-unsplash.jpg',
      },
    ],
    description: MOCK_DESCRIPTION_1,
    name: 'Tablet',
    variants: [{ id: '1', price: 1000 }],
  },
  {
    id: 2,
    assets: [
      {
        source: 'https://example.com/image2.jpg',
      },
    ],
    description: MOCK_DESCRIPTION_2,
    name: 'Laptop',
    variants: [{ id: '2', price: 2000 }],
  },
]

export default MOCK_PRODUCTS
