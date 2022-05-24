import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Main } from './Main';

jest.mock('../ModalProductDetail/ModalProductDetail.js', () => ChildComponent => props => <ChildComponent {...props} />);

test('render products on main page', async () => {
  const props = {
    onFetchProducts: jest.fn(),
    featuredProducts: [{id: 1}, {id: 2}, {id: 3}],
    popularProducts: [{id: 4}, {id: 5}, {id: 6}],
  }
  const { findAllByTestId } = render(
    <BrowserRouter>
      <Main { ...props } />
    </BrowserRouter>
  );
  const products = await findAllByTestId('productCard')

  expect(products).toHaveLength(6)
});

test('render Loading on main page when featured or popular proucts are not available.', async () => {
  const props = {
    onFetchProducts: jest.fn(),
    featuredProducts: null,
    popularProducts: null,
  }
  const { findByText } = render(
    <BrowserRouter>
      <Main { ...props } />
    </BrowserRouter>
  );
  const loading = await findByText('Loading...')

  expect(loading).toBeTruthy()
});

test('render error on main page there is error.', async () => {
  const props = {
    onFetchProducts: jest.fn(),
    featuredProducts: null,
    popularProducts: null,
    error: {}
  }
  const { findByText } = render(
    <BrowserRouter>
      <Main { ...props } />
    </BrowserRouter>
  );
  const errorMessage = await findByText('Looks like something has gone wrong! We are really sorry for inconvenience! Try refreshing or coming back latter.')

  expect(errorMessage).toBeTruthy()
});