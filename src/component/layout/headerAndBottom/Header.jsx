import React from 'react'
import style from './Header.module.css'

function Header() {
  return (
    <>
      <div className={style.logo}>
        <img src="https://file.woondoc.com/gym/cover/hAyjCZmYKew9pUKpohp7vmthsdvFLzem_1592267552_4271662.jpg" alt="wannagym.logo" />
        <h1>WANNAGYM</h1>
      </div>
    </>
  )
}

export default Header