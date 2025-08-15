Creating and Understanding Simple C++ Programs
==============================================

*Chapter 2*

Basic Elements of C++
---------------------

This video is part 1 of 3 in an overview of chapter 2. Each part is about 30 minutes.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/LCK213jTsEM?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe></div>
</div>

-   *Computer program*: A sequence of statements whose objective is to accomplish a task.
-   *Programming*: The process of planning and creating a program.
-   Real-world analogy: a recipe for cooking.


::: code-group


```cpp [Example C++ Program]
/*
 * Given the length and width of a rectangle, this program
 * computes and outputs the perimeter and area of the rectangle.
 *
 * by D.S. Malik
 */
#include <iostream>
using namespace std;

int main()
{
    // Variables
    double length;
    double width;
    double area;
    double perimeter;

    // Output Statement
    cout << "Computes and shows a rectangle's  perimeter and area." << endl;

    // Assignment Statements
    length = 6.0;
    width = 4.0;
    perimeter = 2 * (length + width);
    area = length * width;

    // Output Statements
    cout << "Length = " << length << endl;
    cout << "Width = " << width << endl;
    cout << "Perimeter = " << perimeter << endl;
    cout << "Area = " << area << endl;

    return 0; // Return statement
}
```

```txt [Runtime Output]
Program to compute and show the parameter and area of a rectangle.
Length = 6
Width = 4
Perimeter = 20
Area = 24
```
:::

Watch the video to learn about the above program, including comments, variables, assignment statements, output statements, and the return statement.

-   *Variable*: a memory location whose contents can be changed.
-   *Function*: collection of statements; when executed, accomplishes something
    +   May be predefined or standard
-   *Syntax* rules: rules that specify which statements (instructions) are legal or valid
-   *Semantic* rules: determine the meaning of the instructions
-   *Programming language*: a set of rules, symbols, and special words

### Comments

Comments are for the reader, not the compiler.

-   Two types:
    1.  Single line:  begin with `//`  
        ```
        // This is a C++ program.
        // Welcome to C++ Programming.
        ```
    2.  Multiple line: enclosed between `/*` and `*/`  
        ```
        /*
           You can include comments that can
           occupy several lines.
         */
        ```
-   Always put a comment at the top of your source code with program description and you name.



### Special Symbols

-   *Token*: the smallest individual unit of a program written in any language
-   C++ tokens include special symbols, word symbols, and identifiers
-   Special symbols in C++ include: `+`, `-`, `*`, `/`, `.`, `;`, `?`, `,`, `<=`, `!=`, `==`, `>=`

### Reserved Words (Keywords)

-   Cannot be redefined within program
-   Cannot be used for anything other than their intended use
-   Examples: `int`, `float`, `double`, `char`, `const`, `void`, `return`

### Identifiers

-   *Identifier*: the name of something that appears in a program
    +   Consists of letters, digits, and the underscore character (`_`)
    +   Must begin with a letter or underscore
-   C++ is case sensitive. `NUMBER` is not the same as `number`.
-   Two predefined identifiers are `cout` and `cin` 
-   Unlike reserved words, predefined identifiers may be redefined, but it is not a good idea.
-   Legal identifiers in C++ include `first`, `conversion`, `payRate`.
-   Illegal identifier examples:  
    | Illegal Identifier  |     Description                                       |
    |---------------------|-------------------------------------------------------|
    | `employee Salary`   | There can be no space between employee and Salary.    |
    | `hello!`            | The exclamation mark cannot be used in an identifier. |
    | `one+two`           | The symbol + cannot be used in an identifier.         |
    | `2nd`               | An identifier cannot begin with a digit.              |


### Whitespace

-   Every C++ program contains whitespaces, including blanks, tabs, and newline characters.
-   Used to separate special symbols, reserved words, and identifiers.
-   Proper utilization of whitespaces is important.
    +   Can be used to make the program more readable.


### Data Types

*Data type*: a set of values together with a set of operations.

C++ data types fall into three categories:

1.  *Simple data types*, which also have 3 categories:
    1.  Integral: integers (numbers without a decimal). Can be categorized further into signed or unsigned. *Unsigned* means does not have a - or + sign (cannot be negative).  
        | Data   Type    | Values                               | Storage (in bytes)    |
        |----------------|--------------------------------------|-----------------------|
        | `bool`         | `true` and `false`                   | 1                     |
        | `char`         | –128   to 127                        | 1                     |
        | `int`          | –2,147,483,648   to 2,147,483,647    | 4                     |
    2.  Floating-point: decimal numbers. C++ uses scientific notation to represent real numbers (floating-point notation)  
        |     Decimal         |       Scientific     |     C++ Floating-Point    |
        |---------------------|:--------------------:|:----------------------------|
        |       75.924        |   $7.5924 × 10^1$    |      7.5924E1               |
        |        0.18         |      $1.8 × 10^{-1}$ |      1.8000E-1              |
        |        0.0000453    |     $4.53 × 10^{-5}$ |      4.5300E-5              |
        |       -1.482        |   $-1.482 × 10^0$    |     -1.482E0                |
        |     7800.0          |      $7.8 × 10^3$    |      7.8000E3               |

        | Data   Type    | Values                               | Storage (in bytes)    |
        |----------------|--------------------------------------|-----------------------|
        | `float`        | -$3.4×10^{38}$ to $3.4×10^{38}$      | 4                     |
        | `double`       | –$1.7×10^{308}$ to $1.7×10^{308}$    | 8                     |

        Minimum and maximum values of data types are system dependent.

        -   Precision: maximum number of significant digits
            *   *float* values are called single precision
            *   *double* values are called double precision

    3.  [Enumeration types](07-enums): user-defined data types

2.  [Structured data types](09-structs-intro): a collection of a fixed number of components (called members), that are accessed by name.
3.  *Pointers* - Not covered in the course.

### Variables

To declare a variable, must specify the data type it will store.

-   Syntax:  `dataType identifier;`
-   Examples:
    ```
    int counter;
    double interestRate;
    char grade;
    ```
-   Assignment statements: *variable = expression*  
    `interestRate = 0.05;`


Simple Example Program: Area of a Circe
---------------------------------------

Before watching, make sure you have installed the required software in [Getting Started - Software Setup](/notes/01-getting-started#software-setup).

Follow along with this video to create and run the demonstrated program. On your own, add to it the functionality to calculate and display the circumference.

::: warning Important
When following along with the video below, type `codium` in the command line instead of `code`. Unlike the video, we are using *VSCodium* instead of Visual Studio Code.
:::

::: tip Important
This video describes using *VSCode*. Instead of what is shown, open your code in *VSCodium* by typing `codium circleArea.cpp` instead of `code circleArea.cpp`.
:::

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/fcEiJ0EVtmY?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe></div>
</div>