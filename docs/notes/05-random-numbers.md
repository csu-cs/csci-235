Random Number Generation
========================

*Chapter 5*

The header file `cstdlib` contains a the `rand()` function which returns a *pseudorandom* number (i.e., a seemingly random number).

-   `rand()` returns an `int` value between `0` and `RAND_MAX` (often `32767`).
-   Examples:
    ```cpp
    rand() % 100 // a "random" integer >= 0 and < 100`
    rand() % 100 + 900 // a "random"  between 900 and 999 inclusive`
    ```
-   `srand()` seeds the random number generator. It accepts 1 parameter, an `unsigned int`, which determines the set of random numbers to be returned by `rand()`.
    +   Commonly the time is used to seed the random number generator. That way you have a different seed every time the program executes.
        ```cpp
        const unsigned int SEED = time(nullptr);
        srand(SEED);
        ```
    +   Generally, you should only call `srand()` once in your code so the numbers appear to be more random.

--------

This is a fun example that I think will help solidify some concepts for you. Also, it shows how you can use pseudo-random numbers to create a game.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/_VkEnualCV8?rel=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
</div>

“The lot is cast into the lap, but its every decision is from the LORD.” -
[Proverbs 16:33 (ESV)](https://www.biblegateway.com/passage/?search=Proverbs+16%3A33&version=ESV)

-   Random just means *WE* cannot predict the outcome.