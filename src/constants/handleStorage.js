export const setTokenToLocalStorage = (token) => {
  localStorage.setItem('authToken', token)
}
export const removeTokenFromLocalStorage = () => {
  const res = localStorage.getItem('authToken')
  if (res) {
    localStorage.removeItem('authToken')
  }
}

export const getTokenFromLocalStorage = () => {
  return localStorage.getItem('authToken')
}
