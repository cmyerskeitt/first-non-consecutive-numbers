function firstNonConsecutive (arr) {
    let count = arr[0]
    for (let i = 0; i < arr.length; i++){
      if (arr[i] == count){
        count ++
      } else if (arr[i] != count) {
          return arr[i]
        }
      }
    return null
}