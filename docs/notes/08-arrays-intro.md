Introduction to Arrays
======================

*Chapter 8*

Types of Data Types
-------------------

-   *Simple data type*: variables of these types can store only one value at a time.
-   *Structured data type*: a data type in which each data item is a collection of other data items.

### Arrays

An *array* is a collection of a fixed number of elements (values), all of the same data type. A *one-dimensional array* has elements that are arranged in a list form.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/Rps7gBoKefU?rel=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
</div>

Array Declaration
-----------------

-   The syntax for declaring a one-dimensional array with `SIZE` elements:

    ```cpp
    dataType arrayName[SIZE];
    ```
    where `SIZE` is any constant expression that evaluates to a positive integer.
-   Here is an example declaration using a constant variable for the size.

    ```cpp
    // Creating an array of 24 doubles
    const int NUM_OF_STUDENTS = 24;
    double testScores[NUM_OF_STUDENTS];
    ```

-   We can create a new array with 8 elements:

    ```cpp
    int list[8];
    ```

    ![The array declared above has 8 consecutive locations in memory, each of which can store an integer value. Because nothing has been stored in the array yet, the initial values are unknown (could be anything).](/images/arrays/array-declaration.svg 'The array declared above has 8 consecutive locations in memory, each of which can store an integer value. Because nothing has been stored in the array yet, the initial values are unknown (could be anything).')

-   The size of the array must be constant. The size of an array must be known at compile time.

::: warning
Make sure that all declared arrays have constant sizes that are known at *compile time*. For example, you cannot get the size from the user using `cin` and then declare the array of that size. In CSCI 315, you will learn an alternative method of declaring arrays with sizes that are unknown at compile time, but that is beyond the scope of this course.
:::

Accessing Array elements
--------------------------

Just like with strings, we use the array subscript operator `[]` to access
individual elements of the array.

-   Here is how to access a single array element, where `indexExp` is an expression with a non-negative integer value (called the *index*).

    ```cpp
    arrayName[indexExp];
    ```

-   The value of the index is the position of the item in the array.

-   The first element of an array is at index `0` (we start `0`, not `1`)!
    +   Therefore, what is the last index in an array relative to its length?


-   We can store a value in this array:

    ```cpp
    list[4] = 100; // store 100 in the 5th element of the array
    ```

    ![`100` is now stored in memory at index 4 of the array named list.](/images/arrays/array-init.svg '`100` is now stored in memory at index 4 of the array named list.')

-   We can also access values from the array:

    ```cpp
    list[2] = 10;
    list[6] = 35;
    list[4] = list[2] + list[6];
    ```

    ![Setting and accessing array elements](/images/arrays/array-access.svg 'Setting and accessing array elements')

Processing One-Dimensional Arrays
---------------------------------

Examples of basic operations to perform on a one-dimensional array include:

-   Initializing
-   Inputting data
-   Outputting data stored in an array
-   Finding the largest and/or smallest element

Each operation requires the ability to step through elements of the array. This
is easily accomplished using a loop.

-   Given the declarations:

    ```cpp
    const int LIST_SIZE = 100;
    int list[LIST_SIZE]; //array of size 100
    ```

-   Use a `for`{.cpp} loop to access array elements:
    
    ```cpp
    for (int iter = 0; iter < LIST_SIZE; iter++)
        cin >> list[iter];
    ```

Array Index Out of Bounds Error
-------------------------------

The index of an array is *in bounds* if the index is `>= 0` and `<= (ARRAY_SIZE – 1)`

-   In C++, there is no guard against indices that are out of bounds.
-   If you index an array outside of the bounds, a runtime error will occur, or worse, the program will continue to run with unexpected results.


Array Initialization during Declaration
---------------------------------------

An array can be initialized when it is declared by listing the values inside curly braces. The array size is determined by the number of initial values in the braces.

Examples:

-   To declare an array with 5 elements and initializes them:

    ```cpp
    double sales[] { 12.25, 32.40, 16.90, 23, 46.84 };
    ```
-   An array can also be partially initialized during declaration:
    
    ```cpp
    double sales[10] {};
    ```
    Declares an array of 10 elements and initializes all of them to zero.
-   To declare a 10-element array and initializes `sales[0]` to `8`, `sales[1]` to `5`, `sales[2]` to `12`:
            
    ```cpp
    double sales[10] { 8.0, 5.0, 12.0 };
    ```
    All other elements are initialized to `0`.


Aggregate Operations cannot be performed on Arrays in C++
---------------------------------------------------------

*Aggregate operation*: any operation that manipulates the entire array as a
single unit.

Most aggregate operations are NOT possible with arrays. For example:

```cpp
const int LIST_SIZE = 5;
int myList[LIST_SIZE] { 1, 5, 3, 7, 16 };
int yourList[LIST_SIZE];
yourList = myList; // error: invalid array assignment
```

Solution: use a loop.

```cpp
// Traditional for loop
for (int index = 0; index < LIST_SIZE; ++index)
    yourList[index] = myList[index];
```

### Auto Variable Types
Remember, C++11 allows the auto declaration of variables.

-   Data type does not need to be specified when initializing a variable at declaration.

    ```cpp
    auto num1 = 15; // num1 is an int because 15 is an int.
    auto num2 = 15.0; // num2 is a double
    auto num3 = 'A'; // num3 is a char
    auto num4 = num1; // num4 is an int
    ```
-   The `auto`{.cpp} keyword is a placeholder for a type, but it is not itself a type. The compiler determines the type based on the value it receives.
-   There is no conversion between types, so your code is not only more flexible but more efficient.


### Range-Based For Loops

We have already used [range-based for loops with strings](07-strings#range-based-loops). They may also be used with arrays.

Example:

```cpp
double list[] { 45.3, 77.8, 103.9, 84.2, 88.5, 109.6, 99.5, 101.2, 31.8, 99.2 };
auto sum = 0.0; // a double

// Calculate the sum of all the elements in the list array.
for (auto num : list) // For each num in list
    sum = sum + num;
```

In the first part of this `for`{.cpp} loop, the variable, `num`, holds a copy of an element from the array (`list`) that is the second part. Range-based loops are very clean because you do not need to index the values in the array. However, you are limited to traversing the entire array from beginning to end.

::: warning

Range-based for loops will only work on arrays that are declared within that function. They will
not work on arrays that are passed as function parameters.
:::

Arrays as Parameters to Functions
---------------------------------

-   Array parameters are *only* passed *by reference*.
    +   Do **not** use `&`{.cpp} symbol when declaring an array as a formal parameter.
-   The length of the array is should be omitted from the square brackets. If provided, it is ignored by the compiler. However, if the function needs to know the length of the array, it must be passed as an additional parameter.
-   Example:
    
    ```cpp
    void funcArrayAsParam(int arrayOne[], double arrayTwo[], int length);
    ```
-   Can prevent a function from changing the actual parameter when passed by reference.
    +   Use `const` in the declaration of the formal parameter
    +   Example:

        ```cpp
        void exampleFunc(const int vals[], int size);
        ```
-   C++ does not allow functions to return an array. You can get around this limitation using something known as pointers, but that topic will be discussed in a later course.

::: tip

Important: If an array parameter is not to be modified inside the function, make it a const array parameter.

:::

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/oHA9jT8qqDE?rel=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
</div>

Base Address of an Array and Array in Computer Memory
-----------------------------------------------------

The *base address* of an array: address (memory location) of the first array
element

-   Give a one-dimensional array named `list`, its base address is the address of `list[0]`.

-   When an array is passed as a parameter, the base address of the actual array is passed to the formal parameter.

-   You can view the Base address for the array like this:

    ```cpp
    int array[5]; // Declare array with 5 elements
    cout << array; // Display the array’s base address (no square brackets)

    // The address of the first element matches the array's base address.
    cout << &array[0];
    ```

-   The base address is displayed in hexadecimal notation (for example, `0x1234CC00`). Hexadecimal is the base-16 numbering system and has sixteen distinct symbols used for each digit, most often the symbols `0`–`9` to represent values zero to nine, and `A`, `B`, `C`, ` D`, `E`, `F`. Each hexadecimal digit represents four binary digits (bits).


Table: A comparison of the small integers in different bases.

| Base 2  | 0 | 1 | 10 | 11 | 100 | 101 | 110 | 111 | 1000 | 1001 | 1010 | 1011 | 1100 | 1101 | 1110 | 1111 | 10000 |
|--------:|:-:|:-:|:--:|:--:|:---:|:---:|:---:|:---:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:-----:|
| Base 10 | 0 | 1 | 2  | 3  | 4   | 5   | 6   | 7   | 8    | 9    | 10   | 11   | 12   | 13   | 14   | 15   | 16    |
| Base 16 | 0 | 1 | 2  | 3  | 4   | 5   | 6   | 7   | 8    | 9    | A    | B    | C    | D    | E    | F    | 10    |


Common Errors with Arrays
-------------------------

1.  Arrays in C++ (and almost all programming languages) are zero-indexed. That means that the first index is zero, not one. The last index is the length minus one. It is easy to have an off-by-one error if you forget this fact.
2.  Array Index out of Bounds – can’t try to access an index beyond what you have – you get this error.
3.  Arrays are passed to a function by reference. Don’t forget that any changes to the array will persist after the function call. Use `const`{.cpp} to ensure an array is not modified.
4.  Can’t set one array equal to another with just the equal operator. Use a loop instead.
5.  A function can’t return an entire array (with what we know so far). Arrays are passed by reference anyway, so there should be no need to do this.

The span Container for Arrays
-----------------------------

In C++20 (the C++ standard that was released in 2020), a helpful container was added to associate an 
array with its length/size. Remember, that the array variable just stores the base address of the
array, so it doesn't keep track of how many elements are in the array. As a result, we often
need to pass the array size to a function parameter as an additional parameter. For example,

```cpp
void display (const double numbers[], int length)
{
    cout << "Length: " << length << '\n'; // display the array length
    for (int index = 0; index < length; ++index)
    {
        cout << numbers[index] << '\n';
    }
}
```

The [span](https://en.cppreference.com/w/cpp/container/span) container allows us to connect the array with its size. For example,

<<< @/examples/08-span.cpp
