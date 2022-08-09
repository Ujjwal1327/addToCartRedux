export const ADD = (item) => {
  return (dispatch) => {
    dispatch({
      type: "addToCart",
      payload: item,
    });
  };
};
export const INC = (id) => {
  return (dispatch) => {
    dispatch({
      type: "increaseItem",
      payload: id,
    });
  };
};
export const DEC = (id) => {
  return (dispatch) => {
    dispatch({
      type: "decreaseItem",
      payload: id,
    });
  };
};
export const DEL = (id) => {
  return (dispatch) => {
    dispatch({
      type: "deleteItem",
      payload: id,
    });
  };
};
