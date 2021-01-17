/**
 * problem source: https://leetcode.com/problems/count-sorted-vowel-strings/
 * @param {number} n - length of string
 * @return {number}
 */
const countVowelStrings = function(n: number) {
  const dp = [];
  function countVowelStringHelper(n: number, currentDepth: number, vowel: number) {
    if (currentDepth === n) return 1;
    let variations = 0;
    for (let i = vowel; i < 5; i++) {
      const variation = dp[currentDepth + 1] || [];
      if (typeof variation[i] === "undefined") {
        variation[i] = countVowelStringHelper(n, currentDepth + 1, i);
      }
      variations += variation[i];
    }
    return variations;
  }

  return countVowelStringHelper(n, 0, 0);
};

console.log(`Count Sorted Vowel Strings: ---> ${countVowelStrings(2)}`);
