The `string` Type
=================

*Chapter 7*

Introduction
------------

-   To use the data type, `string`, a program must include the header file `string`.

-   A `string` is a sequence of 0 or more characters
    +   The first character is in position `0`
    +   The second character is in position `1`, etc.

-   Binary operator + performs the string concatenation operation

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

The Array-Subscript Operator
----------------------------

*Array-subscript operator* `[]` allows access to an individual character in a `string`.

```{.cpp .numberLines}
string str1 = "know";

str1[0] == 'k'; // true
str1[3] == 'w'; // true

str1[0] = 's';
cout << str1 << endl; // snow
```

The number inside of the array subscript operator `[]` is called the *index* of the
character.

-   A string's size (the number of characters it can hold) is larger than the maximum value of an `int` or `unsigned int`. Therefore, a new data type, `string::size_type`, should be used.

    +   `string::size_type` An *unsigned* integer (data) type. This is like an `int` but guaranteed to be big enough to hold a `string` of any size. (**Very useful for looping over the length of a `string`!**) *Unsigned* means it cannot hold negative numbers.

    +   `string::npos` The maximum value of the (data) type `string::size_type`. This number is 4,294,967,295 (i.e., $2^{32} - 1$) on many machines.

    ```{.cpp .numberLines}
    string::size_type index = 0;
    string str1 = "know";
    str1[index] == 'k'; // true
    ```

-   Example of iterating over each character in a `string`:

    ```{.cpp .numberLines}
    // Display a string with a space between each character.
    for (string::size_type index = 0; index < str1.length(); ++index)
    {
        cout << str1[index] << ' ';
    }
    ```

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

for (char letter : MESSAGE) {
    cout << letter << ' ';
}
```

For each iteration of the loop in the example above, `letter` gets a copy of the next character in `MESSAGE`.

You may also decare the loop variable as a reference if you want to edit the string.

The following example changes all of the values to be the next letter in the alphabet.

```cpp
string greeting = "Hiya";

for (char& letter : greeting) {
    ++letter;
}

cout << greeting << endl; // Displays, "Ijzb"
```

::: tip

Use a range-based for loop to iterate over all strings if the following conditions are met:

1.  You don't need the index (we don't need to know where the character is in the string).
2.  You are iterating over the whole string from the first to last character.
:::

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
