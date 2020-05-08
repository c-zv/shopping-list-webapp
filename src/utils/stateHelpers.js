
// eslint-disable-next-line import/prefer-default-export
export const generateActionsForApiRequest = (actionName) => ({
  REQUEST: `${actionName}_REQUEST`,
  REQUEST_SUCCESS: `${actionName}_REQUEST_SUCCESS`,
  REQUEST_FAIL: `${actionName}_REQUEST_FAIL`,
});

// export default { generateActionsForApiRequest };
