export const emailUtilService = {
  getTimeToShow,
}

function getTimeToShow(timestamp) {
  const date = new Date(timestamp)
  if (_isToday(date)) return `${date.getHours()}:${date.getMinutes()}`
  if (_isThisYear(date)) return `${date.getDate()}/${date.getMonth() + 1}`
  return date.toDateString()
}

function _isToday(date) {
  const today = new Date()
  return date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
}

function _isThisYear(date) {
  const today = new Date()
  return date.getFullYear() === today.getFullYear()
}