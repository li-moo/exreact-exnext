import React, { useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { inTimeState } from '../../state/inTimeState';
import { memberState } from '../../state/memberState';
import axios from 'axios';

function ParkingFetch() {
  const memberResData = useRecoilValue(memberState);
  const inTimeData = useRecoilValue(inTimeState);
  const [resInTimeState, setResInTimeState] = useRecoilState(inTimeState);
  const [resMemberResData, setResMemberResData] = useRecoilState(inTimeState);

  const parkingOutTime = new Date().toLocaleTimeString('en-GB', { hour12: false });

  const getTime = (start, end, spareMinutes) => {
    if (!start || !end) {
      console.error('Invalid start or end time');
      return '00:00:00'; // 기본 값 반환
    }

    const [startHours, startMinutes] = start.split(':').map(Number);
    const [endHours, endMinutes] = end.split(':').map(Number);

    let startTotalMinutes = startHours * 60 + startMinutes;
    let endTotalMinutes = endHours * 60 + endMinutes;

    if (endTotalMinutes < startTotalMinutes) {
      endTotalMinutes += 24 * 60; // 24시를 넘기는 시간 처리
    }

    let totalMinutes = endTotalMinutes - startTotalMinutes;
    totalMinutes += spareMinutes;

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00`;
  };

  const parkingTime = inTimeData && inTimeData.in_time ? getTime(inTimeData.in_time, parkingOutTime, 20) : '00:20:00';

  useEffect(() => {
    if (resInTimeState && resInTimeState.isRegister) {
      alert("안녕히가세요");
    }
  }, [resInTimeState, setResInTimeState, setResMemberResData]);

  const url_be = 'http://localhost:4000';
  // const url_be = 'http://15.164.140.169:4000';

  const fetchParkingData = () => {
    console.log('inTimeData', inTimeData);
    console.log('parkingOutTime', parkingOutTime);
    console.log('parkingTime', parkingTime);

    axios.post(`${url_be}/parking`, {
      member_number: memberResData.member_number,
      car_number: memberResData.car_number,
      out_time: parkingOutTime,
      parking_time: parkingTime
    }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        withCredentials: true,
        mode: 'no-cors'
      }
    })
      .then((res) => {
        if (res !== null && res !== "") {
          setResInTimeState({
            ...resInTimeState,
            isRegister: true
          });
          console.log("주차등록");
          window.location.reload();
        } else {
          console.log("주차등록실패");
          alert("다시 시도해주세요");
          window.location.reload();
        }
      })
      .then(() => {
        setResMemberResData({});
        setResInTimeState({});
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  };

  const fetchExitData = () => {
    axios.post(`${url_be}/exit`, {
      member_number: memberResData.member_number,
      out_time: parkingOutTime,
      parking_time: parkingTime
    }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        withCredentials: true,
        mode: 'no-cors'
      }
    })
      .then((res) => {
        if (res !== null && res !== "") {
          setResInTimeState({
            ...resInTimeState,
            isRegister: true
          });
          console.log("퇴실");
          window.location.reload();
        } else {
          console.log("퇴실실패");
          alert("다시 시도해주세요");
          window.location.reload();
        }
      })
      .then(() => {
        setResMemberResData({});
        setResInTimeState({});
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  };

  return (
    <div>
      {memberResData && memberResData.car_number ? (
        <button onClick={fetchParkingData}>주차</button>
      ) : (
        <button onClick={fetchExitData}>퇴실</button>
      )}
    </div>
  );
}

export default ParkingFetch;
