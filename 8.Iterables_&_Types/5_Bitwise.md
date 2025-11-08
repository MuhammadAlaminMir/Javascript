### 1. The Foundation: 32-Bit Signed Integers

This is the most critical concept to understand. **When you use a bitwise operator in JavaScript, the number is first converted from its standard 64-bit floating-point format into a 32-bit signed integer.**

- **32 Bits:** This means the operation only sees and works with 32 bits (a sequence of 32 ones and zeros).
- **Signed:** This means the leftmost bit (the 32nd bit) is the **sign bit**.
    - If it's `0`, the number is positive.
    - If it's `1`, the number is negative.

This conversion is the key to understanding why some results, like `~5`, seem strange.

---

### 2. The Core Bitwise Logic Operators

These operators compare two numbers bit by bit.

### A. Bitwise AND (`&`)

Returns `1` only if **both** bits are `1`. Otherwise, it returns `0`.

**Example:** `5 & 3`

1. **Convert to 32-bit binary:**
    - `5` is `0000 0000 0000 0000 0000 0000 0000 0101`
    - `3` is `0000 0000 0000 0000 0000 0000 0000 0011`
2. **Compare bit by bit:**
    
    ```
      0000 ... 0101  (5)
    & 0000 ... 0011  (3)
    -----------------
      0000 ... 0001  (1)
    
    ```
    
3. **Result:** `5 & 3` is `1`.

### B. Bitwise OR (`|`)

Returns `1` if **at least one** of the bits is `1`.

**Example:** `5 | 3`

1. **Binary:**
    - `5` is `...0101`
    - `3` is `...0011`
2. **Compare:**
    
    ```
      0000 ... 0101  (5)
    | 0000 ... 0011  (3)
    -----------------
      0000 ... 0111  (7)
    
    ```
    
3. **Result:** `5 | 3` is `7`.

### C. Bitwise XOR (`^`) - "Exclusive OR"

Returns `1` if **exactly one** of the bits is `1` (but not both).

**Example:** `5 ^ 3`

1. **Binary:**
    - `5` is `...0101`
    - `3` is `...0011`
2. **Compare:**
    
    ```
      0000 ... 0101  (5)
    ^ 0000 ... 0011  (3)
    -----------------
      0000 ... 0110  (6)
    
    ```
    
3. **Result:** `5 ^ 3` is `6`.

### D. Bitwise NOT (`~`) - The "Flipping" Operator

This is a unary operator (it only takes one operand). It inverts every single bit: `0` becomes `1`, and `1` becomes `0`.

---

### 3. The Big Question: Why is `~5` equal to `6`?

This is the classic JavaScript bitwise puzzle. The answer lies in the 32-bit signed integer system and a concept called **Two's Complement**.

**The Rule:** A simple formula to remember is `~x = -(x + 1)`.
So, `~5 = -(5 + 1) = -6`.

**Let's see *why* this works with the bits:**

1. **Represent 5 in 32-bit binary:**`0000 0000 0000 0000 0000 0000 0000 0101`
2. **Flip all the bits using `~`:**`1111 1111 1111 1111 1111 1111 1111 1010`
3. **Interpret the result:** How do you read this new binary number? Since the leftmost bit is a `1`, it's a negative number. To find out *which* negative number, you use Two's Complement:
    - Invert all the bits again: `0000 ... 0101`
    - Add 1: `0000 ... 0110`
    - Convert to decimal: This is `6`.
    - Since the original sign bit was `1`, the final answer is **6**.

---

### 4. The Shift Operators

You are absolutely correct about their effect on multiplication and division.

### A. Left Shift (`<<`)

Shifts bits to the left and fills the empty spaces on the right with zeros. Each left shift is equivalent to multiplying by 2.

**Example:** `5 << 1` (Shift 5 left by 1)

- `5` is `...0101`
- Shift left by 1: `...1010`
- Convert to decimal: `...1010` is `10`.
- `5 << 1` is `10` (which is `5 * 2`).
- `5 << 2` would be `20` (`5 * 2 * 2`).

### B. Sign-Propagating Right Shift (`>>`)

Shifts bits to the right. The empty spaces on the left are filled with copies of the **original sign bit**. This is why it's "sign-propagating"—it preserves whether the number is positive or negative. Each right shift is equivalent to integer division by 2.

**Example:** `10 >> 1` (Shift 10 right by 1)

- `10` is `...1010`
- Shift right by 1 (sign bit is 0, so fill with 0): `...0101`
- Convert to decimal: `...0101` is `5`.
- `10 >> 1` is `5` (which is `10 / 2`).

### C. Zero-Fill Right Shift (`>>>`)

Shifts bits to the right, but **always fills the empty spaces on the left with zeros**, regardless of the original sign bit. This will turn a negative number into a large positive number.

**Example:** `-5 >>> 1`

- `5` in 32-bit binary is `1111 ... 1011`
- Shift right by 1, filling with zeros: `0111 ... 1101`
- This new number is a large positive integer (`2147483643`).

---

### 5. Number System Conversions

You are correct that `.toString(radix)` is the best way to do this in JavaScript.

### Decimal to Binary

```jsx
let num = 13;
let binaryString = num.toString(2);
console.log(binaryString); // "1101"

```

### Decimal to Hexadecimal (Base 16)

Hexadecimal is very common for representing colors (`#FF00FF`) and memory addresses.

```jsx
let num = 255;
let hexString = num.toString(16);
console.log(hexString); // "ff"

```

### Decimal to Octal (Base 8)

```jsx
let num = 64;
let octalString = num.toString(8);
console.log(octalString); // "100"

```

### Converting Back from a String to a Number

You use `parseInt(string, radix)` for this. The `radix` is crucial!

```jsx
let binaryString = "1101";
let num = parseInt(binaryString, 2);
console.log(num); // 13

let hexString = "ff";
let num2 = parseInt(hexString, 16);
console.log(num2); // 255

```

### Summary Table

| Operator | Name | Description | Example (`x = 5`) |
| --- | --- | --- | --- |
| `&` | AND | Sets each bit to 1 if both bits are 1. | `x & 1` -> `1` |
| ` | ` | OR | Sets each bit to 1 if one of the bits is 1. |
| `^` | XOR | Sets each bit to 1 if only one of the bits is 1. | `x ^ 1` -> `4` |
| `~` | NOT | Inverts all the bits. | `~x` -> `-6` |
| `<<` | Left Shift | Shifts left by filling zeros on the right. | `x << 1` -> `10` |
| `>>` | Right Shift | Shifts right by copying the leftmost (sign) bit. | `x >> 1` -> `2` |
| `>>>` | Zero-Fill Right Shift | Shifts right by filling zeros on the left. | `x >>> 1` -> `2` |

**When are bitwise operators actually used?**

- **Permissions:** Storing read, write, and execute permissions in a single number.
- **Color Manipulation:** Quickly extracting or modifying the red, green, or blue components of a color.
- **Performance:** In some low-level languages or specific algorithms, they can be faster than multiplication/division. (This is less of a concern in modern JS engines).