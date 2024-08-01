import React, { useState, useEffect } from 'react';
import { memberState } from '../state/memberState';
import { inTimeState } from '../state/inTimeState';
import { useRecoilValue } from 'recoil';
import style from './LayLeft.module.css'

function MemberLeft() {

  const memberData = useRecoilValue(memberState);
  const inTimeData = useRecoilValue(inTimeState);

  useEffect(() => {

  }, [memberData])


  return (



    <>
    </>
  )
}

export default MemberLeft