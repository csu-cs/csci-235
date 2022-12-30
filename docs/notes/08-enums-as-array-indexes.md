Enums as Array Indexes
======================

*Chapter 8*

Integral Data Type and Array Indices
------------------------------------

C++ allows any integral type to be used as an array index. Therefore, we can use
defined enumeration types to improve readability.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/eprz0UKq7mc?rel=0&amp;showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe></div>
</div>

Example:

```cpp
enum Color {GREEN, RED, BLUE, BROWN, WHITE, ORANGE, YELLOW, NO_COLOR};

double paintPrice[NO_COLOR]; // Array of 7 doubles (NO_COLOR == 7)

// initialize the prices to $1
for (Color paint = GREEN; paint < NO_COLOR;
    paint = static_cast<Color>(paint + 1))
{
    paintPrice[paint] = 1.0;
}
paintPrice[RED] = paintPrice[RED] + 75.96;
```

Declare Arrays Using Type Aliases
---------------------------------

You may use type aliasing to have a new name for an array of a particular type and size.

Example:

```cpp
// Use a constant for the size and declare an alias “typedef”
const int SIZE = 50;
using list = double[SIZE];

list yourList; // an array of 50 doubles called yourList
list myList; // another array of 50 doubles called myList
```