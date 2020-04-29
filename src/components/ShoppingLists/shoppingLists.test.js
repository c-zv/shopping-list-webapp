import React from 'react';
import '@testing-library/jest-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { testsInitSetup, withReduxWrapper } from 'utils/testHelpers';

import ShoppingLists from './ShoppingLists';

testsInitSetup();

afterEach(cleanup);

describe('ShoppingList Test Suite', () => {
  it('new list button should be defined', () => {
    const { getByTestId } = render(withReduxWrapper(<ShoppingLists />));
    expect(getByTestId('newListBtn')).toBeDefined();
  });

  it('should not have any shopping list', () => {
    const { getByTestId, queryAllByTestId } = render(withReduxWrapper(<ShoppingLists />));
    const cards = getByTestId('shopListCards');
    const cardElements = queryAllByTestId('card');
    expect(cards).toBeEmpty();
    expect(cardElements).toHaveLength(0);
  });

  it('should have 1 shopping list after creating random shopping list', () => {
    const { getByTestId, queryAllByTestId } = render(withReduxWrapper(<ShoppingLists />));
    fireEvent.click(getByTestId('randomListBtn'));
    const cardElements = queryAllByTestId('card');
    expect(getByTestId('shopListCards')).not.toBeEmpty();
    expect(cardElements).toHaveLength(1);
  });
});
