import React from "react";
import { useSelector } from "react-redux";
// kêt nối react-reduct
const ModalGioHangRedux = () => {
  const { gioHang } = useSelector((state) => state.gioHang);
  //    console.log(gioHang) ;
  const listGioHang = () => {
    console.log(gioHang);
    return gioHang.map((item) => {
      return (
        <tr key={item.maSP}>
          <td>{item.maSP}</td>
          <td>{item.tenSP}</td>
          <td>
            <img src={item.hinhAnh} alt={item.tenSP} width={25} height={75} />
          </td>
          <td>{item.soLuong}</td>
          <td>{item.giaBan}</td>
          <td>{item.giaBan * item.soLuong}</td>
        </tr>
      );
    });
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Mã Sản Phẩm</th>
            <th>Tên Sản Phẩm</th>
            <th>Hình ảnh</th>
            <th>Số Lượng</th>
            <th>Giá Bán</th>
            <th>Thành Tiền</th>
          </tr>
        </thead>
        {/* <tbody>{listGioHang(gioHang)}</tbody>  */}
        <tbody>{listGioHang()}</tbody>
      </table>
    </div>
  );
};

export default ModalGioHangRedux;
