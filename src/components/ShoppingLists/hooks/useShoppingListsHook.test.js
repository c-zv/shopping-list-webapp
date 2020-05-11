import { renderHook, act, cleanup } from '@testing-library/react-hooks';

import api from 'utils/api';
import { withReduxWrapper, mocks } from 'utils/testHelpers';
import useShoppingListsHook from './useShoppingListsHook';

jest.mock('utils/api');

const mockShopList = {
  id: 1,
  name: 'aut',
  description: 'Description',
  category_id: 3,
  num_bought_items: 0,
  num_missing_items: 3,
  num_stores: 1,
};

beforeEach(() => {
  api.shopLists.getAll.mockResolvedValue({ data: [] });
  api.categories.getAll.mockResolvedValue({ data: mocks.categories });
  api.shopLists.create.mockResolvedValue({ status: 200 });
  api.shopLists.update.mockResolvedValue({ status: 200 });
  api.shopLists.delete.mockResolvedValue({ status: 200 });
});

afterEach(cleanup);

describe('useShoppingListsHook tests', () => {
  it('store should be empty', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useShoppingListsHook(),
      { wrapper: ({ children }) => withReduxWrapper(children) },
    );
    await waitForNextUpdate();
    expect(result.current.shopListsCtrl.shopLists).toHaveLength(0);
  });

  it('should add 1 shopping list', async () => {
    const mockedResponse2 = [mockShopList];

    const { result, waitForNextUpdate } = renderHook(
      () => useShoppingListsHook(),
      { wrapper: ({ children }) => withReduxWrapper(children) },
    );

    await waitForNextUpdate();
    expect(result.current.shopListsCtrl.shopLists).toHaveLength(0);

    api.shopLists.getAll.mockResolvedValue({ data: mockedResponse2 });
    await act(async () => {
      result.current.shopListsCtrl.dispatchCreateShopList(mockShopList);
      await waitForNextUpdate();
    });
    expect(result.current.shopListsCtrl.shopLists).toHaveLength(mockedResponse2.length);
    expect(result.current.shopListsCtrl.shopLists[0]).toMatchObject(mockShopList);
  });

  it('should edit a shopping list', async () => {
    const propertiesToChange = {
      name: 'new name',
      description: 'new description',
    };
    const mockedResponse1 = [mockShopList];
    api.shopLists.getAll.mockResolvedValue({ data: mockedResponse1 });

    const { result, waitForNextUpdate } = renderHook(
      () => useShoppingListsHook(),
      { wrapper: ({ children }) => withReduxWrapper(children) },
    );

    await waitForNextUpdate();
    expect(result.current.shopListsCtrl.shopLists).toHaveLength(mockedResponse1.length);
    expect(result.current.shopListsCtrl.shopLists[0]).toMatchObject(mockedResponse1[0]);

    const mockedResponse2 = [{ ...mockShopList, ...propertiesToChange }];
    api.shopLists.getAll.mockResolvedValue({ data: mockedResponse2 });
    await act(async () => {
      result.current.shopListsCtrl.dispatchEditShopList({
        ...mockShopList,
        ...propertiesToChange,
      });
      await waitForNextUpdate();
    });
    expect(result.current.shopListsCtrl.shopLists).toHaveLength(mockedResponse2.length);
    expect(result.current.shopListsCtrl.shopLists[0]).toMatchObject(mockedResponse2[0]);
  });

  it('should delete a shopping list', async () => {
    const mockedResponse1 = [mockShopList];

    api.shopLists.getAll.mockResolvedValue({ data: mockedResponse1 });

    const { result, waitForNextUpdate } = renderHook(
      () => useShoppingListsHook(),
      { wrapper: ({ children }) => withReduxWrapper(children) },
    );
    await waitForNextUpdate();
    expect(result.current.shopListsCtrl.shopLists).toHaveLength(mockedResponse1.length);

    const mockedResponse2 = [];
    api.shopLists.getAll.mockResolvedValue({ data: mockedResponse2 });
    await act(async () => {
      result.current.shopListsCtrl.dispatchDeleteShopList(mockShopList.id);
      await waitForNextUpdate();
    });
    expect(result.current.shopListsCtrl.shopLists).toHaveLength(mockedResponse2.length);
  });
});
