Scope
=====

*Chapter 6*

Void Functions
--------------

1.  *Value-returning functions* have a return type.
    +   Return a value of a specific data type using the return statement
2.  *Void functions* do not have a return type.
    +   Do not use a return statement to return a value.


Not all functions return a value.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/5_HcYUkEPH4?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
</div>

Scope of an Identifier
----------------------

The *Scope* of an identifier is where in the program the identifier is accessible.

Types of Scopes:

-   **Local identifier**: identifiers declared within a function (or block)
-   **Global identifier**: identifiers declared outside of every function definition
-   C++ does not allow nested functions, which is the definition of one function inside of another function's body.

Rules when an identifier is accessed:

-   Must be declared before being used.
-   Global identifiers are accessible by a function or block if:
    +   Declared before the function definition
    +   All local identifiers (variables and parameters) have different names than the global identifier.
-   Nested block
    +   Identifiers are accessible from their declaration to the end of the block where it is declared.
    +   Within nested blocks if no identifier with the same name exists
-   The *scope* of a function name is like the scope of an identifier declared outside any block.
    +   i.e., function name scope = global variable scope

-   By using the *scope-resolution operator*, `::`,
    +   A global variable declared before the definition of a function (or block) can be accessed by the function (or block).
    +   Even if the function (or block) has an identifier with the same name as the global variable.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/ZTGujDzKMbw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe></div>
</div>

Global Variables Are Problematic
--------------------------------

-   **Do NOT use global variables unless they are constants**!
-   Using global variables causes side effects.
    +   A function that uses global variables is not independent
    +   If more than one function uses the same global variable,
        *   Debugging problems with the global variable is more difficult.
        *   Problems caused in one area of the program may appear to be from another area.
-   Global constants have no side effects because they never change values.


Example: Creating an Animation
------------------------------

This video is an example of putting the things we know together for something fun. You also learn more about timing.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/uagjplSPneg?rel=0&amp;showinfo=0" title="CSCI 235" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="allowfullscreen"></iframe></div>
</div>


Example: Reversing the Digits in a Number
-----------------------------------------

This example uses a user-defined function to reverse the digits of a number. As you follow the program, notice how the function fits into the rest of the program:

- The function prototype appears before `main`, so the compiler knows its name, return type, and parameters before it is called. The prototype and definition must have matching signatures.
- The call `reverseDigits(input)` passes `input` as an argument. The parameter `num` receives that value inside the function; it is a local variable, so changes to it do not change `input` in `main`.
- The `long long` return type tells the caller what kind of value the function sends back. `main` stores that returned value in `reversed`.
- The function does its work with local variables, then uses `return` to send the result back. In the loop, `% 10` gets the last digit and `/ 10` removes it as the reversed number is built.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/o6yVsqVg3n0?rel=0&amp;showinfo=0" title="CSCI 235" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="allowfullscreen"></iframe></div>
</div>
