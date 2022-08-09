const cart = [];
const addToCartReducer = (state = cart, action) => {
  if (action.type === "addToCart") {
    const index = state.findIndex((item) => item.id === action.payload.id);
    if (index >= 0) {
      if (state[index].quant < 5) {
        state[index].quant += 1;
      }
    } else {
      return [...state, action.payload];
    }
  } else if (action.type === "increaseItem") {
    const newArr = state.map((obj) => {
      if (obj.id === action.payload && obj.quant < 5) {
        return { ...obj, quant: obj.quant + 1 };
      }

      return obj;
    });
    return newArr;
  } else if (action.type === "decreaseItem") {
    const newArr = state.map((obj) => {
      if (obj.id === action.payload && obj.quant > 1) {
        return { ...obj, quant: obj.quant - 1 };
      }

      return obj;
    });
    return newArr;
  } else if (action.type === "deleteItem") {
    console.log("clciked");
    const indexOfObject = state.findIndex((object) => {
      return object.id === action.payload;
    });
    state.splice(indexOfObject, 1);
    return [...state];
  } else {
    return state;
  }
};

export default addToCartReducer;
