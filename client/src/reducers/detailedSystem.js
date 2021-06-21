const detailedSystemReducer = (state = null, action) => {
  if (action.type === 'detailedSystem') {
    return (state = action.payload);
  }
  return state;
};

export default detailedSystemReducer;
