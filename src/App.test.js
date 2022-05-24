import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { App } from './App';

import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import ordersReducer from './store/reducers/orders';
import authReducer from './store/reducers/auth';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';


export function createTestStore() {
  const store = createStore(
    combineReducers({
      productsState: productsReducer,
      cartState: cartReducer,
      ordersState: ordersReducer,
      authState: authReducer
    }),
    applyMiddleware(thunk)
  );
  return store;
}
let store;
describe('App Container', () => {
  
  beforeEach(() => {
    store = createTestStore();
  });

  test('renders Layout and Logo in it', async () => {
    const props = {
      onAutoLogIn: jest.fn(),
      isAuthenticated: true
    }
    const { getAllByText, getByTestId } = render(
    <Provider store={store}>
      <BrowserRouter>
        <App  {...props} />
      </BrowserRouter>
    </Provider>
    );
    const logos = getAllByText('SellTech');
    const toolbar = getByTestId('toolbar');
    const sidebar = getByTestId('sidebar');
    expect(logos).toHaveLength(5);
    expect(toolbar).toBeTruthy();
    expect(sidebar).toBeTruthy();
  });
})
