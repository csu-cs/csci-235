Arrays as Strings
=================

*Chapter 8*

Arrays of Strings
-----------------

Strings in C++ can be manipulated using either the data type string or character
arrays (C-strings).

-   To declare an array of 100 elements of type string:

    ```cpp
    string list[100];
    ```

-   Basic operations, such as assignment, comparison, and input/output, can be performed on values of the string type.

-   The data in `list` can be processed just like any one-dimensional array.

```cpp
string names[100];
names[1] = "Abednego";
names[2] = "Meshach";
names[3] = "Shadrach";
```
![Visualization of the array of strings declared in the code above.](/images/arrays/array-of-strings.svg 'Visualization of the array of strings declared in the code above.'){id=fig:2DMem}


C-Strings (Null-Terminated Character Arrays)
============================================

A *character array* is an array whose elements are of the `char`{.cpp}.

A *c-string* is a *null-terminated* character array.

-   Null-terminated means the last character in the array is null (i.e., the character `'\0'`{.cpp} or `0`).
-   `'A'`{.cpp} is a `char`{.cpp}.
-   `"A"`{.cpp} is a c-string. It represents an array of two characters, `'A'`{.cpp} and `'\0'`{.cpp}.
-   `char name[16];`{.cpp}  
    is a character array that can hold a c-string with up to 15 characters and the null character.
-   Components after the null character (if any) are unused and ignored.
-   You do not need to have `#include <string>`{.cpp} for c-strings.


<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/510w-d3NVUk?showinfo=0&amp;rel=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
</div>

::: info

The code for this video was written using **Visual Studio**, which is really nice IDE (integrated development environment) for Windows. It is installed on all the lab computers and the [Community Edition](https://visualstudio.microsoft.com/vs/community/) is available to download for free. [Go here for more information.](08-ide)

As with all the example code for this class, this is standard C++ code and will work with our usual compiling process.
:::

The size (or length) of an array can be omitted if the array is initialized during declaration.

-   `char name[] = "John";`{.cpp}

    +   Declares an array of length 5 and stores the c-string `"John\0"`{.cpp} in it.

Useful string manipulation functions from the `cstring` header:

-   `strcpy(char a[], char b[])`{.cpp} – copies a c-string (an unsafe operation, because the source array may not fit in the destination array and overflow into other memory locations)
-   `strncpy(char a[], char b[], int num)`{.cpp} – safely copies a c-string with up to num chars
-   `strcmp(char a[], char b[])`{.cpp} – compares c-strings, character by character. Returns 0 if the parameters are equal, \< 0 if $a < b$ and \> 0 if $a > b$.
-   `strlen(char a[])`{.cpp} – returns a c-string's length (the number of characters before `'\0'`)

String Comparison
-----------------

Strings are compared character by character starting from the beginning. The
following are **true**:

```cpp
strcmp("Air", "Boat") < 0
strcmp("Air", "An") < 0
strcmp("Bill", "Billy") < 0
strcmp("Bill", "Bill") == 0
strcmp("Hello", "hello") < 0
```

Reading and Writing C-Strings
-----------------------------

-   Most rules for arrays also apply to c-strings (which are null-terminated character arrays).
    +   Aggregate operations, such as assignment and comparison, are not allowed on arrays.
    +   However, C++ does allow aggregate operations for the input and output of C-strings.
-   Example:

    ```cpp
    char name[16];
    cin >> name; // Danger! Input could be more characters than fit in name[].
    ```
-   Use `cin.get()`{.cpp} is better because you can ensure that you do not overflow the array (see below for details).

To read strings with blanks, use the `get` function:

```cpp
int MAX_LENGTH = 16;
char name[MAX_LENGTH]  // space for 15 letters + '\0'
cin.get(name, MAX_LENGTH); // read in up to 15 chars, stop at newline
cin.get(name, MAX_LENGTH, ' '); // read in up to 15 chars, stop at blank space
```

-   Stores the next `MAX_LENGTH` characters into `name` but the newline character is not stored in `name`.
-   If the string has fewer than `m` characters, reading stops at the newline character.
-   Add a third parameter to use a delimiter instead of a newline:
    +   `cin.get(str, MAX_LENGTH, ' ');`{.cpp}
    +   The previous statement reads in m characters or until a blank space is reached.

To output a c-string:  
`cout << name;`{.cpp}

-   Outputs the content of `name` on the screen
-   `<<`{.cpp} continues to write the contents of `name` until it finds the null character
-   If `name` does not contain the null character, then the output may be strange.
    +   The output continues through memory adjacent to `name` until a `'\0'`{.cpp} is found.

`string` to C-string
--------------------

String variables may hold filenames to be opened with file streams. However, conversion from strings to c-strings is helpful for other reasons.

Syntax: 

```cpp 
strVar.c_str();
```

-   Where `strVar` is a variable of type string

