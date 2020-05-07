import { renderHook, act, cleanup } from '@testing-library/react-hooks';

import { apiShopLists } from 'utils/api';
import { withReduxWrapper } from 'utils/testHelpers';
import useShoppingListsHook from './useShoppingListsHook';

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

afterEach(cleanup);

describe('useShoppingListsHook tests', () => {
  it('store should be empty', () => {
    const { result } = renderHook(
      () => useShoppingListsHook(),
      { wrapper: ({ children }) => withReduxWrapper(children) },
    );
    expect(result.current.shopListsCtrl.shopLists.data).toHaveLength(0);
  });

  it('should add 1 shopping list', async () => {
    const mockedResponse1 = [];
    const mockedResponse2 = [mockShopList];

    apiShopLists.getAll.mockResolvedValue({ data: mockedResponse1 });
    const { result, waitForNextUpdate } = renderHook(
      () => useShoppingListsHook(),
      { wrapper: ({ children }) => withReduxWrapper(children) },
    );

    await waitForNextUpdate();
    expect(result.current.shopListsCtrl.shopLists.data).toHaveLength(mockedResponse1.length);

    apiShopLists.getAll.mockResolvedValue({ data: mockedResponse2 });
    apiShopLists.create.mockResolvedValue({ status: 200 });
    await act(async () => {
      result.current.shopListsCtrl.dispatchCreateShopList(mockShopList);
      await waitForNextUpdate();
    });
    expect(result.current.shopListsCtrl.shopLists.data).toHaveLength(mockedResponse2.length);
    expect(result.current.shopListsCtrl.shopLists.data[0]).toMatchObject(mockShopList);
  });

  it('should edit a shopping list', async () => {
    const propertiesToChange = {
      name: 'new name',
      description: 'new description',
    };
    const mockedResponse1 = [mockShopList];
    apiShopLists.getAll.mockResolvedValue({ data: mockedResponse1 });
    apiShopLists.update.mockResolvedValue({ status: 200 });

    const { result, waitForNextUpdate } = renderHook(
      () => useShoppingListsHook(),
      { wrapper: ({ children }) => withReduxWrapper(children) },
    );

    await waitForNextUpdate();
    expect(result.current.shopListsCtrl.shopLists.data).toHaveLength(mockedResponse1.length);
    expect(result.current.shopListsCtrl.shopLists.data[0]).toMatchObject(mockedResponse1[0]);

    const mockedResponse2 = [{ ...mockShopList, ...propertiesToChange }];
    apiShopLists.getAll.mockResolvedValue({ data: mockedResponse2 });
    await act(async () => {
      result.current.shopListsCtrl.dispatchEditShopList({
        ...mockShopList,
        ...propertiesToChange,
      });
      await waitForNextUpdate();
    });
    expect(result.current.shopListsCtrl.shopLists.data).toHaveLength(mockedResponse2.length);
    expect(result.current.shopListsCtrl.shopLists.data[0]).toMatchObject(mockedResponse2[0]);
  });

  it('should delete a shopping list', async () => {
    const mockedResponse1 = [mockShopList];

    apiShopLists.getAll.mockResolvedValue({ data: mockedResponse1 });
    apiShopLists.delete.mockResolvedValue({ status: 200 });

    const { result, waitForNextUpdate } = renderHook(
      () => useShoppingListsHook(),
      { wrapper: ({ children }) => withReduxWrapper(children) },
    );
    await waitForNextUpdate();
    expect(result.current.shopListsCtrl.shopLists.data).toHaveLength(mockedResponse1.length);

    const mockedResponse2 = [];
    apiShopLists.getAll.mockResolvedValue({ data: mockedResponse2 });
    await act(async () => {
      result.current.shopListsCtrl.dispatchDeleteShopList(mockShopList.id);
      await waitForNextUpdate();
    });
    expect(result.current.shopListsCtrl.shopLists.data).toHaveLength(mockedResponse2.length);
  });
});
