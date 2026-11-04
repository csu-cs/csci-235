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
// NO_COLOR is a sentinel: it is not a real color, 
// and its value (7) equals the number of real colors
enum Color {GREEN, RED, BLUE, BROWN, WHITE, ORANGE, YELLOW, NO_COLOR};

double paintPrice[NO_COLOR]; // Array of 7 doubles, valid indices 0 to 6

// initialize the prices to $1; the loop stops before NO_COLOR because
// paintPrice[NO_COLOR] would be out of bounds
for (Color paint = GREEN; paint < NO_COLOR;
    paint = static_cast<Color>(paint + 1))
{
    paintPrice[paint] = 1.0;
}
paintPrice[RED] = paintPrice[RED] + 75.96;
```

Printing Enum Names
-------------------

Printing an enum value displays its integer, not its name. To display `"GREEN"`
instead of `0`, use a second array of strings with the same size, where each
element lines up with the enumerator at that index.

Example:

```cpp
#include <iostream>
#include <string>
using namespace std;

enum Color {GREEN, RED, BLUE, BROWN, WHITE, ORANGE, YELLOW, NO_COLOR};

int main()
{
    // Order must match the enum: colorName[GREEN] is "GREEN", and so on
    const string colorName[NO_COLOR] = {"GREEN", "RED", "BLUE", "BROWN",
                                        "WHITE", "ORANGE", "YELLOW"};
    double paintPrice[NO_COLOR];

    // Set an initial price for all colors.
    for (Color paint = GREEN; paint < NO_COLOR;
        paint = static_cast<Color>(paint + 1))
    {
        paintPrice[paint] = 1.0;
    }

    // Update the price of red.
    paintPrice[RED] = 75.96;

    // Display the color names and prices
    for (Color paint = GREEN; paint < NO_COLOR;
        paint = static_cast<Color>(paint + 1))
    {
        cout << colorName[paint] << ": $" << paintPrice[paint] << '\n';
    }

    return 0;
}
```

Output:

```text
GREEN: $1
RED: $75.96
BLUE: $1
BROWN: $1
WHITE: $1
ORANGE: $1
YELLOW: $1
```

Here `colorName` and `paintPrice` are [parallel arrays](08-parallel-arrays): the same index, such as
`RED`, refers to related data in both. We will look at parallel arrays in more
detail next.

Declare Arrays Using Type Aliases
---------------------------------

You may use a type alias (the `using` keyword) to give a new name to an array type of a particular element type and size.

Example:

```cpp
// Use a constant for the size and declare a type alias
constexpr int SIZE = 50;
using PriceList = double[SIZE];

PriceList yourList; // an array of 50 doubles called yourList
PriceList myList;   // another array of 50 doubles called myList
```