function checkSpam(str) {
  // ваш код...
  if (!Boolean(str)) return false;
  return str.toLowerCase().includes('xxx') || str.toLowerCase().includes('1xbet');
}

// console.log(checkSpam(''));
// console.log(checkSpam('xxx '));
// console.log(checkSpam('fdxXx'));
// console.log(checkSpam('f1xbetx'));
// console.log(checkSpam('f1xbEtx'));
// console.log(checkSpam('Hello'));
