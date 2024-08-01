import React, { useState, useEffect } from 'react';
import { memberState } from '../state/memberState';
import { inTimeState } from '../state/inTimeState';
import { useRecoilValue } from 'recoil';
import AttendanceFetch from './fetch/AttendanceFetch';
import ParkingFetch from './fetch/ParkingFetch';
import MemberInfo from '../pages/MemberInfo';
import style from './LayLeft.module.css'

function LayLeft() {

  const memberData = useRecoilValue(memberState);
  const inTimeData = useRecoilValue(inTimeState);

  useEffect(() => {
    // console.log('－memberData.isAttendance:', memberData.isAttendance)
    // console.log('－memberData.isAttendance:', memberData ? memberData.isAttendance : 'undefined');
    // console.log('－memberData 조건:', memberData && Object.keys(memberData).length !== 0 && memberData !== undefined);

  }, [memberData])



  return (
    <>
      {(!memberData || Object.keys(memberData).length === 0) && <MemberInfo />}
      {memberData && memberData.name && (
        <div className={style.layLeft01}>
          {memberData.member_number && memberData.member_number.length >= 4 ? (
            memberData.member_img ? (
              <img src={memberData.member_img} alt='회원님 사진이 뜨지 않았습니다' />
            ) : (
              <img src="https://cdn.ibos.kr/template/DESIGN_shared/program/theme/01/THUMBNAIL_60_60_icon_rep_box.gif" alt="Default Image" />
            )
          ) : null}

          <div className={style.layLeft02}>
            <div className={style.latLeft04}>
              <p>{memberData.name}</p>
              <p>{`(${memberData.member_number})`}</p>
            </div>
            <div className={style.layLeft03}>
              <p>{memberData.first_membership_period}</p>
              <p>{memberData.second_membership_period}</p>
              {!memberData.isAttendance && memberData.member_number && memberData.member_number.length >= 4 && <AttendanceFetch />}
              {inTimeData && !inTimeData.isRegister && memberData.member_number && memberData.member_number.length >= 4 && <ParkingFetch />}
            </div>
          </div>
        </div>
      )}

    </>
  );
}

export default LayLeft;