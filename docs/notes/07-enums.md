Enumeration Types
=================

*Chapter 7*

Often times in our code, we need to have a list of things that aren't directly representable using numbers (e.g., sports, types of cars, colors, days of the week, etc.). You can create your own types to hold any value you put into a list. An enumeration is defined as a list of things. C++ has the keyword enum, which is short for enumeration.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/aq7Noc9BQL0?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
</div>

-   Data type: a set of values with a set of operations on them

-   Enumeration type: a simple data type created by the programmer

-   To define an enumeration type, you need:

    +   A name for the data type

    +   A set of values for the data type

    +   A set of operations on the values

-   You can specify the name and the values, but not the operations

-   Syntax:

    ```cpp
    enum TypeName { VALUE_1, VALUE_2, VALUE_3, … };
    ```
    +   `VALUE_1`, `VALUE_2`, … are identifiers called *enumerators*.

-   The list specifies the ordering:

    +   `VALUE_1 < VALUE_2 < VALUE_3 < …`

    +   The enumeration type is an ordered set of values

    +   The default value assigned to enumerators starts at 0

-   A value used in one enumeration type cannot be used by another in the same scope.

-   The same rules apply to enumeration types declared outside of any blocks.

Examples
--------

```cpp
enum Colors { BROWN, BLUE, RED, GREEN, YELLOW };
```

-   defines a new data type called `Color`, and the values belonging to this data type are `BROWN`, `BLUE`, `RED`, `GREEN`, and `YELLOW`.

```cpp
enum Standing { FRESHMAN, SOPHMORE, JUNIOR, SENIOR };
```

-   defines Standing to be an enumeration type. The values belonging to standing are `FRESHMAN`, `SOPHMORE`, `JUNIOR`, and `SENIOR`.

Common Mistakes
---------------

Types and their values must be valid identifiers (i.e., they must follow the same rules
as variable names).

```cpp
enum Grade { 'A', 'B', 'C', 'D', 'F' }; // illegal enumeration type
enum Place { 1ST, 2ND, 3RD, 4TH}; // illegal enumeration type

// cannot define value, APPLE in multiple types (as shown below)
enum Fruit { APPLE, ORANGE, PEACH };
enum Food { MILKSHAKE, BURGER, EGGS, APPLE }; 
```

Declaring variables and assigning values with your new type!
------------------------------------------------------------

Suppose we have a new type defined as:

```cpp
enum Sport { BASKETBALL, FOOTBALL, HOCKEY, BASEBALL, SOCCER, VOLLEYBALL,
	TABLE_TENNIS };
```

Then we can define variables using this type like this:

```cpp
Sport mostPopularSport;
Sport mySport;
```

Then we can set the values of the variables like this:

```cpp
mostPopularSport = FOOTBALL;
mySport = TABLE_TENNIS;
```

Operations on Enumeration Types
-------------------------------

Enumeration types are stored internally as integers, which means they can be
compared with each other. However, some numeric operations cannot be performed
directly.

-   No arithmetic operations are allowed on enumeration types (they are implicitly cast to integers):

    ```cpp
    Sport fav;
    fav = mostPopularSport + 2; // error: invalid conversion from 'int' to 'Sport'
    fav = BASKETBALL + HOCKEY;  // error: invalid conversion from 'int' to 'Sport'
    fav++; // error: no 'operator++(int)' declared for postfix '++'
    ```

-   Solution: Explicitly cast the integer back to the `enum` type after the operator

    ```cpp
    fav = static_cast<Sport>(mySport + 1);
    ```

-   Relational Operators

    ```cpp
    FOOTBALL <= SOCCER;  // true
    HOCKEY > BASKETBALL; // true
    FOOTBALL == SOCCER;  // false
    ```

-   Using an enumeration type as the counter in a counter-controlled loop:

    ```cpp
    for (Sport mySport = BASKETBALL; mySport <= SOCCER;
        mySport = static_cast<Sport>(mySport + 1))
    {
        // Do stuff with mySport. Each iteration it is a different sport.
    }
    ```

Reduce the amount of typing you have to do by using loops with `enum` types!

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/dRn1cBq6o6k?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe></div>
</div>

Input and Output of Enumeration Types
-------------------------------------

Enumeration types are stored internally as integers and therefore, will output numbers (not words) when displayed. However, we can write a function to convert the enumerated value into a `string`.

```cpp
string sportToString(Sport sport)
{
    switch (sport)
    {
    case BASKETBALL:
        return "Basketball"
    case FOOTBALL:
        return "Football";
    case HOCKEY:
        return "Hockey";
    case BASEBALL: 
        return "Baseball";
    case SOCCER:
        return "Soccer";
    case VOLLEYBALL:
        return "Volleyball";
    case TABLE_TENIS:
        return "Table Tennis";
    }

    return "error";
}
```

Notice that enumeration types can be passed as parameters to functions either by value or by reference.

Also, a function can return a value of the enumeration type.

```cpp
Sport stringToSport(const string& word)
{
    if (word == "Basketball")
        return BASKETBALL;
    else if (word == "Football")
        return FOOTBALL;
    else if (word == "Hockey")
        return HOCKEY;
    else if (word == "Baseball")
        return BASEBALL;
    else if (word == "Soccer")
        return SOCCER;
    else if (word == "Vollyball")
        return VOLLEYBALL;
    else // (word == "Table Tennis")
        return TABLE_TENNIS;
}

```