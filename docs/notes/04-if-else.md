Conditional (Branching) Statements
==================================

*Chapter 4*

Control Structures
------------------

A computer can proceed:

1.  In sequence
2.  Selectively (branch): making a choice
3.  Repetitively (iteratively): looping
4.  By calling a function

Here are subsections of flowcharts showing the first three:

![Sequence, Selection, and Repetition](/images/if-else/sequence-selection-repetition.svg)

So far, our program instructions have only proceeded in sequence. We will not 
add selectivity.

Let’s look inside the decisions (“diamonds”) – this is where we need to make a
decision about what we are going to do next. For instance, if we are assigning
grades, if the grade is between 90 and 100 it is an A, if 80-90 it’s a B, etc.
So we decide what to do based on our input.

-   Conditional statements: only executed if certain conditions are met
-   Condition: represented by a logical (Boolean) expression that evaluates to a logical (Boolean) value of true or false

There are two structures for these conditional statements:

1.  if…then…else statements
2.  switch statements

If…then…else Statement
----------------------

```cpp
if (guard statement)
{
    // If true, then do whatever is in these {}
}
else
{
    // If false, do this instead
}
```

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube.com/embed/GmZdo1Vbmrw?rel=0&amp;showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe></div>
</div>

### Examples

1.  Just if statement:

    ```cpp
    if (grade > 90)
	{
        letter = 'A';
	}
    ```

2.  If…then…else:

    ```cpp
    if (grade > 70)
	{
        letter = 'P'; // P for pass
	}
    else
	{
        letter = 'F'; // F for fail
	}
    ```

3.  Block of if…then…else statements (nested if/else):

    ```cpp
    if (grade >= 90)
	{
        letter = 'A';
	}
    else if (grade >= 80)
	{
        letter = 'B';
	}
    else if (grade >= 70)
	{
        letter = 'C';
	}
    else if (grade >= 60)
	{
        letter = 'D';
	}
    else
	{
        letter = 'F';
	}
    ```

<div style="max-width: 854px; margin: 0 auto; padding: 0;">
<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe width="853" height="480" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/oKzuN-7-sMk?rel=0&amp;showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe></div>
</div>

Expression of `char` values with relational operators:

-   The result depends on the machine’s collating sequence.
-   ASCII character set


Nesting
-------

*Nesting*: one control statement is located within another.

An `else` is associated with the most recent `if` that has not been paired with an `else`.

```cpp
if (month == 2) // Determine how many days are in February this year.
{
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
        days = 29; // leap year
    else
        days = 28; // normal year
}
```

Logical Expressions
-------------------

Logical (Boolean) expressions:

-   Expressions such as `4 < 6` and `'R' > 'T'`
-   Returns an integer value of `1` if the logical expression evaluates to `true`
-   Returns an integer value of `0` otherwise

The `bool` Data Type

-   The data type `bool` has logical (Boolean) values true and false
-   `bool`, `true`, and `false` are reserved words
-   The identifier `true` has the integer value `1` (or not `0`) and `false` has the value `0`.

Relational (Boolean) Operators
------------------------------

| Operator | Description              | Syntax            |
|----------|--------------------------|-------------------|
| `==`     | equal to                 | `num1 == num2`    |
| `!=`     | not equal to             | `num1 != num2`    |
| `<`      | less than                | `num1 < num2`     |
| `<=`     | less than or equal to    | `num1 <= num2`    |
| `>`      | greater than             | `num1 > num2`     |
| `>=`     | greater than or equal to | `num1 >= num2`    |


### String Comparisons

Relational operators can be applied to strings.

-   Strings are compared character by character, starting with the first character.
-   The comparison continues until either a mismatch is found or all characters are found equal.
-   If two strings of different lengths are compared and the comparison is equal to the last character of the shorter string
    +   The shorter string is less than the larger string

Multiple Comparisons
--------------------

You can combine multiple comparisons into a single expression with logical (Boolean) operators.

Unlike relational operators (which compare values), logical operators *take* Boolean expressions and produce a Boolean result.

This video covers how to perform multiple comparisons using the logical operators AND (`&&`) and OR (`||`). We also cover the NOT (`!`) operator.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube.com/embed/wXyok8m7NRo?rel=0&amp;showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe></div>
</div>

| Operator | Description | Syntax             |
|:--------:|:-----------:|--------------------|
| `!`      | not         | `!val`             |
| `&&`     | and         | `val1 && val2`     |
| `\|\|`   | or          | `val1 \|\| val2`   |

Things to look out for:
-----------------------

-   A “dangling” `else` (You cannot have an else without a matching if directly preceding it.)
-   Else statements cannot have conditionals; only if statements.

    ```cpp
    else (num > 3) // this is an error; you need: else if (num > 3)
    ```

-   Using a `=` when you mean `==`
    +   The appearance of `=` in place of `==` resembles a *silent killer*
        (no syntax error, but a semantic error).
-   Forgetting to break in a switch statement.
-   Everything is a number (even Booleans and characters)
-   Any value that is not `0` is evaluated as `true` when interpreted as a Boolean.
-   Don’t forget to use `&&` and `||` when doing multiple comparisons
    
    ```cpp
    0 < num1 < 10 // Error: is true for any number greater than 0!`  
    (0 < num1) < 10 // Here is the order of operations. See the problem?  
    0 < num1 && num1 < 10 // Correct: true for num1 values between 1 and 10
    ```

A dangling `else` means that you have an `else` that is going with the wrong if
statement.

Self-Check Questions
--------------------

1.  What is a conditional?
2.  What is the difference between a `=` and `==`?
3.  Be able to create an if…else; if…else…if…else; and switch statements.
