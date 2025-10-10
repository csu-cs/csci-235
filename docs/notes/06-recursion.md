Intro to Recursion
==================

As you know, functions can call other functions. They can also call themselves. When a function calls itself, it is called recursion (or a recursive call).

When using recursion, make sure that there is a condition in which the function will not call itself. Otherwise, the function will never exit. This is called infinite recursion.

Example of Recursion: Factorial
-------------------------------

The factorial of a non-negative integer *n*, denoted by *n*!, is the product of
all positive integers less than or equal to n.

-   $5! = 5 \times 4 \times 3 \times 2 \times 1$
-   $1! = 1$
-   $0! = 1$ (by convention)

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/3YG2XVwtgo0?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
</div>

### Implementation 1

```cpp
// 5!   =   5 * 4 * 3 * 2 * 1
int factorial(int num)
{
    int multi = 1;
    while (num > 1)
    {
        multi = multi * num;
        --num;
    }

    return multi;
}
```

### Implementation 2

```cpp
// 5!   =   5 * 4 * 3 * 2 * 1   =   1 * 2 * 3 * 4 * 5
int factorial(int num)
{
    int multi = 1;
    for (int count = 2; count <= num; ++count)
    {
        multi = multi * count;
    }

    return multi;
}
```

### Reclusive Implementation!

```cpp
// 5! = 5 * 4!   =   5 * 4 * 3!   =   5 * 4 * 3 * 2!
int factorial(int num)
{
    if (num <= 1)
        return 1;

    return num * factorial(num - 1);
}
```

Notice how clean and simple the recursive version is. You have fewer lines of
code. Also, note that we have an exit condition where the function does not
call itself.

Tail Recursion
--------------

I mention in the above video tail recursion. The example given isn't quite tail recursion because the recursive call is not the last thing done. Take a look at this next video to see how to write to make this factorial program run even more efficiently using tail recursion.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/_JtPhF8MshA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe></div>
</div>

### Efficient Factorial Implementation using Tail Recursion.

```cpp
// The factorial function call the helper function with 1 extra parameter.
int factorial(int num)
{
    return factHelper(num, 1);
}

int factHelper(int num, int accumulator)
{
    if (num <= 1)
        return accumulator;

    // Performs the multiplication before the recursive call.
    return factHelper(num - 1, accumulator * num);
}
```

Famous Example of a Problem that is not Primitive Recursive
-----------------------------------------------------------

The [Ackermann function](https://en.wikipedia.org/wiki/Ackermann_function) is
known as one of the simplest computable functions in which the number of iterations
is unknown ahead of time. This makes it much more difficult to implement using
loops. The function is defined mathematically as:

$$
A(\alpha, \beta) = \left\{ \begin{array}{cl}
\beta + 1  & : \ \text{if}\ \alpha = 0 \\
A(\alpha - 1,\ 1) & : \ \text{if}\ \alpha > 0\ \text{and}\ \beta = 0 \\
A\left( \alpha - 1,\ A(\alpha, \beta - 1) \right) &  : \ \text{if}\ \alpha > 0\ \text{and}\ \beta > 0
\end{array} \right.
$$

This function accepts two parameters and returns a single result. However, a non-recursive implementation using a loop is much more difficult. With today’s powerful computers, calculating the solution takes a very long time given relatively small input values (e.g., $A\left(4, 2\right)$ is $2^{65536} - 3$).

In the C++ implementation below, the `uintmax_t` is just an unsigned integer type to hold larger values compared to `unsigned int`. Remember, `unsigned` means that it cannot be negative. Note that there is no error checking in this version.

```cpp
#include <cstdint> // header that defines what a uintmax_t is.

uintmax_t ack(uintmax_t alpha, uintmax_t beta)
{
    uintmax_t ans; // the largest unsigned integer type (often 8 bytes)
	if (alpha == 0)
		ans = beta + 1;
	else if (beta == 0)
		ans = ack(alpha - 1, 1);
	else
        ans = ack(alpha - 1, ack(alpha, beta - 1));

    return ans;
}

```

Try creating a nested pair of `for` loops to output every combination of `alpha` and `beta` for 0 to 4 to see how long the calculations take on your computer. On my machine `ack(4, 1)` takes 13 seconds to computer `ack(4, 1)` and `ack(4, 2)` didn't finish after an hour. (You may kill a running commandline program by typing `CTRL+D`.) The value for `ack(4, 2)` is $2.00352993040684646497907235156025575044782547... × 10^{19728}$, so it would not fit in the given variable anyways!

The Ackerman function makes so many recursive calls, that your program may run out of memory. We can compile it with an additional argument to give it more memory. Compile with the following command to get a larger stack (more memory for more recursive calls):

```plain
g++ -Wall -Wextra -o ackermann ackermann.cpp -Wl,--stack,0x100000000
```


