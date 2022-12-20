export const lsSetItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const lsGetItem = key => {
  return JSON.parse(localStorage.getItem(key))
}
