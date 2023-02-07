function fixParentheses(str) {
  let left = 0,
    right = 0;
  [...str].map((el) => (el === '(' ? right++ : right === 0 ? left++ : right--));

  return '('.repeat(left) + str + ')'.repeat(right);
}

// function fixParentheses(str) {
//   const orig = str;

//   while (str.includes('()')) {
//     str = str.replace(/\(\)/g, '');
//   }

//   const amtOpeningParensNeeded = (str.match(/\)/g) || []).length;
//   const amtClosingParensNeeded = (str.match(/\(/g) || []).length;

//   return (
//     '('.repeat(amtOpeningParensNeeded) +
//     orig +
//     ')'.repeat(amtClosingParensNeeded)
//   );
// }