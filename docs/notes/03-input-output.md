Input and Output (Part 1)
=========================

*Chapter 3*

I/O: sequence of bytes (stream of bytes) from source to destination

-   Bytes are usually characters unless program requires other types of information
-   Stream: sequence of characters (or bytes) from source to destination
-   Input stream: sequence of characters (or bytes) from an input device to the computer
-   Output stream: sequence of characters (or bytes) from the computer to an output device

Use `iostream` header file to receive data from keyboard and send output to the
screen.

-   Contains definitions of two data **types** (variable types like `int` or `string`):
    -   `istream`: input stream
    -   `ostream`: output stream
-   Has two variables:
    -   `cin`: stands for common input
    -   `cout`: stands for common output
-   Variable declaration is like:   
    `istream cin;`  
    `ostream cout;`
-   To use `cin` and `cout`, the preprocessor directive `#include <iostream>` must be added to the top.


Input
-----

`cin` and the *extraction operator*, `>>`

-   `>>` is a binary operator
-   When scanning, `>>` skips all whitespace.
    +   Blanks and certain nonprintable characters
-   `>>` distinguishes between character 2 and number 2 by the right-side operand of `>>`.
-   If type `char` or `int` (or `double`), the 2 is treated as a character or as a number 2.

| Data Type  | Valid Input                                                                                                                                                                |
|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `char`   | One printable character except the blank                                                                                                                                   |
| `int`    | An *integer* (whole number), possibly preceded by a `+` or `–` sign                                                                                                                             |
| `double` | A decimal number, possibly preceded by a `+` or `–` sign. If the actual data input is an integer, the input is converted to a decimal number with the decimal part equal to `0`. |

### Exploring User Input and Input Errors

<div style="max-width: 853px; margin: 0 auto; padding: 0;">
<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe width="853" height="480" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/jNtDc8Jct3M?rel=0&amp;showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe></div></div>

Try the following code snippets with:

-   letter
-   word
-   positive number
-   negative number
-   multi-digit number
-   decimal number
-   combination (with and without spaces)

```cpp
// Variables to receive user input
char ch1 = ' '; // 1 character
char ch2 = ' '; // a second character
int int1 = -8888; // whole number
double dub1 = -999.999; // decimal (floating point) number

// Get input from the user
cout << "Input a char, floating-point number, char, and int: ";
cin >> ch1 >> dub1;
//cin.clear();
cin >> ch2 >> int1;

// Display the values for each variable
cout << endl;
cout << "    Double: " << dub1 << '\n'
    << "Characters: '" << ch1 << "', '" << ch2 << "'\n"
    << "   Integer: " << int1 << '\n' << endl;
```

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

To use `pow()` (which is short for power), include `cmath`.

-   Two numeric parameters
-   Syntax: `pow(x, y)` means $x^{y}$
    +   $x$ and $y$ are the arguments or parameters
-   In `pow(2, 3)`, the parameters are `2` and `3`

The `cin.get()` function inputs next character (including whitespace).

-   Stores in memory location indicated by its argument
-   `cin.get(varChar)`;
    +   `varChar` is a `char` variable
    +   is an argument (or parameter) of the function
-   `cin` and `get` are two separate identifiers separated by a dot
    +   The dot separates the input stream variable name from the member (e.g., function name).
    +   In C++, dot is the *member-access operator*.

The `getline()` function gets a whole line of user input including spaces as one string variable.

-   `string userIntput;`  
    `getline(cin, userInput)`;
-   In the previous code, if the user inputs: `Hello world !!!`, then `userInput` will contain, `"Hello world !!!"`.

The `cin.ignore()` function discards a portion of the input.

-   `cin.ignore(intExp, chExp);`
-   Ignore the next intExp characters unless we reach a chExp.
-   Often `'\n'` is a great value to pass to the second parameter to ignore everything on the current line of input.
-   Examples:
    +   `ignore(); // ignore the next character.`
    +   `ignore(100); // ignore the next 100 characters.`
    +   `ignore(INT_MAX, '\n'); // ignore until newline.`
        *   `INT_MAX` is a constant defined in the `climits` header that holds the maximum value for an integer.

The `cin.putback()` function places previous character extracted by the get function from an input stream back to that stream.

The `cin.peek()` function returns next character from the input stream.

-   It does **not** remove the character from that stream.

The `cin.clear()` function restores the input stream to a working state. Useful after an input error.

-   It does **not** remove the current contents of the stream. For that, `ignore()` with `clear()`.

<div style="max-width: 853px; margin: 0 auto 1em auto; padding: 0;">
<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe width="853" height="480" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube-nocookie.com/embed/E5BGdhDik6w?rel=0&amp;showinfo=0" title="Predefined Input Functions" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe></div>
</div>

Formatting Output with Stream Manipulators
------------------------------------------

-   `cout <<` *expression or manipulator* `<<` *expression or manipulator* `<< ...`;
-   Expression is evaluated
-   Value is printed
-   Manipulator is used to format the output
    +   Example: `endl`;

`setprecision(n)` outputs decimal numbers with up to n decimal places.

`fixed` outputs floating-point numbers in a fixed decimal format.

`scientific` outputs floating-point numbers in scientific format.

`showpoint` forces output to show the decimal point and trailing zeros.

`setw(n)` outputs the value of an expression in a specified number of columns.

-   If number of columns exceeds the number of columns required by the expression.
    +   The output of the expression is right-justified.
    +   Unused columns to the left are filled with spaces

`setfill(ch)` fills unused columns with a character.

-   Example:  
    `cout << setfill('#');`

Additional formatting tools that give you more control over your output:

-   `left` and `right` manipulators
-   `unsetf` manipulator

There are two types of manipulators: (1) with parameters (*parametrized*) and (2) without parameters (*nonparametrized*)

-   *Parameterized* manipulators require the `iomanip` header (e.g., `setprecision`, `setw`, and `setfill`).

-   Nonparametrized manipulators only require the `iostream` header (e.g., `endl`, `fixed`, `showpoint`, `left`, and `flush`)

<div style="max-width: 853px; margin: 0 auto 1em auto; padding: 0;">
<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe width="853" height="480" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/rEZcgoMfRKg?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe></div>
</div>


Self-Check Questions
--------------------

1.  What is a stream of data?
2.  What library makes our command line output look so pretty?
