// Khởi tạo giá trị ban đầu của store
import * as actionTypes from "../constants/gioHangConstants"
const stateGioHang = {
  gioHang: [
    {
      maSP: 1,
      tenSP: "Iphone",
      hinhAnh: "",
      soLuong: 1,
      giaBan: 1000,
      thanhTien: 1000,
    },
  ],
};

export const GioHangReducer = (state = stateGioHang, action) => {
  switch (action.type) {
    case actionTypes.ADD_GIOHANG:
      let index = state.gioHang.findIndex(obj => {return obj.maSP == action.data.maSP});
      if (index!= -1){
        state.gioHang[index].soLuong +=1;
      }
      else{
        state.gioHang.push(action.data);
      }
      state.gioHang = [...state.gioHang]
      return {...state};
    default:
      break;
  }
  return state;
};
