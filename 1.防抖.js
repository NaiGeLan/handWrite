function debounce(func, delay){
  let timer = null
  const args = arguments
  const _this = this
  return function(){
    if(timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      func.apply(_this, args)
    }, delay)
  }
}
