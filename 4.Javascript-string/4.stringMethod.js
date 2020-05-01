//Javascript string method

var a = 'I am '
var b = 'alamin '

var c = a.concat(b);//concat method
//console.log(c);

var d = c.substr(5,6)//substring method = cut a part in a string
//console.log(d)

console.log(c.charAt(5))//charAt method = for find a character

console.log(c.startsWith('I'));//startsWith = check the start

console.log(c.endsWith(' '))// endsWith = check the end

console.log('abc'.toUpperCase()) //.toUpperCase = convert to uppercase

console.log(a.toUpperCase()) //.toUpperCase = convert to uppercase

console.log('abc'.toLowerCase()) //.toLowerCase = convert to Lowercase

console.log('      alamin   '.trim())//.trim() = for removing extra space

console.log(c.split(' '))//split = for convert a string to a array

var f = 'amer soner  '
console.log(f.indexOf("s"))

console.log(f.search('soner'))

console.log(f.slice(5, 10))

console.log(f.replace('  ', ' bangla'))