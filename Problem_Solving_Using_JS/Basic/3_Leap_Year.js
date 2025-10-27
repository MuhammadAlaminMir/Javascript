// find out if a year is leap year or not

function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true; // Divisible by 400, so it's a leap year
            } else {
                return false; // Divisible by 100 but not by 400, so not a leap year
            }

        } else {
            return true; // Divisible by 4 but not by 100, so it's a leap year
        }
    }
}