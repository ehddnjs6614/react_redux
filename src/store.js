//액션
export const increase = (username, age) => ({
  type: 'INCREMENT',
  payload: username,
  age: age,
})
export const decrease = username => ({
  type: 'DECREMENT',
  payload: username,
})

//상태 초기값

const initstate = {
  username: '김동원',
  number: 1,
  age: 29,
}

//리듀서
//액션의 결과를 걸러내는 놈
const reducer = (state = initstate, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        number: state.number + 1,
        username: action.payload,
        age: state.age + 1,
      }
    //return 되면 그걸 호출한쪽에서 받는게아니라 return 되는 순간 ui 변경
    case 'DECREMENT':
      return {
        number: state.number - 1,
        username: action.payload,
        age: state.age - 1,
      }
    default:
      return state
  }
}
console.log(reducer)

export default reducer
