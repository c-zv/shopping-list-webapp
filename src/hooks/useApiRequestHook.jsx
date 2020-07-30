import {
  useState, useCallback, useReducer,
} from 'react';
import Notification from '~/utils/notificationManager';

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

const useApiRequestHook = (requestFn, successText = undefined) => {
  const [request] = useState(() => requestFn);
  const [successNotification] = useState(successText);
  const [notification] = useState(new Notification());

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
        if (successNotification) {
          notification.success(successNotification);
        }
      } catch (err) {
        dispatch({ type: requestActions.ERROR, payload: err });
        notification.error(err.response.data.error);
      }
    }, [request, notification, successNotification],
  );

  return {
    response: reqState.response,
    error: reqState.error,
    loading: reqState.loading,
    execute,
  };
};

export default useApiRequestHook;
