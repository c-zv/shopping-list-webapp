import { renderHook, act, cleanup } from '@testing-library/react-hooks';
import useShopListDrawerHook from './useShopListDrawerHook';

afterEach(cleanup);

describe('useShopListDrawerHook tests', () => {
  it('by default drawer should be closed with undefined shopListToEdit', () => {
    const { result } = renderHook(() => useShopListDrawerHook());
    expect(result.current.visible).toBeFalsy();
    expect(result.current.shopListToEdit).toBeUndefined();
  });

  it('drawer should be closed after opening and closing', () => {
    const { result } = renderHook(() => useShopListDrawerHook());
    act(() => result.current.open());
    expect(result.current.visible).toBeTruthy();
    expect(result.current.shopListToEdit).toBeUndefined();
    act(() => result.current.close());
    expect(result.current.visible).toBeFalsy();
    expect(result.current.shopListToEdit).toBeUndefined();
  });

  it('drawer should be open and with shopListToEdit', () => {
    const dummyShopListToEdit = { dummyAttr: 'dummyAttrValue' };
    const { result } = renderHook(() => useShopListDrawerHook());
    act(() => result.current.open(dummyShopListToEdit));
    expect(result.current.visible).toBeTruthy();
    expect(result.current.shopListToEdit).toEqual(dummyShopListToEdit);
  });
});
