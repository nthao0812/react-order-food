import React from "react";

//tạo một store lưu trữ mọi trạng thái component
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  additem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
