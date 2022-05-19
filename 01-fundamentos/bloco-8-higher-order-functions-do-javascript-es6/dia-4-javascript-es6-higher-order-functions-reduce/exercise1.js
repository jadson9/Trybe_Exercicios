const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten(matrix) {
    let array = []
     matrix.forEach(element => element.reduce((contador, item) => array.push(item), 0));
     return array
  }

  console.log(flatten(arrays))