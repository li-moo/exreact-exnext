import React, { useEffect } from 'react'
import { memberState } from '../state/memberState';
import { useRecoilValue } from 'recoil';


function MemberAttendance() {

  const memberData = useRecoilValue(memberState);

  useEffect(() => {

  }, [memberData])

  console.log(memberData)



  return (
    <div>
      {memberData && Object.keys(memberData).length !== 0 && (
        <button>출석</button>
      )}
    </div>
  )
}

export default MemberAttendance