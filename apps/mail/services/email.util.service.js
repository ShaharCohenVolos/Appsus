export const emailUtilService = {
  getTimeToShow,
}

function getTimeToShow(timestamp) {
  const date = new Date(timestamp)
  if (_isToday(date)) return `${date.getHours()}:${date.getMinutes()}`
  return `${date.getDate()}/${date.getMonth() + 1}`

}

function _isToday(date) {
  const today = new Date()
  return date.getDate() == today.getDate() &&
    date.getMonth() == today.getMonth() &&
    date.getFullYear() == today.getFullYear()
}