import { combineReducers } from "redux";
import colorReducer from "./colorReducer";
import countReducer from "./countReducer";
import todoReducer from "./todoReducer";
import { GioHangReducer } from "./GioHangReducer";
// combineReducers là hàm dùng để kết hợp tất cả reducer lại thành một reducer tổng
const rootReducer = combineReducers({
  count: countReducer,
  colors: colorReducer,
  todo: todoReducer,
  gioHang: GioHangReducer,
});

export default rootReducer;
