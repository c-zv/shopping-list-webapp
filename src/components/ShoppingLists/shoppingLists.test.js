import React from 'react';
import '@testing-library/jest-dom';
import { render, cleanup, waitFor } from '@testing-library/react';
import { testsInitSetup, withReduxWrapper } from 'utils/testHelpers';

import { apiShopLists } from 'utils/api';
import ShoppingLists from './ShoppingLists';

jest.mock('utils/api', () => ({
  ...(jest.requireActual('utils/api')),
  apiShopLists: {
    getAll: jest.fn(),
    getOne: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
}));

const mockShopList = {
  id: 1,
  name: 'aut',
  description: 'Description',
  category_id: 3,
  num_bought_items: 0,
  num_missing_items: 3,
  num_stores: 1,
};

testsInitSetup();

afterEach(cleanup);

describe('ShoppingList Test Suite', () => {
  it('new list button should be defined', () => {
    const { getByTestId } = render(withReduxWrapper(<ShoppingLists />));
    expect(getByTestId('newListBtn')).toBeDefined();
  });

  it('should not have any shopping list', () => {
    apiShopLists.getAll.mockResolvedValue({ data: [] });

    const { getByTestId, queryAllByTestId } = render(withReduxWrapper(<ShoppingLists />));
    return waitFor(() => {
      const cards = getByTestId('shopListCards');
      const cardElements = queryAllByTestId('card');
      expect(cards).toBeEmpty();
      expect(cardElements).toHaveLength(0);
    });
  });

  it('should receive 1 shopping list and display it', () => {
    const mockedResponse = [mockShopList];
    apiShopLists.getAll.mockResolvedValue({ data: mockedResponse });

    const { getByTestId, queryAllByTestId } = render(withReduxWrapper(<ShoppingLists />));
    return waitFor(() => {
      const cardElements = queryAllByTestId('card');
      expect(getByTestId('shopListCards')).not.toBeEmpty();
      expect(cardElements).toHaveLength(mockedResponse.length);
    });
  });
});
