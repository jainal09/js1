let NotPalidromeException = {};

try {
  let checkPalidrome = (stringToCheck) => {
    let myArray = stringToCheck.split("");
    let newArray = [...myArray]; // copy of array

    const arrayIterate = function (elem, i) {
      let reverseElem = newArray[newArray.length - 1 - i];
      console.log(elem, reverseElem);
      if (reverseElem != elem) {
        NotPalidromeException.val1 = elem;
        NotPalidromeException.val2 = reverseElem;
        throw NotPalidromeException;
      }
    };

    myArray.forEach(arrayIterate);
    return "IsPalindrome";
  };

  console.log(checkPalidrome("test"));
} catch (e) {
  if (e == NotPalidromeException) {
    console.log(e);
  }
}
