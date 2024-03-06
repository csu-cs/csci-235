---
title: C++ Style Guide
lastUpdated: true
---

C++ Style Guide
===============

Each coding assignment must follow this standard. Using one style consistently throughout the source code lets us focus on other (more important) issues.

There’s no one, right way to write code. But there are definitely a lot of wrong (or, at least, bad) ways. Certainly it is possible to write “correct” code that violates the guidelines below. Even so, we ask that you adhere to these conventions for CSCI 235 to motivate consistency and readability in your personal coding style.

Companies typically adopt their own, company-wide conventions for style. Learning to carefully obey a style guide, and writing code with a group of other developers where the style is consistent among them, are valuable job skills.

------------------------------------------------------------------------

[[toc]]

## General Guidelines

*  All code should compile with the `-Wextra` parameter without warnings.
*  **No** non-constant global variables.

## File Names

All C++ source code files need to end in .cpp. Additionally, they should only contain letters, numbers, and underscores (no spaces) and they should **NOT** start with a number (start filenames with a letter).

The following are good filenames:

*   `launchSequence.cpp`
*   `self_destuct.cpp`
*   `Assignment02_P1.cpp`

The following are BAD filenames:

*   `launch sequence.cpp` (contains a space)
*   `self_destuct` (does not have the .cpp extension)
*   `02Problem1.cpp` (starts with a number)
*   `Assignment02.1.cpp` (contains a period before `.cpp`)
*   `AutoTuner.cpp.cpp` (contains a period before the extension)


## Comment

Use the `/* */` syntax for multi-line comments and
`//` for single-line comments.

### Program Description

Atop each file, include a commented header with a brief description of
the program or file and the programmer\'s name. Write the description in
your own words.

For example:
```cpp
/* 
 * Simulates the count to launch an Apollo rocket. The countdown starts
 * at 10 and continues down to 0 (takeoff). This includes the main-
 * engine start at T-6.6 seconds.
 *
 * by Dr. Hayes
 */
```

### Commenting Blocks of Code

Comments should be present throughout your code. They make code more
readable, not only for others like your instructor but also for you.

Good example:
```cpp
const double TEMP_RATIO = 5.0 / 9.0; // ratio of Celsius to Fahrenheit

// convert Fahrenheit to Celsius
double celsius = TEMP_RATIO * (fahr - 32.0);
```

Place comments their own line(s), preceding whatever you are explaining,
or on the same line (if it is very brief), but **not** or next line. In
other words, **don't** do this:

Bad example:
```cpp
double celsius = TEMP_RATIO * (fahr - 32.0);
// convert Fahrenheit to Celsius
```

*How much and how often to comment?* Commenting too little is bad.
Commenting too much is bad. Commenting every few lines of code (i.e.,
interesting blocks) that actually do something is a decent rule of
thumb. Put a comment above every code block (e.g., above if statements,
loops, etc.). Also, try to write comments that explain the meaning of
non-obvious code and describe why you implemented a block in a certain
way. Keep comments short (try to keep them to 1 line each, unless you
are explaining something complex).

### Control-Structure Comments

Each control structure (if...else, switch statement, loop, etc.) should be directly preceded by a comment.

Good example:
```cpp
// If we find a lowercase letter, capitalize it.
if (letter >= 'a' && letter <= 'z')
{
    letter += 'A' - 'a';
}
```

### Function Prototype Comments

Each function created by you (except `main()`) should have an comment above its declaration (prototype). More on this in the [Functions section](#functions).

Comments need to be in the bodies of every multi-line function, not just `main()`. 

### Commenting Out Code

When working on code, programmers tend to "comment out" lines of code to
exclude them from the program without deleting them. It's fine to do
this while you work on your program, but it is considered bad style to
turn in a file with blocks of code commented out. If the program is done
and such code is not needed, just remove it.

## Whitespace and Indentation

Use a single space between operators and their operands:

::: code-group

```cpp [Good Example]
count += (point1 - point2) * unit / time + random();
```

```cpp [Bad Example]
count+=(point1-point2)*unit/time+random();  // [!code error]
```
:::

### Indentation

Indent your code with one hard tabs (or four spaces) at a time to make
clear which blocks of code are inside of others.

::: warning
If you use your keyboard's Tab key to do so, be sure that your text editor is configured to convert tabs (`'\t'`) to an actual tab (i.e. a hard tab) or four spaces, else your code may not print or display properly on someone else's computer. The tab key renders differently in different editors.
:::

::: tip
In Visual Studio Code, take a look at the blue status bar at the bottom. To the right, you will see \"Spaces: \" or \"Tab-Size\", which indicates if you are indenting with & number of spaces or with tabs receptively.
:::


-   Increase your indentation by one increment on each curly brace `{`,
    and decrease it once on each closing brace `}`.

-   Place a line break after every `{` .

Here are examples of well-indented code and bad indentation:

::: code-group

```cpp [Good Example]
int main()
{
    int val = 0;

    if (val > 0)
    {
        cout << "The value is positive." << endl;
    }
    else
    {
        // Display 3 stars
        for (int iter = 0; iter < 3; iter++)
        {
            cout << "*";
        }
    }
    return 0;
}
```

```cpp  [Bad Example]
int main()
{
int val = 0;

if (xval > 0)
{
cout << "The value is positive." << endl;
}
else
{
// Display 3 stars
for (int iter = 0; iter < 3; iter++)
{
cout << "*";
}
}
return 0;
}
```
:::

::: tip
**Visual Studio Code** will
automatically re-indent select code if you press `Shift + Alt + F`
on Windows or `Shift + Option + F` on macOS.\
**Xcode** will automatically re-indent selected code if you press
`Control + I` (or choose **Editor \> Structure \> Re-Indent** from
the file menu).
:::

### New Lines

Always put a newline after a semicolon (we'll talk about one exception
to the rule when we get to for loops).

Bad:

```cpp
int age; double weight, height; string name;  // [!code error]
cout << "Enter your age: "; cin >> age; // Get the user's age  // [!code error]
```

Good:

```cpp
int age;

// Get the user's age
cout << "Enter your age: ";
cin >> age;
```

Do not place more than one statement on the same line.

Nothing goes on the same line after an opening curly brace (`{`).\
Noting goes on the same line before a closing curly brace (`}`).

Bad:

```cpp
int main()
{   cout << "Hi" << endl;  // [!code error]
    return 0; }  // [!code error]
```

Good:

```cpp
int main()
{
    cout << "Hi" << endl;
    return 0;
}
```

### Long Lines

If a statement is really long (more than 80 characters), split the statement into multiple lines, with each subsequent line indented.

This is bad:

```cpp
cout << "This is a really long line " << 5 * 10 / denom << " and more text." << endl;  // [!code error]
```

This is how the previous line should look:

```cpp
cout << "This is a really long line " 
    << 5 * 10 / denom 
    << " and more text." << endl;
```

Good example of a function prototype:

```cpp
void reallyLongFunctionName(int with, int lots,
    int of, int parameters);
```

::: tip
To add a line to Visual Studio Code indicating the 80 character mark, go to **File \> Preferences \> User/Workspace settings** Add this line to your custom settings on the right: `"editor.rulers": [80],`
:::

## Variables and Constants

### Identifiers

In programming languages, names you give to things are called
*identifiers*.

-   Identifiers should be meaningful, such as `numberOfGames`.
    Identifiers like `herp` and `derp` are funny, but not helpful.

-   A single letter cannot be a descriptive identifier. Avoid even the
    commonly used loop variables like `i` and `j`. Good alternatives are
    `index` or `iter`.

    Bad example names:

    ```cpp
    int x, y, i, clr lineW;  // [!code error]
    ```

    Good example names:

    ```cpp
    int xCoord, yCoord, index, color,  lineWidth;
    ```

-   Unless constant or a new data type (see below), all identifiers
    should start with a lowercase letter and each subsequent word should
    start with a capital letter (i,e., camel case).

    Bad examples:

    ```cpp
    int Time;  // Should start with a lowercase letter. // [!code error]
    double percent_increase;  // Should be camel case. // [!code error]
    string FirstName;  // should start with a lowercase latter. // [!code error]
    ```

    Good examples:

    ```cpp
    int time;
    double percentIncrease;
    string firstName;
    ```

#### Naming Constants

Constants should be named in all caps with each word separated by an
underscore (`_`).

Good examples:

```cpp
const double PI = 3.14159;
const double INCH_TO_CM = 2.54;
const double CM_TO_INCH = 1.0 / INCH_TO_CM;
const int MAX_SCORE = 1000;
```

#### Variable Declaration and Assignment

-   Declare variables in the smallest scope possible.

-   Choose appropriate data types for your variables. If a given
    variable can store only integers, give it type `int` rather than
    `double`. If a variable stores characters, make it a `char` instead
    of an `int`.

-   Never use `0` and `1` with `bool` variables. `true` and `false`
    exist for a reason.

-   Initialize variables at declaration when appropriate:

    ```cpp
    int count = 0;
    ```

    In other words, don't do this:

    ```cpp
    int count;  // [!code error]
    ...
    count = 0;
    ```

-   If a variable's value doesn't change throughout the code, it should
    be declared as a constant and be named in all caps `LIKE_THIS`:

    ```cpp
    const int NUMBER_OF_PROJECTS = 5;
    ```

#### Global Variables and \"Magic\" Numbers

-   Non-constant global variables (those declared outside of functions,
    including `main()`) must never be used. They lead to unintentional
    bugs and often caused by poor design. Instead, you should be passing
    variables via functions.

-   Global constants are acceptable when needed.

-   [**Magic numbers**](https://thedailywtf.com/articles/Magic-Number-7 "More on Magic Numbers.") are seemingly random constants within your program,
    numbers whose appearance in code isn't clear from the outset. You
    should avoid magic numbers at all costs. Fortunately, C++ provides
    us with an easy way to do so by storing such numbers in constants.
    So, don't write:

    ```cpp
    double area = 3.141592 * radius * radius;  // Magic number! // [!code error]
    ```

    Instead, store the number in a constant:

    ```cpp
    const double PI = 3.141592;
    double area = PI * radius * radius;
    ```

    However, don't just restate the value with your identifiers:

    ```cpp
    const int TWO = 2;  // [!code error]
    ...
    if (n % TWO)
    ...
    ```

    This adds no meaning to your code.

    The reason is that we want to make it clear both to the compiler and
    to readers of the program that this quantity can't be changed. The
    compiler can often produce better machine code with that knowledge.
    And the reader gets a more precise understanding of the program's
    behavior. Moreover, if the programmer (you!) decides to ever change
    that value, he or she will have do that just in one place!

## Conditionals

-   Always use curly braces (even when not necessary) and use consistent
    brace style. In other words, do this:

    ```cpp
    if (val > 0)
    {
        cout << val << " is positive." << endl;
    }
    ```

    But avoid doing this:

    ```cpp
    if (val > 0)
        cout << val << " is positive." << endl;  // [!code error]
    ```
    and

    ```cpp
    if (val > 0)
        {  // [!code error]
        cout << val << " is positive." << endl;
        }  // [!code error]
    ```

-   Don't ever test whether a `bool` value is `==` or `!=` to `true` or
    `false`. Don't do

    ```cpp
    if (isValid == true)  // [!code error]
    ```

    or

    ```cpp
    if (isValid == false)  // [!code error]
    ```

    Do check if a variable is `true` or `false` as in:

    ```cpp
    if (isValid)
    ```

    or

    ```cpp
    if (!isValid)
    ```

-   If you have an if/else statement that returns a `bool` value based
    on a test, such as this one:

    ```cpp
    if (score1 == score2)
    {
        return true;
    }
    else
    {
        return false;
    }
    ```

    simplify it with a single statement that just directly returns the
    test's result:

    ```cpp
    return score1 == score2;
    ```

### Variable Assignments Within Conditionals

Having assignments within conditional expressions for loops or if statements can lead to code that is difficult to read, understand, and maintain.

This is bad:

```cpp
int num;
if (cin >> cnumh)  // [!code error]
{
    //...
}
```

Good example:
```cpp
char num;
cin >> num;
if (num)
{
    //...
}
```

There are several reasons why it's considered bad practice:

1.   **Readability**: Code should be written in a way that is easy to understand for other developers (including your future self). Placing assignments within conditional expressions can make the code harder to read because it adds complexity to the logic flow.

2.   **Potential Bugs**: Complex conditional expressions increase the likelihood of introducing bugs into the code. It's easy to make mistakes when mixing assignment and condition evaluation, leading to unexpected behavior.

3.   **Debugging Difficulty**: When an assignment and a condition are mixed, it can be challenging to debug the code because you're not sure whether the assignment is intended to be part of the condition or not.

4.   **Violation of Single Responsibility Principle**: Assignments inside conditionals often indicate that a single line of code is trying to do too much. It's generally better to separate concerns and keep each line of code focused on a single task.

5.   **Maintainability**: Code that is difficult to read and understand is also difficult to maintain. Other developers (or even yourself in the future) may have a hard time modifying or extending the code if assignments and conditions are intertwined.

6.   **Potential Side Effects**: Assignments within conditional expressions can lead to unintentional side effects. For example, if the assignment is part of a loop condition, it may modify loop variables unexpectedly, leading to unexpected behavior.

Instead of mixing assignments and conditions, it's better to separate them to improve readability, maintainability, and reduce the likelihood of introducing bugs. Write clear and concise code that clearly expresses the intent of each line, making it easier for others to understand and maintain.

## Switches

Indent your switch statements like this:

```cpp
switch (val)
{
    case -1:
        cout << "value is -1" << endl;
        break;
    case 1:
        cout << "value is 1" << endl;
        break;
    default:
        cout << "value is neither -1 nor 1" << endl;
        break;
}
```

The case statements are each on their own lines with a new line the colon. Everything statement within a case statement is indented one more.

## Loops

-   Whenever you a counting variable, use more specific names than `i`,
    `j`, ....

    ```cpp
    for (int rowIter = 0; rowIter < rowCount; rowIter++)
    {
        for (int colIter = 0; colIter < colCount; colIter++)
        {
            // do something
        }
    }
    ```

    If you find yourself in need of more than three levels of nested
    loops, you should reconsider your design!

-   A `for` loop should look like the one above, while a `while` loop
    should resemble this one below:

    ```cpp
    while (num < 0)
    {
        cin >> num;
    }
    ```

-   Avoid `break` statements and never use `continue` statements in
    loops. Loops should be controlled by a condition and should
    terminate when that condition is met. Generally, `break` should only
    be used inside of a `switch`.

-   Never write endless loops, such as `while (true)`.

-   Use a `for` loop when the number of repetitions is known (definite);
    use a `while` loop when the number of repetitions is unknown
    (indefinite).

    ```cpp
    // repeat exactly size times
    for (int iter = 0; iter < size; iter++)
    {
        // do something
    }

    double value;

    // repeat until a valid number is entered.
    cin >> value;
    while (!cin)
    {
        // Handle input error and get next input here.
    }
    ```

## Functions

Like non-constant variables, function names should be camel case (i.e.,
start with a lowercase letter and each subsequent word should start with
a capital letter).

Value-returning functions should be named after what they return and
void functions after what they do.

Good examples:

```cpp
bool isPrime(int num);

void displayStats (double average, int median, int min, int max);

void spinSpinner (int numberOfTurns);
```

Always include function prototypes before the `main()`
function and function definitions below `main()`

Every function should except `main()` should have
function prototype that is declared before `main()`.
Function definitions should be defined below `main()`.

### Function Prototype Comments

Each function **prototype** should be directly preceded by a comment
describing what the function does and how to use (call) it. The
`main()`{.language-cpp} function does not need a comment directly above
it because it is not a prototype and the comment at the top of the file
already explains what the program does. Of course, you should always
include comments inside of the function body.

Good example:

```cpp
/**
 * A function that draws a spinning animation
 * @param numberOfTurns the number of times the spinner spins.
 */
void spinSpinner(int numberOfTurns);
```

#### Function Decomposition

-   Often you might find yourself writing similar blocks of code.
    Utilize functions to decompose your program and minimize redundancy
    in code.

    ```cpp
    cout << "What is your first name?" << endl; // [!code error]
    cin >> firstName; // [!code error]
    ...
    cout << "What is your last name?" << endl; // [!code error]
    cin >> lastName; // [!code error]
    ...
    cout << "What is your email?" << endl; // [!code error]
    cin >> email; // [!code error]
    ```

-   Instead create and use helper functions that incorporate the common
    functionality:

    ```cpp
    firstName = getInfo("What is your first name?");
    ...
    lastName = getInfo("What is your last name?");
    ...
    email = getInfo("What is your email?");
    ...
    string getInfo(const string& prompt)
    {
            cout << prompt << endl;
            string input;
            cin >> input;
            return input;
    }
    ```

-   If you have a single function that is very long, break it apart into
    smaller sub-functions. The definition of "very long" is vague, but
    let's say a function longer than 40-50 lines is pushing it. If you
    try to describe the function's purpose and find yourself using the
    word "and" a lot, that probably means the function does too many
    things and should be split into sub-functions.

## Enums and Structs

-   Use `PascalCase` for enum, struct, and class names. (Notice how the
    first letter is capitalized.)
-   A comment should directly precede each enum or struct declaration
    describing the purpose of the data type.
-   The values an enum should named in all caps with each word separated
    by an underscore (`_`). See the standard for [naming constants](#naming-constants).

## Platform Specific Code

All programs should compile and run on any system. We want our code to
be \"portable\", meaning able to be compiled and run on multiple
systems.

### Avoid System Calls

A system call is when your program calls another program on the system.
In C++ this is commonly done through a function called `system()`. These
calls are tempting, because they provide additional features to your
program without having to learn the programming to do them.

Bad:
```cpp
system("PAUSE"); // Windows only way to pause execution.  // [!code error]
system("CLS"); // Windows only way to clear the screen.  // [!code error]
```

Good example to pause execution using C++
```cpp
cout << "Press enter to continue . . .";
cin.ignore(INT_MAX, '\n'); // ignore everything typed until user hits enter.
```

### Non-standard libraries / includes

Avoid the user of operating system specific libraries. We want code that compiles on all operating systems.

Example of Bad Code:
```cpp
#include <windows.h>  // [!code error]
```

Use of following standard libraries is encourage:

*   [cassert](https://en.cppreference.com/w/cpp/header/cassert)
*   [cctype](https://en.cppreference.com/w/cpp/header/cctype)
*   [cfloat](https://en.cppreference.com/w/cpp/header/cfloat)
*   [chrono](https://en.cppreference.com/w/cpp/chrono)
*   [climits](https://en.cppreference.com/w/cpp/header/climits)
*   [cmath](https://en.cppreference.com/w/cpp/header/cmath)
*   [cstddef](https://en.cppreference.com/w/cpp/header/cstddef)
*   [cstdlib](https://en.cppreference.com/w/cpp/header/cstdlib)
*   [cstring](https://en.cppreference.com/w/cpp/header/cstring)
*   [ctime](https://en.cppreference.com/w/cpp/header/ctime)
*   [fstream](https://en.cppreference.com/w/cpp/header/fstream)
*   [string](https://en.cppreference.com/w/cpp/header/string)
*   [iostream](https://en.cppreference.com/w/cpp/header/iostream)
*   [iomanip](https://en.cppreference.com/w/cpp/header/iomanip)
*   [ostream](https://en.cppreference.com/w/cpp/header/ostream)
*   [random](https://en.cppreference.com/w/cpp/header/random)
*   [span](https://en.cppreference.com/w/cpp/header/span)
*   [thread](https://en.cppreference.com/w/cpp/header/thread)

## Other

-   C++ contains an `exit()` function that immediately exits your entire
    program. You should **never** call this function in this course.
    Your program should always exit naturally by reaching the end of
    your `main` function and returning.
-   Never use `goto` to go to another line of code. Instead, make use of
    functions and loops!
-   Never use `stringstream` for this course.
