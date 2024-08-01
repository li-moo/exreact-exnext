import React, { useEffect, useState } from 'react';
import style from './MemberKeypad.module.css';
import MemberFetch from '../layout/fetch/MemberFetch';
import { memberNumberState } from '../state/memberNumberState';
import { useRecoilState } from 'recoil';

const MemberKeypad = () => {
  const [inputValue, setInputValue] = useState(''); // 현재 입력된 숫자를 저장하는 상태
  const [memberNumberData, setMemberNumberData] = useRecoilState(memberNumberState);

  useEffect(() => {

  }, [memberNumberData])

  const handleButtonClick = (buttonValue) => {
    if (buttonValue === 'C') {
      setInputValue(''); // Clear 버튼 클릭 시 숫자를 초기화
      setMemberNumberData(''); // Recoil 상태도 초기화
    } else if (buttonValue === '-') {
      setInputValue(inputValue.slice(0, -1)); // '-' 버튼 클릭 시 마지막 문자 제거
      setMemberNumberData(inputValue.slice(0, -1)); // Recoil 상태도 업데이트
    } else {
      const updatedValue = inputValue + buttonValue; // 새로운 값 생성
      setInputValue(updatedValue); // 숫자 버튼 클릭 시 현재 입력된 숫자에 숫자를 추가
      setMemberNumberData(updatedValue); // Recoil 상태도 업데이트
    }
  };


  console.log("키패드안", memberNumberData)


  return (
    <>
      {/* 클릭된 버튼의 숫자를 표시 */}
      <div className={style.box}>
        <div className={style.numberBox}>
          {inputValue}
        </div>
        <div className={style.inputLine}></div>
        <div className={style.keypad}>
          <div className={style.flexKeypad}>
            {/* 1부터 3까지의 버튼 */}
            {[1, 2, 3].map((buttonValue) => (
              <button
                key={buttonValue}
                className={style.button}
                onClick={() => handleButtonClick(buttonValue)}
              >
                {buttonValue}
              </button>
            ))}
          </div>
          <div className={style.flexKeypad}>
            {/* 4부터 6까지의 버튼 */}
            {[4, 5, 6].map((buttonValue) => (
              <button
                key={buttonValue}
                className={style.button}
                onClick={() => handleButtonClick(buttonValue)}
              >
                {buttonValue}
              </button>
            ))}
          </div>
          <div className={style.flexKeypad}>
            {/* 7부터 9까지의 버튼 */}
            {[7, 8, 9].map((buttonValue) => (
              <button
                key={buttonValue}
                className={style.button}
                onClick={() => handleButtonClick(buttonValue)}
              >
                {buttonValue}
              </button>
            ))}
          </div>
          <div className={style.flexKeypadV2}>
            {/* C, 0, - 버튼 */}
            {['C', 0, '-'].map((buttonValue) => (
              <button
                key={buttonValue}
                className={style.button}
                onClick={() => handleButtonClick(buttonValue)}
              >
                {buttonValue}
              </button>
            ))}
          </div>
        </div >
      </div>
      <MemberFetch inputValue={inputValue} />
    </>
  );
}

export default MemberKeypad;