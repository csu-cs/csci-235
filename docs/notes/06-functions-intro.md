Introduction to Function
========================

*Chapter 6*

Important Prerequisite Concepts to this Chapter
-----------------------------------------------

-   The compiler (e.g. g++), translates to C++ code into an executable (machine code the computer can run). A program only needs to be compiled once and then it can be run many times.
-   When you declare a variable, you are creating a place in memory to hold a specific type of value (e.g., `double`, `int`, `string`). Also, the variable type indicates what the variable is evaluated as when used in an expression.

Introduction
------------

-   Functions are like miniature programs that can be combined to form larger programs.
-   They allow complicated programs to be divided into manageable pieces.
-   In C++, a value-returning function is analogous to a function in algebra in that it (1) has a name, (2) can accept input values called parameters, and (3) does some computation.
-   Some of the predefined mathematical functions are from the `cmath` header:
    +   `sqrt(num) // returns the square root of the argument num`
    +   `pow(base, exponent) // returns base raised to the power exponent.`
    +   `floor(num) // returns round down value`
-   A couple of predefined character functions from the `cctype` header are `tolower()` and `toupper()`, which accept a single `char` and convert it to lowercase or uppercase, respectively.

Using Value-Returning Functions
-------------------------------

To *call* (i.e use) these functions you must:

-   Include the appropriate header file in your program using the include statement.
-   Know the following items:
    +   The **name** of the function
    +   The number of **parameters** (if any) and the type of each parameter
    +   The **data type** of the value returned: called the type of the function
-   The value returned by a value-returning function can be (1) stored
 in a variable for further calculation, (2) used in some calculation, or (3) output directly.
    +   i.e., a value-returning function may be used in an assignment or in an
        output statement.

Defining Your Own Functions
---------------------------

In this video, I mention that the function `larger()` could be written more succinctly. See if you can figure out how to write it without the local variable named `max` (hint: use two return statements). Then see if you can reduce it to just a return statement using the [conditional operator (`?:`)](04-prevent-errors#the-conditional-operator).

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/cuCE-jpJPpk?rel=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
</div>

To define your own function, you need to following components.

-   **Heading** (or **function header**): the first line of the function
    +   Example: `int abs(int number)`
-   **Formal parameter**: variable declared in the heading
    +   Example: number
-   **Actual parameter**: variable or expression listed in a call to a function
    +   Example: `result = pow(base, power);`

### Syntax of a Function Definition

```cpp
returnType functionName(type paramName, type paramName, ...)
{
    statements;
    return returnType;
}
```

The `returnType` is also called the *data type* or *function type*.

![Parts of a Function](/images/functions/parts-of-a-function.svg)

### Return Statement

The function returns its value and ends via the return statement.

-   It passes this value outside the function
-   Syntax: `return expr;`
    +   In C++, `return` is a reserved word.
-   When a return statement executes...
    1.  The function immediately terminates
    2.  Control goes back to the caller
-   When a return statement executes in the `main()` function, the program terminates.
-   All paths through a value-returning function must return a value!
    +   Example of Error: need a return value when `num <= 5`.

```cpp
int secret(int num)
{
	if(num > 5)
		return 2 * num; // <- this is bad
}
```

-   Only one value can be returned from a function.
-   Void functions do not require a return statement, but one can be used (without any value) to exit the function early. (More on `void` functions later.)

Calling a function (i.e., running the function)
-----------------------------------------------

Syntax: `functionName (actual parameter list)`

-   Syntax of the actual parameter list:
    +   expression or variable, expression or variable, …
-   The actual parameter list can be empty as in this function call.
    +   `functionName()`
-   A call to a value-returning function with an empty formal parameter list is:
    +  `value = functionName();`


Function Prototype / Function Declarations
------------------------------------------

A function *prototype* is the function’s heading without the body of the function.

-   Has a semicolon at the end.
-   Not necessary to specify the variable name in the parameter list, but recommended.
-   The data type of each parameter must be specified.
-   A Function prototype is often called a *function declaration* or *forward declaration*, as opposed to a *function definition*, which must include the function’s body.
-   **Always include function prototypes before `main()` and definitions below `main()`.**
-   **Each function prototype should be directly preceded by a comment describing what the function does and how to use (call) it.**

Flow of Execution
-----------------

-   Execution always begins at the first statement in the `main()` function.
-   Other functions are executed only when called.
-   Function prototypes (also called function declarations) appear before any function definition.
    1.  The compiler translates function prototypes first.
    2.  The compiler can then correctly translate a function call.
-   Function call transfers control to the first statement in the body of the called function.
-   When the end of a called function is executed, control is passed back to the point immediately following the function call.
    +   The function’s returned value replaces the function call statement

Common Mistakes
---------------

Avoid these common mistakes when defining functions.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/w9askbxPEdM?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
</div>

-   Your code should have **NO** non-constant global variables (more on this later).
-   Defining a function inside a function.
-   Forgetting the prototype (Don’t put the function definition before
    `main()`; use a prototype.)
-   Forgetting the semicolon after the prototype.
-   Forgetting to return a value.
-   Putting code after the return.
-   Putting the variable type in the function call.
-   Having a variable with the same name as a function.
-   Trying to return multiple values. (Only one value will be returned, even if
    the values are comma separated. It will compile without errors, but will not work).
-   Including the parameter types for a function call. The compiler already knows the types.

Self-Check Questions
--------------------

1.  What is a function definition and what is a function prototype?
2.  What are some predefined functions we have used?
3.  What are formal and actual parameters?
4.  What is a function call?
5.  What good is a function that is never called?
6.  Create a function that can multiply two integers and return an integer.
