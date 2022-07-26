import React from "react";
import data from "./data.json";
import SanPhamRedux from "./SanPhamRedux";
const DanhSachSanPhamRedux = () => {
  const renderSanPham = () => {
    return data.map((phone) => {
      return (
        <div key={phone.maSP} className="col-4">
          <SanPhamRedux phone={phone}></SanPhamRedux>
        </div>
      );
    });
  };
  return <div className="row">{renderSanPham()}</div>;
};

export default DanhSachSanPhamRedux;
