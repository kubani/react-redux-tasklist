export const enterTask = (text) => {
  return {
  type: 'ENTER_TASK',
  payload: text
  }
}
export const submitTask = () => {
  return {
    type: 'SUBMIT_TASK'
  }
}
export const deleteTask = (id) => {
  return {
    type: 'DELETE_TASK',
    payload: id
  }
}