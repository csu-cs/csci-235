Reference Parameters
====================

*Chapter 6*

Variable Aliases
----------------

The `&` can be used to create a new name (i.e., alias or reference) for an existing variable. For example:

```cpp
int num = 5;
int& ref = num; // alias to num
int copy = num; // a copy of num

cout << num << endl; // outputs 5
cout << ref << endl; // outputs 5
cout << copy << endl; // outputs 5

ref = 10; // changes num to 5, because ref is just another name for num

cout << num << endl; // outputs 10
cout << ref << endl; // outputs 10
cout << copy << endl; // outputs 5, because it is a copy of the original
```

We use `&` not only for variables but also for function parameters. One benefit of reference parameters is that they allow us to modify the original variable in the calling function.

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
