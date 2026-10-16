Enumeration Types
=================

*Chapter 7*

Use an enumeration when a variable should represent one choice from a fixed set, such as a color, a school standing, or a sport. An enumeration (or `enum`) is a programmer-defined type whose values are named constants.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/aq7Noc9BQL0?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
</div>

-   An enum definition gives the type a name and lists its allowed named values.
-   Syntax:

    ```cpp
    enum TypeName { VALUE_1, VALUE_2, VALUE_3 };
    ```
-   This definition creates a type, not a variable. Declare a variable of that type separately: `TypeName variableName;`.
-   `TypeName` is the type; each listed identifier (`VALUE_1`, `VALUE_2`, …) is an *enumerator*.
-   Unless values are specified explicitly, enumerators receive consecutive integer values starting at `0`.
-   With this unscoped `enum` syntax, enumerator names are introduced into the surrounding scope and must be unique there.

Examples of Defining Enumeration Types
--------------------------------------

The following defines the type `Color` with the values `BROWN`, `BLUE`, `RED`, `GREEN`, and `YELLOW`.

```cpp
enum Color { BROWN, BLUE, RED, GREEN, YELLOW }; // Define new type

Color favColor;  // Define variable of this new type
favColor = BLUE; // Assign our variable one of the defined values
```


The following defines the type `Standing` with the values `FRESHMAN`, `SOPHOMORE`, `JUNIOR`, and `SENIOR`.

```cpp
enum Standing { FRESHMAN, SOPHOMORE, JUNIOR, SENIOR };
```


Common Mistakes
---------------

Types and their values must be valid identifiers (i.e., they must follow the same rules
as variable names).

```cpp
enum Grade { 'A', 'B', 'C', 'D', 'F' }; // [!code error] illegal enumeration type
enum Place { 1ST, 2ND, 3RD, 4TH}; // [!code error] illegal enumeration type

// cannot define value, APPLE in multiple types (as shown below)
enum Fruit { APPLE, ORANGE, PEACH };
enum Food { MILKSHAKE, BURGER, EGGS, APPLE }; // [!code error] 
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
    fav = mostPopularSport + 2; // [!code error] error: invalid conversion from 'int' to 'Sport'
    fav = BASKETBALL + HOCKEY;  // [!code error] error: invalid conversion from 'int' to 'Sport'
    fav++; // [!code error] error: no 'operator++(int)' declared for postfix '++'
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
    string result;

    switch (sport)
    {
    case BASKETBALL:
        result = "Basketball";
        break;
    case FOOTBALL:
        result = "Football";
        break;
    case HOCKEY:
        result = "Hockey";
        break;
    case BASEBALL: 
        result = "Baseball";
        break;
    case SOCCER:
        result = "Soccer";
        break;
    case VOLLEYBALL:
        result = "Volleyball";
        break;
    case TABLE_TENNIS:
        result = "Table Tennis";
        break;
    default:
        result = "error";
    }

    return result;
}
```

Notice that enumeration types can be passed as parameters to functions either by value or by reference.

Also, a function can return a value of the enumeration type.

```cpp
Sport stringToSport(const string& WORD)
{
    Sport result;

    if (WORD == "Basketball")
    {
        result = BASKETBALL;
    }
    else if (WORD == "Football")
    {
        result = FOOTBALL;
    }
    else if (WORD == "Hockey")
    {
        result = HOCKEY;
    }
    else if (WORD == "Baseball")
    {
        result = BASEBALL;
    }
    else if (WORD == "Soccer")
    {
        result = SOCCER;
    }
    else if (WORD == "Volleyball")
    {
        result = VOLLEYBALL;
    }
    else // (WORD == "Table Tennis")
    {
        result = TABLE_TENNIS;
    }

    return result;
}

```