import React from 'react'
import { useDispatch } from 'react-redux'
import '../App.css'
import { decrease, increase } from '../store'
function Bottom() {
  //구조분할 할당

  const dispatch = useDispatch()

  return (
    <div className="sub_container">
      <h1>Bottom</h1>
      <button
        onClick={() => {
          dispatch(increase('서혜민'))
        }}
      >
        증가
      </button>

      <button
        onClick={() => {
          dispatch(decrease('김동원'))
        }}
      >
        감소
      </button>
    </div>
  )
}

export default Bottom
