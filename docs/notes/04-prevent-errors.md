Readability and Error Checking
==============================

*Chapter 4*

As you learn more, you programs will contain more features. As you programs grow in size, tracking down errors becomes more challenging. We will focus on two ways to simplify this process.

1. Increasing the readability of your code to make problems stand out. Readability is accomplished by:
   -  Simplifying the code.
   -  Formatting the code consistently.
2. Adding error checking to the code.

Program Style and Form (revisited): Indentation
-----------------------------------------------

-   A properly indented program:
    -   Helps you spot and fix errors quickly
    -   Shows the natural grouping of statements
-   Insert a blank line between naturally separate statements.
-   Two commonly used styles for placing braces
    -   On a line by themselves
    -   Or the left brace is placed after the expression, and the right brace is on a line by itself
-   Any statement(s) between braces must be indented.
    -   cases in a switch statement may be exceptions to this rule (depending on preference).
-   Any line that is a continuation of the previous line (i.e., part of 1 statement) must be indented.
    -   Statements end with either a semicolon (`;`) or a closing curly brace (`}`).

Comparison of floating-point numbers for equality
-------------------------------------------------

::: warning

Careful When Comparing Floating-Point Numbers (i.e., of type `double` or `float`)!

:::

::: details Compile and run this code to see a surprising result.

<<< @/examples/04-fuzzyCompare.cpp

:::


Notice that the results are somewhat unexpected. This is because of rounding errors. Adjust the precision of `cout`, until you can see that the variable does not actually hold the number 1.

Then take a look at this video by Computerphile to see an explanation.

<div class="youtube">
<div><iframe width="560" height="315" src="https://www.youtube.com/embed/PZRI1IfStY0?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
</div>

May not behave as you would expect due to the computer's inability to represent
most fractions exactly.

-   Example:
    
    ```cpp
    (1 == 3.0/7.0 + 2.0/7.0 + 2.0/7.0) // evaluates to false
    ```

    +   Why? Truncation.  
        $3.0/7.0 + 2.0/7.0 + 2.0/7.0 == 0.99999999999999989$

The solution is to use a tolerance value:

Example: `if (abs(x - y) < 0.000001)…`

The Conditional Operator (`?:`)
-------------------------------

-   Shorthand if…then…else.
-   This is a *ternary operator*, taking 3 arguments
-   *expression1* `?` expressionIfTrue `:` *expressionIfFalse*`;`
-   `int max = (num1 >= num2) ? num1 : num2;`
    +   If `num1 >= num2`, then `max = num1`, else `max = num2`.

This operator can be used to simplify some code by removing if…else statements. It also can be over used, making code more difficult to read.

The `assert()` Function
-----------------------

The assert statement allows you to include error checking withing your program. Let your program check if the values you are storing are what is expected.

-   Certain types of errors are very difficult to catch
    -   Example: division by zero
-   The `assert()` function: useful in stopping program execution when certain elusive errors occur.
-   If expression evaluates to true, the next statement executes
-   If expression evaluates to false, the program terminates and indicates where in the program the error occurred
-   To use `assert()`, include `cassert` header file
-   `assert()` is useful for enforcing programming constraints during program development.
-   After developing and testing a program, remove or disable assert statements.
-   The preprocessor directive `#define NDEBUG` must be placed before the directive.  
    `#include <cassert>` to disable the assert statement.

Self-Check Questions
--------------------

1.  Give some examples of if…else statements that would be more readable using the conditional operator.
2.  Use `assert()` in an assignment problem to check for possible errors.
