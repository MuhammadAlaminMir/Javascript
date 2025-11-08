### 1. What is a Regular Expression (Regex)?

You've got it perfectly: **a sequence of characters that forms a search pattern.**

Think of it as a super-charged "Find and Replace" on steroids. Instead of just finding the word "cat", you can find:

- "cat" only at the beginning of a line.
- "cat" or "dog" or "mouse".
- Any 3-letter word that starts with 'c' and ends with 't'.
- A valid email address format.
- A phone number in a specific format.

---

### 2. How to Create a Regular Expression

There are two ways to create a regex in JavaScript.

### A. Literal Syntax (Most Common)

You enclose the pattern between forward slashes `/`. This is the preferred method for static patterns.

```jsx
let pattern = /hello/;
```

### B. Constructor Function

Use the `RegExp` object. This is useful when your pattern is dynamic or comes from a variable.

```jsx
let dynamicWord = "hello";
let pattern = new RegExp(dynamicWord);
```

---

### 3. The Anatomy of a Regex: Modifiers, Patterns, and Quantifiers

A regex is built from three main parts, as you identified.

### A. Modifiers (The Flags)

Modifiers are placed after the closing slash and change the behavior of the entire search.

| Modifier | Name                 | What it Does                                                                                                                   |
| -------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **`i`**  | **Case-Insensitive** | Matches both upper and lower case letters. `/hello/i` matches "hello", "Hello", "HELLO".                                       |
| **`g`**  | **Global**           | Finds **all** matches in the string, not just the first one. Essential for `replace()`.                                        |
| **`m`**  | **Multiline**        | Changes the behavior of `^` and `$` so they match the start/end of a _line_ instead of just the start/end of the whole string. |

### B. Patterns (Character Classes)

These define what characters you are looking for.

| Pattern  | What it Matches                        | Example                                     |
| -------- | -------------------------------------- | ------------------------------------------- |
| `[abc]`  | Any single character in the brackets.  | `/[bt]ear/` matches "bear" and "tear".      |
| `[a-z]`  | Any character in a range.              | `/[a-z]/` matches any lowercase letter.     |
| `[0-9]`  | Any digit in a range.                  | `/[0-9]/` matches any single digit.         |
| `[^abc]` | Any character **NOT** in the brackets. | `/[^bt]ear/` matches "fear" but not "bear". |
| `(a      | b)`                                    | Grouping and OR. Matches `a` OR `b`.        |

### C. Metacharacters (The Special Characters)

These are characters with special meanings.

| Metacharacter | What it Matches                                                | Example                                                      |
| ------------- | -------------------------------------------------------------- | ------------------------------------------------------------ |
| `\\d`         | Any **d**igit (same as `[0-9]`).                               | `/\\d/` matches "3" in "a3c".                                |
| `\\D`         | Any non-digit.                                                 | `/\\D/` matches "a" in "a3c".                                |
| `\\s`         | Any **s**pace character (space, tab, newline).                 | `/\\s/` matches the space in "hello world".                  |
| `\\S`         | Any non-space character.                                       | `/\\S/` matches "h" in " hello".                             |
| `\\w`         | Any **w**ord character (alphanumeric `a-z, A-Z, 0-9` and `_`). | `/\\w/` matches "w" in "1-w".                                |
| `\\W`         | Any non-word character.                                        | `/\\W/` matches "-" in "1-w".                                |
| `.`           | Any character (except newline).                                | `/h.t/` matches "hat", "hot", "h8t".                         |
| `^`           | The **start** of a string.                                     | `/^The/` matches "The" in "The end" but not in "At The end". |
| `$`           | The **end** of a string.                                       | `/end$/` matches "end" in "The end" but not in "The ending". |

### D. Quantifiers (How Many)

These specify how many of the preceding character must appear.

| Quantifier | What it Means               | Example                                                |
| ---------- | --------------------------- | ------------------------------------------------------ |
| `n+`       | One or **more** of `n`.     | `/ho+/` matches "ho" in "hope" and "hooo" in "yahoo".  |
| `n*`       | Zero or **more** of `n`.    | `/ho*/` matches "h" in "honest" and "hooo" in "yahoo". |
| `n?`       | Zero or **one** of `n`.     | `/colou?r/` matches both "color" and "colour".         |
| `n{X}`     | Exactly **X** of `n`.       | `/\\d{3}/` matches "123" in "abc123xyz".               |
| `n{X,Y}`   | Between **X and Y** of `n`. | `/\\d{2,4}/` matches "12", "123", and "1234".          |

---

### 4. The Methods: How to Use Regex

This is where you apply your patterns. The methods are split into two groups.

### A. String Methods (Called on a string)

| Method                           | What it Does                                                                                           | Example                                                                                                                           |
| -------------------------------- | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| **`str.search(regex)`**          | Tests for a match and returns the **index** of the first match, or `-1` if no match is found.          | `"hello world".search(/world/); // 6`                                                                                             |
| **`str.replace(regex, newStr)`** | Finds a match and **replaces** it with a new string.                                                   | `"hello cat, cat".replace(/cat/, "dog"); // "hello dog, cat"`<br>`"hello cat, cat".replace(/cat/g, "dog"); // "hello dog, dog"`   |
| **`str.match(regex)`**           | Returns an array of **all matches** (if `g` flag is used) or a single detailed match (if no `g` flag). | `"1 cat, 2 dogs".match(/\\d+/g); // ["1", "2"]`<br>`"1 cat".match(/\\d+/); // ["1", index: 0, input: "1 cat", groups: undefined]` |

### B. RegExp Object Methods (Called on the regex)

| Method                | What it Does                                                                                                                        | Example                                                                                          |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| **`regex.test(str)`** | The simplest method. Tests for a match and returns **`true`** or **`false`**.                                                       | `/cat/.test("concatenate"); // true`                                                             |
| **`regex.exec(str)`** | The most powerful. Returns a detailed **match object** with info like the index and any captured groups, or **`null`** if no match. | With the `g` flag, it remembers its position and finds the _next_ match on each subsequent call. |

---

### Putting It All Together: A Practical Example

Let's create a regex to validate a simple US phone number format like `(123) 456-7890`.

```jsx
function validatePhoneNumber(phoneNumber) {
  // ^         - Start of the string
  // \\(\\d{3}\\) - A literal '(' followed by exactly 3 digits, followed by a literal ')'
  // \\s?       - An optional space
  // \\d{3}     - Exactly 3 digits
  // [-\\s]?    - An optional hyphen or space
  // \\d{4}     - Exactly 4 digits
  // $         - End of the string
  const phoneRegex = /^\\(\\d{3}\\)\\s?\\d{3}[-\\s]?\\d{4}$/;

  return phoneRegex.test(phoneNumber);
}

console.log(validatePhoneNumber("(123) 456-7890")); // true
console.log(validatePhoneNumber("(555)555-5555")); // true
console.log(validatePhoneNumber("123-456-7890")); // false (missing parentheses)
console.log(validatePhoneNumber("(123) 456 7890")); // true
```

### Pro Tip: Use a Tester!

Regular expressions can be complex. Use an online tool like [**RegExr**](https://regexr.com/) or [**Regex101**](https://regex101.com/) to build, test, and debug your patterns. They provide real-time feedback and explain what each part of your regex does.
