import React from 'react';
import '@testing-library/jest-dom';
import { render, cleanup } from '@testing-library/react';
import { testsInitSetup } from 'utils/testHelpers';

import ShopListDrawer from './ShopListDrawer';

testsInitSetup();

afterEach(cleanup);

const generateDummyProps = (isVisible = false, dummyShopListToEdit = undefined) => ({
  drawerCtrl: {
    close: jest.fn(),
    visible: isVisible,
    shopListToEdit: dummyShopListToEdit,
  },
  submitShopList: jest.fn(),
});

describe('ShoppingList Test Suite', () => {
  it('with no shopListToEdit should show form for New shopping list ', () => {
    const dummyProps = generateDummyProps(true);
    const { getByText, getByLabelText, getByTestId } = render(
      <ShopListDrawer
        drawerCtrl={dummyProps.drawerCtrl}
        submitShopList={dummyProps.submitShopList}
      />,
    );

    const titleText = 'New shopping list';
    expect(getByText(titleText)).toBeDefined();
    const submitButton = getByTestId('submitButton');
    // console.log("---> Subm button: ", submitButton);
    expect(submitButton).toHaveTextContent('Create');

    const name = getByLabelText('Name');
    const description = getByLabelText('Description');
    const category = getByLabelText('Category');

    expect(name).toBeDefined();
    expect(description).toBeDefined();
    expect(category).toBeDefined();

    expect(name).toHaveDisplayValue('');
    expect(description).toHaveDisplayValue('');
    expect(category).toHaveDisplayValue('');
  });

  it('with shopListToEdit should show form for Edit shopping list ', () => {
    const dummyShopList = {
      name: 'Dummy Name',
      description: 'dummy description',
      color: '#8da0cb', // corresponds to 'Tech' category name
    };
    const dummyProps = generateDummyProps(true, dummyShopList);
    const { getByText, getByLabelText, getByTestId } = render(
      <ShopListDrawer
        drawerCtrl={dummyProps.drawerCtrl}
        submitShopList={dummyProps.submitShopList}
      />,
    );

    const titleText = 'Edit shopping list';
    expect(getByText(titleText)).toBeDefined();
    const submitButton = getByTestId('submitButton');
    expect(submitButton).toHaveTextContent('Update');

    const name = getByLabelText('Name');
    const description = getByLabelText('Description');
    const category = getByTestId('selectedOption');

    expect(name).toBeDefined();
    expect(description).toBeDefined();
    expect(category).toBeDefined();

    expect(name).toHaveDisplayValue(dummyShopList.name);
    expect(description).toHaveDisplayValue(dummyShopList.description);
    expect(category).toHaveTextContent('Tech');
  });
});
