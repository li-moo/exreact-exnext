import React from 'react';
import style from './MemberInfo.module.css';
import Slider from 'react-slick';

function MemberInfo() {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
  };


  return (
    <>
      <div className={style.led}>
        <p className={style.ticker}>안녕하세요 회원님 회원번호를 입력해 출석 및 퇴실(주차등록)을 해주세요</p>
      </div>
      <Slider {...settings}>
        <div>
          <img
            className={style.image}
            src='https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210924_171%2F16324677360997YGkS_JPEG%2FnkTS9I_i7yrS4LkyoOMwQhX6.jpg'
            alt='wannaGym01'
          />
        </div>
        <div>
          <img
            className={style.image}
            src='https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220220_48%2F1645349201712dISGU_JPEG%2F1645349174539-0.jpg'
            alt='wannaGym02'
          />
        </div>
        <div>
          <img
            className={style.image}
            src='https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210916_68%2F1631756554939FMlIf_JPEG%2FDjOrOy8vzTNbMDz0uN9zKtdc.jpg'
            alt='wannaGym03'
          />
        </div>
        <div>
          <img
            className={style.image}
            src='https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210916_276%2F1631756527931I1xIU_JPEG%2FwDcGn0EeExHWBedqDnZWcSzw.jpg'
            alt='wannaGym04'
          />
        </div>
      </Slider>
    </>
  );
}

export default MemberInfo;


