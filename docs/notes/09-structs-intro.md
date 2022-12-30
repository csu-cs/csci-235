Introduction to Records (structs)
=================================

*Chapter 9*

A `struct` is a *data type* that is a collection of a fixed number of components (called members), that are accessed by name.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/7kzQwPa5s2k?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe></div>
</div>

-   The *members* of a `struct` may be of different types.
-   The syntax for defining a struct:

    ```cpp
    struct StructName
    {
        dataType1 identifier1;
        dataType2 identifier2;
        …
        dataTypeN identiferN;
    }; //<- ends in a semicolon
    ```


A `struct` is a definition of a new data type, not a variable declaration. One must declare a variable of that type to use it. Remember, a *data type* is a set of possible values that can be stored in a variable with the matching type.

```cpp
/**
 * Defining a new type called "Movie" that holds metadata of a movie.
 */
struct Movie
{
    string title;
    int year;
    string storyline;
    string genre;
    double rating;
    int reviewCount;
    bool isFavorite;
};
```

Just like we can create an integer variable with  `int value;`{.cpp}, variables of our `struct` types can be declared (e.g., `Move favMove;`{.cpp}).

```cpp
Movie favMove; // example of declaring a variable with our movie type
```

![The variable favMovie after declaration. Move favMove;](/images/structs/struct-declaration.svg 'The variable `favMovie` after declaration. `Move favMove;`'){#fig:dec}

A `struct` type must be defined before it can be used. Normally, we put the `struct`s above the main and function prototypes. This is okay because we are defining a type, not a variable.

Accessing `struct` Members
--------------------------

Syntax to access a `struct` member:  `structVariableName.memberName`

The dot (`.`) is called the *member-access operator*.

To initialize the members of `favMovie`:

```cpp
// Initialize some of the members of this Movie variable.
favMovie.title = "Toy Story 3";
favMovie.year = 2010;
favMovie.isFavorite = true;

// Display the movie's title
cout << favMovie.title << endl; // "Toy Story 3"
```

![The variable favMovie after initializing some of its members.](/images/structs/struct-init.svg 'The variable `favMovie` after initializing some of its members.'){#fig:init}

Assignment
----------

-   The value of one `struct` variable can be assigned to another `struct` variable of the same type using an assignment statement (an aggrieve operation).

-   The following statement copies the contents of `favMovie` to `oldFavMovie` (both are `Movie` variables as defined above).

    ```cpp
    oldFavMovie = favMovie;
    ```

    It is equivalent to:

    ```cpp
    oldFavMovie.title = favMovie.title;
    oldFavMovie.year = favMovie.year;
    oldFavMovie.storyline = favMovie.storyline;
    oldFavMovie.genre = favMovie.genre;
    oldFavMovie.rating = favMovie.rating;
    oldFavMovie.reviewCount = favMovie.reviewCount;
    oldFavMovie.isFavorite = favMovie.isFavorite;
    ```

The values of `oldFavMovie` are copied to `favMovie`, so any future changes to members of `oldFavMovie`, will NOT be reflected in `favMovie`.

-   You can also assign values to `struct`s using an ordered list in `{}`

    ```cpp
    // Set the values of the oldFavMovie in order (title, year, …, isFavorite).
    oldFavMovie = { "Moana", 2016, "Ocean leads girl on journey", "animation",
        7.6, 264776, false };
    ```
    **Design Note**: This type of aggregate initialization may introduce bugs if you add new members to your `struct` type.

Comparison (using Relational Operators)
---------------------------------------

-   Two `struct` variables must be compared member-wise. **No** aggregate relational operations are given.

-   To compare the values of `movie1` and `movie2`:

    ```cpp
    if (movie1.title == movie2.title && movie2.year == movie2.year && …)
    ```

Input and Output
----------------

-   No aggregate input/output operations on a `struct` variable

-   Data in a `struct` variable must be read or written one member at a time

-   Example: output `favMovie` contents

    ```cpp
    cout << "Title: " << favMovie.title << '\n' // Toy Story 3
        << "Year: " << favMovie.year << '\n'    // 2010
        << "Storyline: " << favMovie.storyline << '\n'
        << "Genre: " << favMovie.genre << '\n'
        << "Rating: " << favMovie.rating << '\n'
        << "Review Count: " << favMovie.reviewCount << '\n'
        << "Favorite: $" << (favMovie.isFavorite ? "yes" : "no") << endl; // yes
    ```

Structs as Function Parameters and Return Values
------------------------------------------------

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/4XDMmwvOWxM?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe></div>
</div>

::: details Try the following code from the video.

<<< @/examples/09-records.cpp
:::

Arrays versus `struct`s
-----------------------

Table: A comparison of the operations that may be performed on arrays and `struct`s.

| **Aggregate Operation**    | **Array**           | `struct`   |
|---------------------------:|:-------------------:|:----------:|
| Arithmetic                 |                     |            |
| List Initialization        | ✓                   | ✓          |
| Assignment                 |                     | ✓          |
| Input / Output             | \*Strings only      |            |
| Comparison                 |                     |            |
| Parameter Passing          | \*By Reference Only | ✓          |
| Function Returning a Value |                     | ✓          |

Summary
-------

-   `struct`: a collection of a fixed number of components (called members) that are accessed by name.
-   Components can be of different types.
-   `struct` is a reserved word.
-   No memory is allocated for a `struct` type. A memory location is reserved when a variable is declared.
-   The dot operator (`.`) is the member-access operator
    +   Used to access members of a `struct`
-   The only built-in operations on a `struct` are the assignment and member access
-   Neither arithmetic nor relational operations are allowed on `struct`s
-   A `struct` can be passed by value or reference
-   A function can return a value of type `struct`
