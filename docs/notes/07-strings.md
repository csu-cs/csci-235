The `string` Type
=================

*Chapter 7*

Introduction
------------

-   To use the data type, `string`, a program must include the header file `string`
    and is in the `std::` [namespace](07-namespaces).

    ```cpp
    #include <string>
    using namespace std;
    ```

-   A `string` is a sequence of 0 or more characters.
    +   The first character is in position `0`.
    +   The second character is in position `1`, etc.

-   Binary operator `+` performs the string concatenation operation.

-   The statement:  
    
    ```cpp
    string str1 = "Hello There";
    ```

    stores the string "Hello There" in `str1`.

-   The statement:
    
    ```cpp
    string str2 = str1;
    ```
    copies the value of `str1` into `str2`.

-   If `str1 == "Sunny"`, the statement:  

    ```cpp
    str2 = str1 + " Day";
    ```
    stores the string "Sunny Day" into `str2`.

-   Suppose `str1 == "Hello"` and `str2 == "There"`. The statement:
    
    ```cpp
    str3 = str1 + " " + str2;
    ```
    stores "Hello There" into `str3`. This statement is equivalent to the
    statement:
    
    ```cpp
    str3 = str1 + ' ' + str2;
    ```
-   Also, the statement:
    
    ```cpp
    str3 += ", Mickey";
    ```
    updates the value of `str3` by appending the `string` ", Mickey" to its old
    value. Therefore, the new value of `str3` is "Hello There, Mickey".

-   Long string literals can be split across multiple lines for readability. Adjacent string literals are automatically concatenated:

    ```cpp
    string longStr = "This is a very long string that "
                     "continues on the next line.";
    ```

Reading strings from input
--------------------------

-   `cin >> str` reads a single word (stops at the first whitespace).
-   `std::getline(cin, str)` reads an entire line (including spaces) up to the newline.

```cpp
string word;
cin >> word;            // reads up to the next space

string line;
getline(cin, line); // reads the rest of the current line (including spaces)
```

When you mix `>>` and `getline()`, use `cin.ignore()` to discard the remaining newline before calling `getline()`:

```cpp
string name;
int age;

cout << "Name: ";
getline(cin, name);

cout << "Age: ";
cin >> age;
cin.ignore(INT_MAX, '\n');
```

The Array-Subscript Operator
----------------------------

The *array-subscript operator* `[]` and `at()` allow access to an individual character in a `string`.

```{.cpp .numberLines}
string str1 = "know";

str1[0] == 'k'; // true
str1.at(0) == 'k'; // true
str1[3] == 'w'; // true
str1.at(3) == 'w'; // true

str1[0] = 's';
str1.at[0] = 's';
cout << str1 << endl; // snow
```

The number inside of the array subscript operator `[]` or `.at()` is called the *index* of the character.

-   `str1[index]` does **not** check whether `index` is valid. Using an invalid index results in *undefined behavior*.

-   If you need bounds-checked access, use `at()`, which throws an on an invalid index (an error is better than undefined behavior).

A string's length, and the return type of `.size()` and `.length()`, is `string::size_type`.

-   `string::size_type` is an *unsigned* integer type that is big enough to represent the size of any string.
-   Using `string::size_type` avoids signed/unsigned comparison warnings (e.g., comparing `int` with `.size()`).

The special value `string::npos` is the largest value of `string::size_type` (typically `static_cast<string::size_type>(-1)`). Many string functions return `string::npos` to mean "not found".

```cpp
const string PHIL_4_13 = "I can do all things through him who strengthens me.";
auto loc = PHIL_4_13.find("all"); // 9

if (loc != string::npos)
    cout << PHIL_4_13.substr(loc, 2) << endl; // do
```

Example of iterating over each character in a `string`:

```{.cpp .numberLines}
// Display a string with a space between each character.
for (string::size_type index = 0; index < str1.length(); ++index)
{
    cout << str1[index] << ' ';
}
```

> **Note:** `.length()` and `.size()` are equivalent for `string`.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/k_Y1vfziwxM?rel=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
</div>


Range-Based Loops
-----------------

An easier way to iterate!

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/G2MM0Q74w7I?rel=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
</div>

The `string` is a data type that contains a range of values (unlike the other types discussed, which each hold a single value). We can use a new type of loop, the range-based for loop, to iterate over each `char` in a `string`.

The following example code displays, `H e l l o ,  w o r l d!`.

```cpp
const string MESSAGE = "Hello, world!\n";

for (char letter : MESSAGE)
{
    cout << letter << ' ';
}
```

For each iteration of the loop in the example above, `letter` gets a copy of the next character in `MESSAGE`.

If you do not need to modify the string, declare the loop variable as `const char&` to avoid copying each character:

```cpp
for (const char& letter : MESSAGE)
{
    cout << letter << ' ';
}
```

::: tip

In professional code or when performance matters, `const char&` (instead of just `char`) is a good default for read-only loops for improved performance.

:::

If you want to edit the string, declare the loop variable as `char&`.

The following example changes all of the values to be the next letter in the alphabet.

```cpp
string greeting = "Hiya";

// Note the & for the loop variable below, so that greeting is updated.
for (char& letter : greeting)
{
    ++letter;
}

cout << greeting << endl; // Displays, "Ijzb"
```

::: tip

Use a range-based for loop to iterate over all strings if the following conditions are met:

1.  You don't need the index (we don't need to know where the character is in the string).
2.  You are iterating over the whole string from the first to last character.
:::

Common Gotchas
--------------

-   Forgetting to include `<string>` (or mixing `string` with C-style string functions) can lead to confusing compile errors.
-   Accessing `str[index]` out of range is undefined behavior; prefer `str.at(index)` when you want runtime bounds checking.
-   Using `int` for loop indexes and comparing them to `.size()`/`.length()` can cause signed/unsigned comparison warnings. Use `string::size_type` instead of `int` for this purpose.

Additional `string` Operations
------------------------------

-   Swap Function

    ```cpp
    string str1 = "Warm";
    string str2 = "Cold";
    str1.swap(str2);
    ```

    Now, `str1` is "Cold" and `str2` is "Warm".

-   The `substr()` member function the returns portion of a string from a starting index. See the following table for details.

    ```cpp
    string sentence = "Houston, we have a problem.";
    cout << sentence.substr(0, 7) << endl; // Houston
    cout << sentence.substr(9, 2) << endl; // we
    ```

-   The table below has many other useful `string` member functions.

-   The `find()` member function returns the position (index) of the parameter value within the string. If the value doesn't exist within the string, the constant `string::npos` is returned.
    
    ```cpp
    const string PHIL_4_13 = "I can do all things through him who strengthens me."; // ESV
    auto loc = PHIL_4_13.find("all"); // 9
    cout << PHIL_4_13.substr(loc, 2) << endl; // do
    ```

Table: Some useful `string` functions where `str1` and `str2` are `string` variables.

| Expression                             | Effect                                                                                                                                                                                          |
|---------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| `str1.at(index)`                       | Returns the element at the position specified by `index`.                                                                                                                                       |
| `str1[index]`                          | Returns the element at the position specified by `index`.                                                                                                                                       |
| `str1.append(num, ch)`                 | Appends `num` copies of `ch` to `str1`, in which `ch` is a char variable or a `char` constant.                                                                                                  |
| `str1.append(str2)`                    | Appends `str2` to `str1`.                                                                                                                                                                       |
| `str1.clear()`                         | Deletes all the characters in `str1`.                                                                                                                                                           |
| `str1.compare(str2)`                   | returns `1` if `str1 > str2`; returns `0` if `str1 == str2;` returns `-1` if `str1 < str2`.                                                                                                         |
| `str1.empty()`                         | Returns `true` if `str1` is empty; otherwise, it returns `false`.                                                                                                                                 |
| `str1.erase()`                         | Deletes all the characters in `str1`.                                                                                                                                                           |
| `str1.erase(pos, num)`                 | Deletes `num` characters from `str1` starting at position `pos`.                                                                                                                                |
| `str1.find(str2)`                      | Returns the index of the first occurrence of `str2` in `str1`. If `str2` is not found, the special value `string::npos` is returned.                                                            |
| `str1.find(str2, pos)`                 | Returns the index of the first occurrence at or after `pos` where `str2` is found in `str1`.                                                                                                    |
| `str1.find_first_of(str2, pos)`        | Returns the index of the first occurrence of any character of `str1` in `str2`. The search starts at `pos`.                                                                                     |
| `str1.find_first_not_of(str2, pos)`    | Returns the index of the first occurrence of any character of `str2` not in `str1`. The search starts at `pos`.                                                                                 |
| `str1.insert(pos, num, ch);`           | Inserts `num` occurrences of the character `ch` at index `pos` into `str1`; `pos` and `num` are of type `string::size_type`; `ch` is a character.                                               |
| `str1.insert(pos, str2);`              | Inserts all the characters of `str2` at index `pos` into `str1`.                                                                                                                                |
| `str1.length()`                        | Returns a value of type `string::size_type` giving the number of characters `str1`. Equivalent to `str1.size()` |
| `str1.replace(pos, num, str2);`        | Starting at index `pos`, replaces the next `num` characters of `str1` with all the characters of `str2`. If `num` \> the length of `str1`, all the characters until the end of `str1` are replaced. |
| `str1.substr(pos, len)`                | Returns a substring of `str1` starting at `pos`. The length of the substring is at most `len` characters. If `len` is too large, it means "to the end" of the `string` in `str1`.               |
| `str1.size()`                          | Returns a value of type `string::size_type` giving the number of characters str1. Equivalent to `str1.length()` .                                                                                     |
| `str1.swap(str2);`                     | Swaps the contents of `str1` and `str2`.                                                                                                                             |
