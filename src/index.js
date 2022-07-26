import React from "react";
import ReactDOM from "react-dom/client";

// import css bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// import redux
// createStore: là hàm dùng để khởi tạo một redux store
// applyMiddleware: là hàm dùng để gắn middleware vào redux
// compose: là hàm dùng để kết hợp các function lại thành 1 function duy nhất, lý do sử dụng là vì hàm createStore chỉ nhận vào 2 tham số mà applyMiddleware sẽ được đưa vào tham số thứ 2 của hàm createStore => xung đột với redux devtool => dùng compose để gộp hàm applyMiddleware và redux devtool vào chung 1 function để truyền vào hàm createStore
import { createStore, applyMiddleware, compose } from "redux";

// import redux-thunk
// thunk là một thư viện middleware của redux, cho phép viết các async actions
import thunk from "redux-thunk";

// import react-redux
// Provider: là component dùng để kết nối redux và các component của react
import { Provider } from "react-redux";

import rootReducer from "./redux/reducers";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Reducer là một function nhận vào 2 tham số
// - state: giá trị state hiện tại của store, ở lần đầu tiên ta cần khởi tạo giá trị mặc định cho state. state = { count: 0 }
// - action: là một object có 1 key bắt buộc là type dùng để mô tả cho reducer biết là sẽ làm gì

// Để sử dụng devtool chung với middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Khởi tạo redux store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// Hàm getState dùng để truy cập state từ store
console.log("state trước khi dispatch:", store.getState());
// Hàm dispatch dùng để gửi 1 action lên store để thay đổi state
store.dispatch({ type: "INCREASE" });
console.log("state sau khi dispatch:", store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Kết nối redux với react
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
