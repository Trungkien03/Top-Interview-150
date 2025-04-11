 function lengthOfLongestSubstring(s: string): number {
    // create a map that holding the character and its position number
    const charMap = new Map<string, number>();

    //create a variables that holding the number need to return
    let maxLength = 0;

    // holding the index of the character
    let start = 0;

    for (let end = 0; end < s.length; end++) {
      const currentChar = s[end];
      if (charMap.has(currentChar) && charMap.get(currentChar)! >= start) {
        start = charMap.get(currentChar)! + 1;
      }
      charMap.set(currentChar, end);
      maxLength = Math.max(maxLength, end - start + 1);

    }

    return maxLength;
  }
