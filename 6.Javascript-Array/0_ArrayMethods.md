### **Group 1: Accessor & Representation Methods (Non-Mutating)**

These methods do not change the original array. They return a representation of it or a new, smaller version.

### **`length` (Property)**

- **What it does:** Gets or sets the number of elements in an array.
- **Mutates Original?** Getting the length is **No**. Setting the length is **Yes**.
- **Returns:** The number of elements (when getting).

```jsx
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits.length); // Output: 3

// You can also use it to TRIM an array
fruits.length = 2;
console.log(fruits); // Output: [ "Apple", "Banana" ] (Original is mutated)

// Or to empty it completely
fruits.length = 0;
console.log(fruits); // Output: [] (Original is mutated)

```

### **`toString()`**

- **What it does:** Converts an array to a string of comma-separated values.
- **Mutates Original?:** **No**.
- **Returns:** A `string`.

```jsx
let fruits = ["Apple", "Banana", "Cherry"];
let str = fruits.toString();

console.log(str);        // Output: "Apple,Banana,Cherry"
console.log(fruits);     // Output: [ "Apple", "Banana", "Cherry" ] (Original is unchanged)

```

### **`join(separator)`**

- **What it does:** Similar to `toString()`, but you can specify the separator.
- **Mutates Original?:** **No**.
- **Returns:** A `string`.

```jsx
let fruits = ["Apple", "Banana", "Cherry"];

// Default behavior (same as toString)
let str1 = fruits.join();
console.log(str1); // Output: "Apple,Banana,Cherry"

// With a custom separator
let str2 = fruits.join(" * ");
console.log(str2); // Output: "Apple * Banana * Cherry"

console.log(fruits); // Output: [ "Apple", "Banana", "Cherry" ] (Original is unchanged)

```

### **`slice(start, end)`**

- **What it does:** Extracts a section of an array and returns a *new* array.
- **Mutates Original?:** **No**.
- **Returns:** A new array containing the extracted elements.
- **Parameters:**
    - `start`: The index to begin extraction (inclusive).
    - `end`: The index to end extraction (exclusive). If omitted, it extracts to the end of the array.

```jsx
let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// Slice from index 1 up to (but not including) 3
let citrus = fruits.slice(1, 3);
console.log(citrus); // Output: [ "Banana", "Cherry" ]

// Slice from index 2 to the end
let fromCherry = fruits.slice(2);
console.log(fromCherry); // Output: [ "Cherry", "Date", "Elderberry" ]

console.log(fruits); // Output: [ "Apple", "Banana", "Cherry", "Date", "Elderberry" ] (Original is unchanged)

```

---

### **Group 2: Mutator Methods (Adding/Removing from Ends)**

These methods change the original array by adding or removing elements from the start or end.

### **`push(element1, element2, ...)`**

- **What it does:** Adds one or more elements to the **end** of an array.
- **Mutates Original?:** **Yes**.
- **Returns:** The new `length` of the array.

```jsx
let fruits = ["Apple", "Banana"];
let newLength = fruits.push("Cherry");

console.log(fruits);       // Output: [ "Apple", "Banana", "Cherry" ] (Original is mutated)
console.log(newLength);    // Output: 3

```

### **`pop()`**

- **What it does:** Removes the **last** element from an array.
- **Mutates Original?:** **Yes**.
- **Returns:** The element that was removed.

```jsx
let fruits = ["Apple", "Banana", "Cherry"];
let removedElement = fruits.pop();

console.log(fruits);         // Output: [ "Apple", "Banana" ] (Original is mutated)
console.log(removedElement); // Output: "Cherry"

```

### **`unshift(element1, element2, ...)`**

- **What it does:** Adds one or more elements to the **beginning** of an array.
- **Mutates Original?:** **Yes**.
- **Returns:** The new `length` of the array.

```jsx
let fruits = ["Banana", "Cherry"];
let newLength = fruits.unshift("Apple");

console.log(fruits);       // Output: [ "Apple", "Banana", "Cherry" ] (Original is mutated)
console.log(newLength);    // Output: 3

```

### **`shift()`**

- **What it does:** Removes the **first** element from an array.
- **Mutates Original?:** **Yes**.
- **Returns:** The element that was removed.

```jsx
let fruits = ["Apple", "Banana", "Cherry"];
let removedElement = fruits.shift();

console.log(fruits);         // Output: [ "Banana", "Cherry" ] (Original is mutated)
console.log(removedElement); // Output: "Apple"

```

---

### **Group 3: Mutator Methods (In-Place Modification)**

These methods directly modify the array's contents in more complex ways.

### **Changing an Element by Index**

- **What it does:** Replaces the value at a specific index.
- **Mutates Original?:** **Yes**.
- **Returns:** The new value that was assigned.

```jsx
let fruits = ["Apple", "Banana", "Cherry"];
fruits[1] = "Blueberry";

console.log(fruits); // Output: [ "Apple", "Blueberry", "Cherry" ] (Original is mutated)

```

### **`splice(start, deleteCount, item1, item2, ...)`**

- **What it does:** The "Swiss Army knife" of arrays. It can add, remove, and replace elements anywhere in the array.
- **Mutates Original?:** **Yes**.
- **Returns:** A new array containing the elements that were **removed**.

```jsx
let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// --- How to REMOVE elements using splice ---
// Remove 2 elements starting at index 2
let removed = fruits.splice(2, 2);
console.log(fruits);   // Output: [ "Apple", "Banana", "Elderberry" ] (Original is mutated)
console.log(removed);  // Output: [ "Cherry", "Date" ]

// --- How to ADD elements using splice ---
// (Start with a fresh array)
let fruits2 = ["Apple", "Banana", "Elderberry"];
// At index 2, remove 0 elements, and add "Cherry" and "Date"
fruits2.splice(2, 0, "Cherry", "Date");
console.log(fruits2); // Output: [ "Apple", "Banana", "Cherry", "Date", "Elderberry" ]

// --- How to REPLACE elements using splice ---
// (Start with a fresh array)
let fruits3 = ["Apple", "Rotten-Banana", "Cherry"];
// At index 1, remove 1 element, and add "Banana"
fruits3.splice(1, 1, "Banana");
console.log(fruits3); // Output: [ "Apple", "Banana", "Cherry" ]

```

### **`delete` operator**

- **What it does:** Deletes a property from an object (and an array is an object). It removes the value at a specific index but leaves an `undefined` hole.
- **Mutates Original?:** **Yes**, but in a way that's usually undesirable for arrays.
- **Returns:** `true` if deletion is successful, otherwise `false`.

```jsx
let fruits = ["Apple", "Banana", "Cherry"];
delete fruits[1]; // Use delete instead of splice

console.log(fruits);      // Output: [ "Apple", <1 empty item>, "Cherry" ]
console.log(fruits[1]);   // Output: undefined
console.log(fruits.length); // Output: 3 (The length is NOT changed)
// This is why splice is preferred for removing elements.

```

---

### **Group 4: Combination Methods (Non-Mutating)**

These methods create a new array by combining existing arrays or values.

### **`concat(array1, array2, ..., element1, element2, ...)`**

- **What it does:** Merges two or more arrays and/or values into a **new array**.
- **Mutates Original?:** **No**.
- **Returns:** A new array.

```jsx
let arr1 = ["Apple", "Banana"];
let arr2 = ["Cherry", "Date"];

// Concat two arrays
let allFruits = arr1.concat(arr2);
console.log(allFruits); // Output: [ "Apple", "Banana", "Cherry", "Date" ]
console.log(arr1);      // Output: [ "Apple", "Banana" ] (Original is unchanged)

// Concat multiple arrays
let arr3 = ["Elderberry"];
let moreFruits = arr1.concat(arr2, arr3);
console.log(moreFruits); // Output: [ "Apple", "Banana", "Cherry", "Date", "Elderberry" ]

// Concat arrays with individual elements
let finalFruits = arr1.concat("Fig", "Grape");
console.log(finalFruits); // Output: [ "Apple", "Banana", "Fig", "Grape" ]

```