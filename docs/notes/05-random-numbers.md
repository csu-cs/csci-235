Random Number Generation
========================

*Chapter 5*

Uses the function rand of the header file `cstdlib` to generate a random number

-   `rand()` returns an `int` value between `0` and `RAND_MAX` (often `32767`)
-   Examples:
    +   `rand() % 100 // a "random" integer >= 0 and < 100`
    +   `rand() % 100 + 900 // a "random"  between 900 and 999 inclusive`
-   `srand()` seeds the random number generator. It accepts 1 parameter, an unsigned int, which determines the set of random numbers to be returned.
    +   Commonly the time is used to seed the random number generator. That way you have a different seed every time the program executes.


This is a fun example that I think will help solidify some concepts for you. Also, it shows how you can use pseudo-random numbers to create a game.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/_VkEnualCV8?rel=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
</div>

“The lot is cast into the lap, but its every decision is from the LORD.” -
[Proverbs 16:33](https://bible.knowing-jesus.com/Proverbs/16/33)

-   Random just means *WE* cannot predict the outcome.