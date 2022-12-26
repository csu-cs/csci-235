Logic and Math
==============

*Chapter 4*


Everything is a Number
----------------------

Remember, to a computer, everything is a number, even characters.

<div style="max-width: 854px; margin: 0 auto;">
<div style="position: relative; padding-bottom: 56.25%; padding-top;20px; height: 0;"><iframe width="560" height="315" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/SQKvGrGODss?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe></div>
</div>

Truth Tables
------------

<div style="max-width: 854px; margin: 0 auto; padding: 0;">
<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe width="560" height="315" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/8xcgTz23GtY?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe></div>
</div>

A convenient and helpful way to organize the possible values of any logical (Boolean) statement is in a truth table. A *truth table* is a table whose column headings are expressions, and whose rows are possible scenarios given the expressions. For example, in the NOT table below, if *p* is `true` (T), then “*not p*” (!*p*) must be `false` (e.g., if *p* means it “is raining” then !*p* means it is “not raining”).

| *p* | **!p** |
|-----|:------:|
| T   | F      |
| F   | T      |

Table: Truth table for the **NOT** function.

| *p* | *q* | **p && q** |
|-----|-----|:----------:|
| T   | T   | T          |
| T   | F   | F          |
| F   | T   | F          |
| F   | F   | F          |

Table: Truth table for the **AND** function.

| *p* | *q* | **p \|\| q** |
|-----|-----|:------------:|
| T   | T   | T            |
| T   | F   | T            |
| F   | T   | T            |
| F   | F   | F            |

Table: Truth table for the **OR** function.



Examples
--------

| *p* | *q* | **p \|\| q** | **! (p \|\| q)** |
|-----|-----|:------------:|:----------------:|
| T   | T   | T            | F                |
| T   | F   | T            | F                |
| F   | T   | T            | F                |
| F   | F   | F            | T                |

Table: Truth table for ! (*p* \|\| *q*) with intermediate step.

| *p* | *q* | **!p** | **!q** | **!p && !q** |
|-----|-----|:------:|:------:|:------------:|
| T   | T   | F      | F      | F            |
| T   | F   | F      | T      | F            |
| F   | T   | T      | F      | F            |
| F   | F   | T      | T      | T            |

Table: Truth table for !*p* && !*q* with intermediate steps.


Note that !(*p* \|\| *q*) has the same truth-table results as !*p* && !*q*.
That means that the two statements are *logically equivalent*.

Operator Precedence
-------------------

-   Relational and logical operators are evaluated from left to right
    -   The associativity is left to right
-   Parentheses can override precedence

| Operators                 | Precedence |
|:-------------------------:|------------|
| `!`, `+`, `-` (unary operators) | first      |
| `*`, `/`, `%`                   | second     |
| `+`, `-`                        | third      |
| `<`, `<=`, `>=`, `>`            | fourth     |
| `==`, `!=`                      | fifth      |
| `&&`                            | sixth      |
| `||`                            | seventh    |
| `=`                             | last       |

Try to create more advanced combinations for truth tables like:

```cpp
q || !q && p != q
```

What does this evaluate to?
```cpp
1 + 7 < 2 || !5 + -1 && true == 0
```

Remember `false` is `0` and `true` is a nonzero value.



Short-Circuit Evaluation
------------------------

*Short-circuit evaluation* is the evaluation of a logical expression that stops as soon as the value of the expression is known.

-   Example:

    ```cpp
    (age >= 21) || ( x == 5) //Line 1  
    (grade == 'A') && (x >= 7) //Line 2
    ```

-   Example to prevent dividing by zero.

    ```cpp
    int demon = 1, num = 4;  
    if(denom != 0 && num / denom > 0)  
        cout << num << " has the same sign as " << denom << endl;
    ```

::: details Trick, trick question: If the value of `num` is `0`, what is it after: `if(num && num = 2) …`?

Answer: `num` would still equal `0`. But it would equal `2` if you changed the `&&` to `||`.

:::

Self-Check Questions
--------------------

1.  Be able to fill in the truth tables.
2.  Use truth tables to determine if two expressions are logically equivalent.
3.  Does the following expression evaluate to `true` or `false`?
    -    `1 + 2 < 10 || (4 * 2 != 9 && -4 / 2 <= -4)`
