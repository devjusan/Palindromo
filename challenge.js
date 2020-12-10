function isPalindrome(text) {
  const convertText = text.toUpperCase()
  for (var i = 0; i < convertText.length / 2; i++)
    if (convertText[i] != convertText[convertText.length - i - 1]) {
      return false;
    } else {
      return true;
    }
}

console.log(isPalindrome('rAdaR'));
