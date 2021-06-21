const backendResponseAction = (data) => {
  return {
    type: 'backendResponse',
    payload: data,
  };
};

export default backendResponseAction;
