function ucFirst(str) {
  // ваш код...
  if (!Boolean(str)) return '';
  if (str.legth === 1) return str.toUpperCase();
  return str[0].toUpperCase() + str.slice(1);
}

// ucFirst('');
// ucFirst('v');
// ucFirst('vasya');