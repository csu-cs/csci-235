Output
======

*Chapter 3*

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

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/rEZcgoMfRKg?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe></div>
</div>


Self-Check Questions
--------------------

1.  What library can be used to make our command-line output look so pretty?
2.  The manipulator `setprecsion()` only applies to what type of numbers?
3.  All the manipulators discussed apply to all the input that follows it, except for _____.
