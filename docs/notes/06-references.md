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

cout << num << '\n'; // outputs 5
cout << ref << '\n'; // outputs 5
cout << copy << '\n'; // outputs 5

ref = 10; // changes num to 10, because ref is just another name for num

cout << num << '\n'; // outputs 10
cout << ref << '\n'; // outputs 10
cout << copy << '\n'; // outputs 5, because it is a copy of the original
```

A reference must be initialized when it is declared, and it remains an alias for that same variable. Assigning a new value through the reference changes the variable; it does not make the reference refer to a different variable.

We use `&` not only for variables but also for function parameters. A reference parameter acts as another name for the actual parameter, so the function can modify the original variable.

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

2.  **Reference parameter**: a formal parameter that acts as another name for the corresponding actual parameter
    +   Changes to the formal parameter will change the corresponding actual parameter.
        *   The function works with the original variable, not a copy.
    +   Reference parameters are useful in three situations:
        1.  When a function needs to provide more than one result.
        2.  When changing the actual parameter.
        3.  When passing a large object by reference avoids copying it. Use a `const` reference when the function only needs to read the object; this avoids copying without allowing the function to modify it.

For example, only the reference parameter changes the variable in the calling function:

```cpp
void addOneByValue(int number)
{
    number++;
}

void addOneByReference(int& number)
{
    number++;
}

int count = 5;
addOneByValue(count);     // count is still 5
addOneByReference(count); // count is now 6
```

A read-only function can use a `const` reference parameter:

```cpp
void printName(const string& name)
{
    cout << name << '\n';
}
```

The function can read `name` but cannot change it.

Memory Allocation for Parameters
--------------------------------

-   When a function is called, memory for its formal parameters and its local variables is allocated in the function data area.

-   **For a value parameter**, the actual parameter’s value is copied into the formal parameter’s memory cell.
    +   Changes to the formal parameter do not affect the actual parameter’s value.
-   **For a reference parameter**, the formal parameter refers to the same variable as the actual parameter.
    +   Both names refer to the same object.
    +   During execution, changes made to the formal parameter’s value permanently change the actual parameter’s value.

::: tip Design Guideline
Reference parameters can be used to provide additional results from a function. For simple functions, prefer returning a value when that is enough; later, you will see other ways to return multiple related values (using [structs](09-structs-intro)).
:::