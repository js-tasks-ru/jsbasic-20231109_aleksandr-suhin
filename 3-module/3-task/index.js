function camelize(str) {
  // ваш код...
  return str
    .split('')
    .map((item, index, array) => array[index-1]==='-' ? item.toUpperCase() : item)
    .filter(item => item!=='-')
    .join('');
}

// console.log(camelize('background-color') == 'backgroundColor');
// console.log(camelize('list-style-image') == 'listStyleImage');
// console.log(camelize('-webkit-transition') == 'WebkitTransition');