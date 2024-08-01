import React, { useState } from 'react';

function LayLeftMember({ memberArray }) {

  console.log('memberArray: ' + memberArray)



  return (
    <>
      <div>멤버데이터</div>

      {memberArray && memberArray.map((member) => (
        <div key={member && member.id}>
          <p>name: {member && member.name}</p>
        </div>
      ))}
    </>

  );
}

export default LayLeftMember;
