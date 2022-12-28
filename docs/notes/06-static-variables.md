Static and Automatic Variables
==============================

-   **Automatic variable**: memory is allocated at block entry and deallocated at block exit

    +   In C++, a block is code within curly brackets (functions, loops, etc.)

    +   By default, variables declared within a block are automatic variables

-   **Static variable**: memory remains allocated if the program executes

    +   Global variables declared outside of any block are static variables

    +   Syntax: `static dataType identifier = value;`

    +   Static variables declared within a block are local to the block have
        same scope as any other local identifier in that block.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/2mY0yi3rxRk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe></div>
</div>

Example use of a static variable
--------------------------------

```cpp
double runningTotal(double numberToAdd)
{
    static double total = 0; // declare and initialize variable that
                             // remains over the whole program run.

    total += numberToAdd; // add number to total

    return total; // return updated total
}
```

```cpp
double num = 0;
num = runningTotal(1); // num = 1.0
num = runningTotal(2); // num = 3.0
num = runningTotal(2); // num = 5.0
```

Question: What would happen if the variable was not `static`?  
Answer: `num` would always equal the argument passed into the function:

```cpp
num = runningTotal(1); // num = 1.0
num = runningTotal(2); // num = 2.0
num = runningTotal(2); // num = 2.0
```
