// 日期补零
export const padDate = value => {
  return value < 10 ? `0${value}` : value
}

// 格式化年月
export const parseToYearAndMonth = str => {
  const date = str ? new Date(str) : new Date()
  return {
    year: date.getFullYear() + '',
    month: padDate(date.getMonth() + 1)
  }
}

// 格式化年月日
export const formatDate = str => {
  const date = str ? new Date(str) : new Date()
  return `${date.getFullYear()}/${padDate(date.getMonth() + 1)}/${padDate(date.getDate())}`
}
