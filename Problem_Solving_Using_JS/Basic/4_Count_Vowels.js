const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
function countVowels(sentences) {
    let count = 0;
    let chars = Array.from(sentences);
    chars.forEach(char => {
        if (vowels.includes(char)) {
            count++;
        }
    });
}


console.log(countVowels("Hello World")); 