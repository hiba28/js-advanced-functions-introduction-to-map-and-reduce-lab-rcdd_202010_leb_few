// Your code here
function mapToNegativize(sourceArray){
  let newArray = []
  for (let i = 0; i < sourceArray.length; i++) {
    newArray[i] = sourceArray[i] * -1
  }
  return newArray
}
function mapToNoChange(sourceArray){
  let newArray = []
  sourceArray.forEach(elem =>{
    newArray.push(elem)
  })
  return newArray
}
function mapToDouble(sourceArray){
  let newArray = []
  for (let i = 0; i < sourceArray.length; i++) {
    newArray[i] = sourceArray[i]*2
  }
  return newArray
}
function mapToSquare(sourceArray){
  let newArray = []
  sourceArray.forEach((elem) =>
    newArray.push(elem**2)
  )
  return newArray
}
function reduceToTotal(sourceArray, startingPoint){
  if(sourceArray.length === 0){
     startingPoint = 0
   }
  else {
    sourceArray.forEach((elem) =>{
      startingPoint += elem
    })
  }
  return startingPoint
}

function reduceToAllTrue(sourceArray){
  for (let i = 0; i < sourceArray.length; i++) {
    sourceArray[i] ? return true || return false
  }
}
function reduceToAnyTrue(sourceArray){
  for (let i = 0; i < sourceArray.length; i++) {
    !sourceArray[i] ? return false || return true
  }
}
