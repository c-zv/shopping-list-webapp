import { renderHook, act, cleanup } from '@testing-library/react-hooks';
import { withReduxWrapper } from 'utils/testHelpers';
import useShoppingListsHook from './useShoppingListsHook';

afterEach(cleanup);

const initState = {
  shoppingLists: [
    {
      name: 'original name',
      description: 'shopping list custom description',
      id: '83861',
      color: '#9C27B0'
    }
  ]
};

describe('useShoppingListsHook tests', () => {
  it('store should be empty', () => {
    const { result } = renderHook(
      () => useShoppingListsHook(),
      { wrapper: ({children}) => withReduxWrapper(children) }
    );
    expect(result.current.shopListsCtrl.shopLists).toHaveLength(0);
  });

  it('should add 1 shopping list', () => {
    const dummyShopList = {
      name: 'dummyName',
      description: 'dummyDescription',
    };
    const { result } = renderHook(
      () => useShoppingListsHook(),
      { wrapper: ({children}) => withReduxWrapper(children) }
    );
    expect(result.current.shopListsCtrl.shopLists).toHaveLength(0);
    act(() => (result.current.shopListsCtrl.createNewShopList(dummyShopList)));
    expect(result.current.shopListsCtrl.shopLists).toHaveLength(1);
    expect(result.current.shopListsCtrl.shopLists[0]).toMatchObject(dummyShopList);
  });

  it('should edit a shopping list', () => {
    const propertiesToChange = {
      name: 'new name',
      description: 'new description',
    };
    const { result } = renderHook(
      () => useShoppingListsHook(),
      { wrapper: ({children}) => withReduxWrapper(children, {initialState: initState }) }
    );
    expect(result.current.shopListsCtrl.shopLists).toHaveLength(1);
    expect(result.current.shopListsCtrl.shopLists[0]).toMatchObject(initState.shoppingLists[0]);
    act(() => {
      result.current.shopListsCtrl.editShopList({
        ...initState.shoppingLists[0],
        ...propertiesToChange,
      })}
    );
    expect(result.current.shopListsCtrl.shopLists).toHaveLength(1);
    expect(result.current.shopListsCtrl.shopLists[0]).toMatchObject({
      ...initState.shoppingLists[0],
      ...propertiesToChange,
    });
  });

  it('should delete a shopping list', () => {
    const { result } = renderHook(
      () => useShoppingListsHook(),
      { wrapper: ({children}) => withReduxWrapper(children, {initialState: initState }) }
    );
    expect(result.current.shopListsCtrl.shopLists).toHaveLength(1);
    act(() => {
      result.current.shopListsCtrl.removeShopList(initState.shoppingLists[0].id);
    });
    expect(result.current.shopListsCtrl.shopLists).toHaveLength(0);
  });

});
