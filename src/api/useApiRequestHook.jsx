import {
  useState, useCallback, useReducer,
} from 'react';

const requestActions = {
  FETCH: 'REQUEST_INIT',
  SUCCESS: 'REQUEST_SUCCESS',
  ERROR: 'REQUEST_ERROR',
};

const requestReducer = (state, action) => {
  switch (action.type) {
    case requestActions.FETCH:
      return {
        ...state,
        error: undefined,
        loading: true,
      };
    case requestActions.SUCCESS:
      return {
        response: { data: action.payload },
        error: undefined,
        loading: false,
      };
    case requestActions.ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

const useApiRequestHook = (requestFn) => {
  const [request] = useState(() => requestFn);

  const [reqState, dispatch] = useReducer(requestReducer, {
    response: {},
    error: undefined,
    loading: false,
  });

  const execute = useCallback(
    async (args = []) => {
      dispatch({ type: requestActions.FETCH });
      try {
        const res = await request(...args);
        dispatch({ type: requestActions.SUCCESS, payload: res.data });
      } catch (err) {
        dispatch({ type: requestActions.ERROR, payload: err });
      }
    }, [request],
  );

  return {
    response: reqState.response,
    error: reqState.error,
    loading: reqState.loading,
    execute,
  };
};

export default useApiRequestHook;
