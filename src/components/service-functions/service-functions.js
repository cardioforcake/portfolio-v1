function scrollRight(curr, setCurr, history, route){
  setCurr(curr+1)
  history.push(route)
}

function scrollLeft(curr, setCurr, history, route){
  setCurr(curr-1)
  history.push(route)
}


function navigate(route, history){
  history.push(route)
}

export {scrollRight, scrollLeft, navigate}