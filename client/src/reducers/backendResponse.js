const backendResponseReducer = (state = null, action) => {
  if (action.type === 'backendResponse') {
    return (state = action.payload);
  }
  return state;
};

export default backendResponseReducer;
