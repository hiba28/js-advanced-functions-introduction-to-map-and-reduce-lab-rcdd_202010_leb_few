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

  return value
}
function reduceToAllTrue(sourceArray){
  return value
}
function reduceToAnyTrue(sourceArray){
  return value
}
