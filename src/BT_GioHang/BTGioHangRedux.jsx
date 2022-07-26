import React from 'react'
import DanhSachSanPhamRedux from './DanhSachSanPhamRedux'
import ModalGioHangRedux from './ModalGioHangRedux'

const BTGioHangRedux = () => {
  return (
    <div className='container'>
        <h3 className='text-danger text-center'>Bài tập giỏ hàng Redux</h3>
        <ModalGioHangRedux />
        <DanhSachSanPhamRedux />
    </div>
  )
}

export default BTGioHangRedux