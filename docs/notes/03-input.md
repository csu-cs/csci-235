Input and Predefined Functions
==============================

*Chapter 3*

I/O: sequence of bytes (stream of bytes) from source to destination

-   Bytes are usually characters unless the program requires other types of information
-   *Stream*: sequence of characters (or bytes) from source to destination
-   *Input stream*: sequence of characters (or bytes) from an input device to the computer
-   *Output stream*: sequence of characters (or bytes) from the computer to an output device

Use `iostream` header file to receive data from the keyboard and send output to
the screen.

-   The header defines two stream types:
    -   `istream`: input stream
    -   `ostream`: output stream
-   It also declares commonly used stream objects (variables):
    -   `cin`: the standard input stream object
    -   `cout`: the standard output stream object
-   Do not redeclare `cin` or `cout` in your program; simply include the header
    `#include <iostream>` at the top of your file to use these objects.


Input
-----

`cin` and the *extraction operator*, `>>`

-   `>>` is a binary operator.

-   When extracting with `>>`, the operator first skips any leading whitespace
    (spaces, tabs, newlines) and then reads characters for the next token until
    the following whitespace. It therefore reads a single whitespace-delimited
    token.

-   Examples:
    -   Reading into a `string` with `>>` reads one word (stops at the first
        whitespace).
    -   Reading into a `char` with `>>` reads the next non-whitespace
        character.
    -   Reading into an `int` or `double` with `>>` parses a numeric token
        (digits and an optional sign/decimal) and converts it to the requested
        type.

| Data Type  | Valid Input                                                                                                                                                                |
|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `char`   | One printable character except the blank                                                                                                                                   |
| `int`    | An *integer* (whole number), possibly preceded by a `+` or `–` sign                                                                                                                             |
| `double` | A decimal number, possibly preceded by a `+` or `–` sign. If the actual data input is an integer, the input is converted to a decimal number with the decimal part equal to `0`. |

### Exploring User Input and Input Errors

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/jNtDc8Jct3M?rel=0&amp;showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe></div></div>

::: details Try the following code snippet from the video.

Try the following code snippets with:

-   letter
-   word
-   positive number
-   negative number
-   multi-digit number
-   decimal number
-   combination (with and without spaces)

<<< @/examples/03-inputTests.cpp
:::

If the user inputs a character or something erroneous like that – say, “Hello
there” for an integer, the system enters what is known as a “fail state”. The
integer is not set to anything, and the computer no longer takes in any other
input.

Predefined Functions
--------------------

-   Function (subprogram): set of instructions
    +   When activated, it accomplishes a task
-   main executes when a program is run
-   Other functions execute only when called
-   C++ includes a wealth of functions
    +   Predefined functions are organized as a collection of libraries accessible through header files.

To use `pow()` (which is short for power), include [cmath](https://en.cppreference.com/w/cpp/header/cmath).

-   Two numeric parameters
-   Syntax: `pow(x, y)` means $x^{y}$
    +   $x$ and $y$ are the arguments or parameters
-   In `pow(2, 3)`, the parameters are `2` and `3`

-   Note: `pow()` typically returns a floating-point value (for example,
    `double`). Using `pow()` for integer powers can introduce rounding or
    precision errors. If you need an exact integer result for small integer
    exponents, prefer repeated integer multiplication or cast/round the result
    carefully.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/E5BGdhDik6w?rel=0&amp;showinfo=0" title="Predefined Input Functions" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe></div>
</div>

### Input including Whitespace

The `cin.get()` function inputs the next character (including whitespace).

-   Stores in memory location indicated by its argument
-   `cin.get(varChar)`;
    +   `varChar` is a `char` variable
    +   is an argument (or parameter) of the function
-   `cin` and `get` are two separate identifiers separated by a dot
    +   The dot separates the input stream variable name from the member (e.g., function name).
    +   In C++, dot is the *member-access operator*.

The `getline()` function gets a whole line of user input including spaces as one string variable.

```C++
string userInput;
getline(cin, userInput); // read until a newline character.
```

In the previous code, if the user inputs: `Hello world !!!`, then `userInput` will contain, `"Hello world !!!"`.

Adding a third parameter changes `getline()` to stop at that character instead of a newline (`'\n'`). For example,

```C++
string userInput;
getline(cin, userInput, '$'); // read until a $ character.
```

### Ignoring Characters

The `cin.ignore()` function discards a portion of the input.

-   `cin.ignore(intExp, chExp);`
-   Ignore the next `intExp` characters unless we reach a `chExp`.
-   Often `'\n'` is a great value to pass to the second parameter to ignore everything on the current line of input.
-   Examples:
    +   `ignore(); // ignore the next character.`
    +   `ignore(100); // ignore the next 100 characters.`
    +   `ignore(INT_MAX, '\n'); // ignore until newline.`
        *   `INT_MAX` is a constant defined in the `climits` header that holds the maximum value for an integer.

#### Mixing `cin >>` and `getline()` and `cin.ignore()`

When you use `cin >>` to read a value (for example an `int`) the extraction
operator leaves the newline character on the input stream. If you call
`getline()` immediately after, it will read that leftover newline and return an
empty string. A common pattern is to discard the remainder of the line before
calling `getline()`.

```C++
#include <iostream>
#include <climits>
#include <string>
using namespace std;

int main() {
    int num;
    string line;
    cout << "Enter a number: ";
    cin >> num;                         // reads number but leaves '\n'
    cout << '\n';
    
    cin.ignore(INT_MAX, '\n');       // discard rest of the line including '\n'

    cout << "Enter a full line: ";
    getline(cin, line);               // now reads the user's full line
    cout << '\n'
    
    cout << "You entered: " << n << " and \"" << line << "\"\n";
    return 0;
}
```

This `ignore(INT_MAX, '\n')` call discards characters up to the next newline,
so the following `getline()` reads the intended input.

### Quick Reference: Input functions

| Function | Behavior | Short example |
|----------|----------|---------------|
| `getline(cin, s)` | Reads a whole line (up to `\n`) into `s` (a `string`) | `getline(cin, line);` |
| `cin.get(ch)` | Reads the next character (including whitespace) into `ch` (a `char`) | `cin.get(c);` |
| `cin >> var` | Extracts the next whitespace-delimited token and converts to `var`'s type | `cin >> number;` |
| `cin.ignore(n, ch)` | Discards up to `n` characters or until `ch` is found | `cin.ignore(INT_MAX, '\n');` |
| `cin.peek()` | Returns next character without removing it from stream | `int c = cin.peek();` |
| `cin.putback(ch)` | Puts a character back onto the stream so it will be read again | `cin.putback('x');` |


### Keeping Values within the Input Stream

The `cin.putback()` function places the previous character extracted by the get function from an input stream back to that stream.

The `cin.peek()` function returns the next character from the input stream.

-   It does **not** remove the character from that stream.

### Handling Input Errors

The `cin.clear()` function restores the input stream to a working state. Useful after an input error.

-   It does **not** remove the current contents of the stream. For that, `ignore()` with `clear()`.

Self-Check Questions
--------------------

1.  What is a stream of data?
2.  How would you read a string of data with spaces?

Practice Exercise
-----------------

Write a short program that:

- Prompts the user to enter their age (an integer) on one line.
- Then prompts the user to enter their full name (which may include spaces) on the next line.
- Finally, prints the name and age on one line.

Example interaction:

```
Enter age: 21
Enter full name: Ada Lovelace
Name: Ada Lovelace, Age: 21
```

Hint: use `cin >>` to read the number, then discard the rest of that line
before calling `getline()` to read the full name.
