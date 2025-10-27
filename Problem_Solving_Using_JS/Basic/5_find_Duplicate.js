// find duplicates in an array

const arrayWithDuplicates = [1, 2, 3, 4, 5, 3, 2, 6, 7, 8, 1];

const duplicates = arrayWithDuplicates.filter((item, index) => {
    return arrayWithDuplicates.indexOf(item) !== index;

});

console.log(duplicates);