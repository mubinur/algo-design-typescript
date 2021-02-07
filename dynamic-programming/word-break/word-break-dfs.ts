/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let memo = {};
    const wordDictSet = new Set(wordDict);
    let wordBreakHelper = (text) => {
        if (wordDictSet.has(text)) return true;
        if (text in memo) return false;
        else {
            for (let i = 1; i < text.length; i++){
                if (wordBreakHelper(text.slice(0, i)) && wordBreakHelper(text.slice(i))) return true;    
                else {
                    memo[text] = false;
                }
            }
            
        }
        
        return false;
    }
    return wordBreakHelper(s);
};

