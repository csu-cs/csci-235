Scope and Parameters
====================

*Chapter 6*

Void Functions
--------------

1.  *Value-returning functions* have a return type.
    +   Return a value of a specific data type using the return statement
2.  *Void functions* do not have a return type.
    +   Does not use a return statement to return a value


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
    +   Identifiers are accessible from their declaration to end of block where it is declared.
    +   Within nested blocks if no identifier with same name exists
-   The *scope* of a function name is like scope of an identifier declared outside any block.
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
-   Global named constants have no side effects because they never change values.


Two Types of Function Parameters
---------------------------------

There are two ways to send information to a function using parameters: *Pass-by-Value* and *Pass-by-Reference*.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/x9W1qV-RO5k?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
</div>

1.  **Value parameter:** a formal parameter that receives a copy of the content of the corresponding actual parameter
    +   The formal parameter has its own copy of the data.
    +   During execution, the function manipulates the data stored in its own memory space.
    +   The copy is lost when the function call ends.

2.  **Reference parameter**: a formal parameter that receives the location
    (memory address) of the corresponding actual parameter
    +   Changes to the formal parameter will change the corresponding actual parameter.
        *   i.e., the changes are occurring directly on the variable passed in (not a copy).
    +   Reference parameters are useful in three situations:
        1.  When returning more than one value.
        2.  When changing the actual parameter.
        3.  When passing the address saves memory space and time (use a `const` reference if you are not changing the actual parameter.)

Memory Allocation for Parameters
--------------------------------

-   When a function is called, memory for its formal parameters and its local variables is allocated in the function data area.

-   **For a value parameter**, the actual parameter’s value is copied into the formal parameter’s memory cell.
    +   Changes to the formal parameter do not affect the actual parameter’s value.
-   **For a reference parameter**, the actual parameter’s address passes to the formal parameter.
    +   Both formal and actual parameters refer to the same memory location
    +   During execution, changes made to the formal parameter’s value permanently change the actual parameter’s value.

-   Design Guideline: If a function needs to return more than one value, do not use a value-returning function. Instead, use reference parameters to “return” the values.

Creating an Animation
---------------------

This video is an example of putting the things we know together for something fun. You also learn more about timing.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/uagjplSPneg?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
</div>
