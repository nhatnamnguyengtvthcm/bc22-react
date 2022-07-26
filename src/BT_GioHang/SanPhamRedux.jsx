import React from 'react'
import { useDispatch } from 'react-redux'
import * as actionTypes from "../redux/constants/gioHangConstants";
const SanPhamRedux = ({phone}) => {
  const dispatch = useDispatch();
  const handleAdd = (phone)=>{
    const spGioHang = {
        maSP:phone.maSP,
        tenSP:phone.tenSP,
        giaBan:phone.giaBan,
        soLuong:1,
        hinhAnh:phone.hinhAnh
    }
    dispatch({type:actionTypes.ADD_GIOHANG, data:spGioHang})
  }
  return (
   <div>
  <div className="card">
    <img className="card-img-top" width={150} height={400} src={phone.hinhAnh} alt={phone.tenSP} />
    <div className="card-body">
      <h4 className="card-title">{phone.tenSP}</h4>
      <p className="card-text">{phone.giaBan}</p>
      
    </div>
    <div className='header'>
    <button className='btn btn-success' onClick={()=>(handleAdd(phone))}>Thêm giỏ hàng</button>
    </div>
   
  </div>
</div>

  )
}

export default SanPhamRedux
