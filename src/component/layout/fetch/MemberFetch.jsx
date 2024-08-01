import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { memberState } from '../../state/memberState';
import { memberNumberState } from '../../state/memberNumberState';
import { useRecoilState, useRecoilValueLoadable, useRecoilValue } from 'recoil';

export function LayRightFetch({ inputValue }) {
  const [memberData, setMemberData] = useRecoilState(memberState);
  const memberNumberData = useRecoilValue(memberNumberState);

  // const initialMemberDataLoadable = useRecoilValueLoadable(memberState);
  // useEffect(() => {
  //   if (initialMemberDataLoadable.state === 'hasValue' && initialMemberDataLoadable.contents === null) {
  //     setMemberData(null);
  //   }
  // }, [initialMemberDataLoadable.state, initialMemberDataLoadable.contents, setMemberData]);

  console.log('memberNumberData:::', memberNumberData)

  useEffect(() => {
    setMemberData(null)

    if (inputValue.length >= 4) {
      fetchMemberData();
    }
    if (inputValue.length === 3) {
      setMemberData({}); // inputValue의 길이가 3일 때, 빈 객체로 Recoil 상태를 업데이트
    }
  }, [inputValue, setMemberData]);

  // period 자르는 함수 2024-08-16T15:00:00.000Z 출력되는 date를 
  // 10번째 글자수로 잘라서 2024-08-16으로 출력
  const slicePeriod = (date) => {
    return date.substring(0, 10);
  };

  const url_be = 'http://localhost:4000';
  // const url_be = 'http://15.164.140.169:4000';

  const fetchMemberData = () => {

    const memberNumber = memberNumberData;
    console.log('fetch안--', memberNumberData);
    axios.get(`${url_be}/member`, {
      params: {
        member_number: memberNumber
      }
    })
      .then((res) => {
        const member = res.data;
        // 회원의 두 번째 멤버십 기간
        const secondMembershipPeriod = member.second_membership_period;
        // 현재 날짜와 두 번째 멤버십 기간 비교
        const currentDate = new Date();
        const todayString = currentDate.toISOString().split('T')[0]; // YYYY-MM-DD
        const isPastDate = secondMembershipPeriod < todayString;

        // inProgress 값 설정
        const inProgress = !isPastDate;
        console.log('멤버 데이터가 뭔데?', member);

        setMemberData({
          ...memberData,
          id: member.id,
          name: member.name,
          member_number: member.member_number,
          car_number: member.car_number,
          member_img: member.member_img,
          isParking: false,
          first_membership_period: slicePeriod(member.first_membership_period),
          second_membership_period: slicePeriod(member.second_membership_period),
          inProgress: inProgress,
          in_time: member.in_time
        });
      })
      .then(() => {
        console.log(memberData);
        console.log("::있어라", memberData.first_membership_period);

      })
      .catch((err) => {
        console.log("member data 오류:", err);
        setMemberData({});
      })
  };

  console.log("11", memberData);

  return (
    <div>
    </div>

  );
}

export default LayRightFetch;
