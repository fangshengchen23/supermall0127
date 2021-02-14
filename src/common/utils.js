export function debounce(func, delay=200) {
  let timer = null
  return function(...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    },delay)
  }
}

// 正则表达式是干什么的？ 用于字符串的匹配（难，规则太多）
export function formatDate(date, fmt) {
  // 1.获取年份
  // y+ -> 1个或多个y
  // y* -> 0个或多个y
  // y? -> 0个或1个y

  // 2019
  // yy -> 19
  // yyyy -> 2019
  // y -> 9
  // yyu -> 019

  // yyyy-MM-dd
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1,(date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  // 获取月、日、时、分、秒
  let o = {
    'M+': date.getMonth() +1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1,(RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero (str) {
  return ('00' + str).substr(str.length);
}
