import React from 'react'
import { useSelector } from 'react-redux'
import '../App.css'
function Top() {
  //구조분할 할당
  const { number, username, age } = useSelector(store => store)

  return (
    <div className="sub_container">
      <h1>Top</h1>
      번호 : {number}
      <hr />
      이름 : {username}
      <hr />
      나이 : {age}
    </div>
  )
}

export default Top
