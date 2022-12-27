Do…While Loop and For Loops
===========================

*Chapter 5*

Do…While Loops
--------------

Do…while loops work just like a while loop but the body of the loop **will be run at least
once**.

Syntax:

```cpp
do
{
    //These things
}
while (guard statement); //<- notice the semicolon
```

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube.com/embed/TvLIgmdNN8M?rel=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
</div>

::: info

To use `INT_MAX` as described in this video, include the `climits` hearder.
:::

For Loops
---------

This type of loop runs for a specific number of times. Use this type for all counter-controlled loops.

Syntax:

```cpp
for (initial statement; loop condition; update statement)
{
      statement;
}
```

-   The initial statement, loop condition, and update statement are called for
    loop control statements

-   It is like a counter-controlled while loop, but you initialize, compare, and
    update the counter all on the first line.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube.com/embed/ELmekLaI20M?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
</div>

Example: Count from 0 to 9:

```cpp
for (int counter = 0; counter < 10; ++counter)
{
      cout << counter << " ";
}
cout << endl;
```

Big no-no: Don’t put a semicolon after the for loop:

```cpp
for (int iter = 0; iter < 100; iter++); // <- no-no
```

This will compile, but it will do nothing 100 times and then go on to your
intended looped instruction (running them only once).

Choosing the Right Looping Structure
------------------------------------

All three loops have their place in C++

1.  If the loop must run at least once, use a `do…while` loop.
2.  Otherwise, if you know or can determine in advance the number of repetitions needed, the `for` loop is the correct choice (i.e., a counter-controlled loop).
3.  Otherwise, use a `while` loop.

`break` and `continue` Statements
---------------------------------

The `break` and `continue` alter the flow of control of loops.

The `break` statement:

-   The `break` statement is used for two purposes:
    1.  To exit early from a loop
        -   Can eliminate the use of certain (flag) variables.
        -   Generally, using a `break` in this way is bad design.
    2.  To skip the remainder of a `switch` structure
-   After a `break` executes, the program continues with the first statement *after* the structure.


The `continue` statement:

-   `continue` is used in `while`, `for`, and `do…while` structures
-   When executed in a loop
-   It skips the remaining statements and proceeds with the next iteration of the loop.

**Avoid using `break` and `continue` statements with loops.** Generally, exiting interrupting the normal flow of execution is considered poor programming design. Usually, you can avoid `break` statements by updating the loop condition. You can avoid `continue` statements by using a condition (`if` or `switch` statement) inside the loop.

Nested Control Structures
-------------------------

-   To create the following pattern:

    ```
    *
    **
    ***
    ****
    *****
    ```

-   We can use the following code:

    ```cpp
    const int SIZE = 5;
    for (row = 1; row <= SIZE; ++row)
    {
        for (col = 1; col <= row; ++col)
            cout << "*";
        cout << endl;
    }
    ```

What is the result if we replace the first for statement with this?

```cpp
for (row = SIZE; row >= 1; --row)
```

Self-Check Questions
--------------------

1.  What is the difference between a while and a `do…while`?
2.  What is the syntax for a `while` statement?
3.  What it is an infinite loop?
4.  Compare and contrast while and `for` loops.
5.  Know the syntax of a `for` loop.
