Loop Design with While Loops
============================

*Chapter 5*

Why Is Repetition Needed?
-------------------------

-   Repetition allows efficient use of variables.
-   We can input, add, and average multiple numbers using a limited number of variables and lines of code.
-   For example, to add five numbers:
    +   Declare a variable for each number, input the numbers and add the variables together.
    +   Create a loop that reads a number into a variable and adds it to a variable that contains the sum of the numbers.

While Loops
-----------

<div class="youtube">
<div><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/rsSWJpoAADM?showinfo=0;rel=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
</div>

Note: One example in this video is summing the numbers from 1 to 10, in which the program outputs the result of 45. However, the actual sum of the numbers from 1 to 10 is 55! See if you can find the bug in the example code.

-   The syntax of the while statement is very similar to the `if` statement:  

    ```cpp
    while (expression)
    {
        statement;
    }

    ```

-   The *expression* acts as a decision-maker and is evaluated as a logical expression.
-   The *statement* can be simple or compound (i.e., multiple statements surrounded by `{}`).
-   The *statement* is called the body of the loop.
-   The parentheses are part of the syntax.

There are a few ways to use a `while` loop, which we will discuss below.


Loop Design
-----------

There are counter-, sentinel-, and flag-controlled loops.

<div class="youtube">
<div><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/nqU_SJ0bYlk?rel=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
</div>

### Counter-Controlled While Loop

Here is an example where you do stuff 15 times.

```cpp
int counter = 0; // set a counter to 0
while (counter < 15) // repeat the while counter is less than 15.
{
    //  Do stuff here...
    counter++; // update by one each time the loop iterates
}
```

In this example, `counter` is called the *loop-control variable*.

**Common mistakes** that cause infinite loops (loops that continue to execute
endlessly):

-   Make sure to include a statement in the loop body that will eventually make the test condition `false`.
    +   Make sure to update your loop-control variable inside the loop, so the loop will exit.
    +   If you have an infinite loop, press Ctrl+C to exit your program.
-   Make sure you initialize the counter before the `while` loop or the value may be incorrect.
-   Don’t put a semicolon after the test condition.

    ```cpp
    while (counter < 15); // Infinite loop, because of the ; placement
    ```

### Sentinel-Controlled While Loop 

A *sentinel* value is used to determine if the loop should end.

Usually, this is given to you by the user (from a file).

```cpp
int num = 0;
cout << "Enter numbers to add until you are finished"
    << ", them input -1" << endl;
cin >> num;

while (num != -1) // -1 is the sentinel value causing the program to exit.
{
    num += num;
    cin >> num;
}
```

### Flag–Controlled While Loop (very similar to sentinel)

If you are looking for something and can quit once you find it, you can set a
Boolean value to false and when you find what you are looking for, you set the
value to true, and the loop exits.

Here is some sample code:

```cpp
bool done = false;

while (!done) // done is the flag variable. (!done is preferred over done == false)
{
    //Do something...;
    if (found what you wanted to)
    {
        done = true;
    }
    //Do something else...;
}
```

`EOF`-Controlled While Loop
---------------------------

<div class="youtube">
<div><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/VW-Q3ZD_W0w?rel=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
</div>

::: details This is the data file from the video, `data.txt`

<<< @/examples/05-data.txt
:::

Often, we want to read a file until we are at the end of a file (`EOF`). If you
are importing from a file, there is a function called `eof()`, which returns
`true` if you have reached the end of the file, and `false` otherwise.
Alternatively, the input stream variable itself will return `true` if (1) you are not at end of the file and (2) you do not have an input error.

```cpp
ifstream inFile; // declare the input stream variable
string word; // variable to hold input

inFile.open("test.txt"); // open the file

inFile >> word; // read first value (if there is a value to read)
while (inFile) // make sure the stream is good (no errors, not at EOF).
{
    ... // do something with word.
    inFile >> word; // update the loop control variable
}
inFile.close();// close the file
```

If you use `eof()`, make sure your input file does not have a blank line of
space after the last value.

Other Expressions
-----------------

The expression in a `while` statement can be complex. For example,

```cpp
while ((noOfGuesses < 5) && (!isGuessed))
{
    . . .
}
```
