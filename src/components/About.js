import React from 'react'

import MinhNgoc from '../image/MinhNgoc.jpg'
function About() {
  return (
    <div className="container-about">
    <div>
      <div className="title-heading">Sinh Viên Thực Hiện</div>
      <img
        className="image-about"
        src={MinhNgoc}
        alt="Vương Minh Ngọc avatar"
      />
    </div>

    <div className="container-desc__wrapper">
      <div className="container-desc">
        <p className="context">Họ và tên: Vương Minh Ngọc</p>
        <p className="context">MSSV: 46.01.104.124</p>
        <p className="context">Trường: Đại học Sư phạm TP.HCM</p>
      </div>
    </div>
  </div>
  )
}

export default About