export function truncateString(str, maxLength) {
  if (str.length <= maxLength) {
    return str
  } else {
    return str.slice(0, maxLength - 3) + '...'
  }
}

export function capitalizeFirstLetter(inputString) {
  if (!inputString) {
    return inputString
  }

  return inputString.charAt(0).toUpperCase() + inputString.slice(1)
}
