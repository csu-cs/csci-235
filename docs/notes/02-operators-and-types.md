Operators and Types
===================

*Chapter 2*

Overview
--------

This 27-minute video is an overview of the second part of Chapter 2.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/ZLf0YbC2bmg?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe></div>
</div>

Named Constants
---------------

A named constant is a value given a symbolic name so it cannot be changed during program execution. Using named constants makes code easier to read, safer, and easier to maintain.

### Declaring constants


Basic syntax using `const`:

```C++
const dataType identifier = value;
```

Prefer `constexpr` when the value is known at compile time — it enables compile-time evaluation and can be used in contexts that require constant expressions (array sizes, template parameters, etc.):

```C++
constexpr double INCH_TO_CM = 2.54;
const int STUDENT_COUNT = 20; // could use constexpr here instead of const
const char SEPARATOR = ' ';
```

### Why use named constants?

- **Compile-time checking**: `constexpr` and [typed enums](07-enums) allow the compiler to check uses and catch mistakes early.
- **Readability**: a descriptive name (e.g. `INCH_TO_CM`) documents what the value means, avoiding "[magic numbers](../style-guide#global-variables-and-magic-numbers)."
- **Maintainability**: change the value in one place instead of searching the codebase.
- **Single source of truth**: reduces inconsistencies and errors when a value is used in many places.
- **Prevent accidental modification**: `const`/`constexpr` prevents reassignments.
- **Performance**: compile-time constants can be optimized away and used in compile-time contexts.

### Best practices


- Prefer `constexpr` for values known at compile time.
- Use clear, consistent naming. Many codebases use ALL_CAPS for constants; we will use that convention for this course.

Using named constants thoughtfully reduces bugs and makes intent clear to readers and compilers alike.

Casting numbers between `int`s and `double`s
--------------------------------------------

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/CZg4uZaE5kg?rel=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
</div>

::: tip
This video describes opening Atom. Instead of what is shown, open your code in *VSCodium* by typing:

```bash
codium casting.cpp
```
The recommended command to compile the program is:

```bash
g++ -Wall -Wextra -o casting casting.cpp
```

:::

Arithmetic Operators in C++
---------------------------

|  Operator | Name                                 |
|:---------:|:-------------------------------------|
|   +       | addition                             |
|   -       | subtraction                          |
|   *       | multiplication                       |
|   /       | division                             |
|   %       | modulus   (or remainder) operator    |
|   ++      | increment                            |
|   --      | decrement                            |

Table: The C++ arithmetic operators.


The following video explains the increment, decrement, and modulus operators.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/xgycVLWlpic?rel=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
</div>

-   Increment operator: increase variable by 1
    +   Pre-increment: `++variable`
    +   Post-increment: `variable++`
-   Decrement operator: decrease variable by 1
    +   Pre-decrement: `--variable`
    +   Post-decrement: `variable--`

What is the difference between the following?

| Pre-increment         | Post-increment        |
| --------------------- | --------------------- |
| `int alpha = 5;`      | `int alpha = 5;`      |
| `int beta = ++alpha;` | `int beta = alpha++`; |

Table: After watching the video, check your understanding by determining what `alpha` and `beta` equal in each of these examples.
