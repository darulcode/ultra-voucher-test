const arr = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];

function groupAnagrams(words) {
    const anagramGroups = {};

    function sortString(word) {
        const chars = [];
        for (let i = 0; i < word.length; i++) {
            chars.push(word[i]);
        }
        
        for (let i = 0; i < chars.length; i++) {
            for (let j = 0; j < chars.length - i - 1; j++) {
                if (chars[j] > chars[j + 1]) {
                    const temp = chars[j];
                    chars[j] = chars[j + 1];
                    chars[j + 1] = temp;
                }
            }
        }

        let sorted = '';
        for (let i = 0; i < chars.length; i++) {
            sorted += chars[i];
        }

        return sorted;
    }

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const sortedWord = sortString(word);

        if (!anagramGroups[sortedWord]) {
            anagramGroups[sortedWord] = [];
        }

        const currentGroup = anagramGroups[sortedWord];
        const newGroup = new Array(currentGroup.length + 1);
        for (let j = 0; j < currentGroup.length; j++) {
            newGroup[j] = currentGroup[j];
        }
        newGroup[currentGroup.length] = word;
        anagramGroups[sortedWord] = newGroup;
    }

    const result = [];
    for (let key in anagramGroups) {
        const group = anagramGroups[key];
        const newGroup = new Array(result.length + 1);
        for (let i = 0; i < result.length; i++) {
            newGroup[i] = result[i];
        }
        newGroup[result.length] = group;
        result.length = newGroup.length;
        for (let i = 0; i < newGroup.length; i++) {
            result[i] = newGroup[i];
        }
    }

    return result;
}

console.log(groupAnagrams(arr));
