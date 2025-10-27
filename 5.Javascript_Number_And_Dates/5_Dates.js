const now = new Date("2024-02-20T18:30:45.123Z"); // 6:30pm UTC

console.log(now.getFullYear()); // 2025
console.log(now.getMonth()); // 1 (February, because it's 0-indexed!)
console.log(now.getDate()); // 20
console.log(now.getDay()); // 2 (Tuesday, because 0=Sunday, 1=Monday...)
console.log(now.getHours()); // 10 (because I'm in UTC-8, 18-8=10)
console.log(now.getMinutes()); // 30
console.log(now.getSeconds()); // 45
console.log(now.getMilliseconds()); // 123
