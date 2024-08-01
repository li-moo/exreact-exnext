import React, { useEffect } from 'react'
import { memberState } from '../../state/memberState';
import { inTimeState } from '../../state/inTimeState';
import { useRecoilValue, useRecoilState } from 'recoil';
import axios from 'axios';

function AttendanceFetch() {

  const memberResData = useRecoilValue(memberState);
  const [memberData, setMemberData] = useRecoilState(memberState);
  const [inTimeData, setInTimeData] = useRecoilState(inTimeState);
  const attendanceInTime = new Date().toLocaleTimeString('en-GB', { hour12: false });
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더해줌
  const day = String(today.getDate()).padStart(2, '0');
  const todayDate = `${year}-${month}-${day}`;

  const url_be = 'http://localhost:4000';
  // const url_be = 'http://15.164.140.169:4000';

  const fetchAttendance = () => {

    console.log('axios전', memberData);

    setInTimeData(null);
    axios
      (`${url_be}/attendance`,
        {
          method: 'post',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            withCredentials: true,
            mode: 'no-cors'
          },
          data: {
            member_number: memberResData.member_number,
            in_time: attendanceInTime
          }
        })
      .then((res) => {
        if (res !== null && res !== "") {
          setMemberData({
            ...memberData,
            isAttendance: true,
            client_date: todayDate
          })
          setInTimeData({
            ...inTimeData,
            in_time: attendanceInTime
          })
          console.log("출석");
          alert(`안녕하세요 ${memberData.name}님`);
          window.location.reload();
        } else {
          console.log("실패");
          alert("다시 시도해주세요");
          window.location.reload();
        }
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      })
  };

  return (
    <button onClick={fetchAttendance}>출석</button>

  )
}

export default AttendanceFetch