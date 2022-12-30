Multidimensional Arrays
=======================

*Chapter 8*

Two-Dimensional Arrays
----------------------

*Two-dimensional array*: a collection of a fixed number of elements (of the same type) arranged in two dimensions. (Sometimes called matrices or tables)

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/0QW9R_e_vxo?showinfo=0&amp;rel=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
</div>

Declaration syntax:

```cpp
dataType arrayName[intExp1][intExp2];
```

-   `intExp1and` and `intExp2are` are expressions with positive integer values specifying the number of rows and columns in the array

-   A two-dimensional array is an array of arrays.

Accessing elements in a two-dimensional array:

```cpp
arrayName[intExp1][intExp2];
```

-   Where `intExp1` and `intExp2` are expressions with positive integer values and specify the row and column position.

-   Example:

    ```cpp
    double matrix[4][6]; // an array with 4 rows and 6 columns
    matrix[2][3] = 25.75;
    ```

    ![Visualization of the 2D array declared in the code above.](/images/arrays/array-2D.svg 'Visualization of the 2D array declared in the code above.'){id=fig:2DDec}

-   The value of `matrix[2]` is a one-dimensional array of length 6.

Two-dimensional arrays can be initialized when they are declared:

-   Elements of each row are enclosed within braces and separated by commas

-   All rows are enclosed within braces

-   For numeric arrays, unspecified elements are set to 0.

    ```cpp
    int board[4][3] {
        {  2,  3,  1 },
        { 15, 25, 13 },
        { 20,  4,  7 },
        { 11, 18, 14 }
    };
    ```

Enumeration types can be used for array indices:

```cpp
const int ROW_COUNT = 6;
const int COLUMN_COUNT = 5;
enum Car { GM, FORD, TOYOTA, BMW, NISSAN, VOLVO };
enum Color { RED, BROWN, BLACK, WHITE, GRAY };

int inStock[ROW_COUNT][COLUMN_COUNT];

inStock[FORD][WHITE] = 15;
```


There are two orders to process an entire two-dimensional array:

1.  *Row processing*: process a single row at a time (faster)
2.  *Column processing*: process a single column at a time

-   Two-dimensional arrays are stored in *row order*. That means that an entire row is stored together, followed by the next row.

    ```cpp
    char board[2][3] {
        {  'A',  'B',  'C' },
        {  'X',  'Y',  'Z' }
    };
    ```

![Visualization of how the 2D array declared above is ordered in computer memory. The hexadecimal numbers below each array element are memory addresses; they are all 1-byte apart because each `char` takes 1 byte. The out-of-bounds elements, shown in red, can be accessed by several indices; the ones shown are two examples.](/images/arrays/array-2D-Memory.svg 'Visualization of how the 2D array declared above is ordered in computer memory. The hexadecimal numbers below each array element are memory addresses; they are all 1-byte apart because each `char` takes 1 byte. The out-of-bounds elements, shown in red, can be accessed by several indices; the ones shown are two examples.'){id=fig:2DMem}

-   Each row of a two-dimensional array is a one-dimensional array.
-   To process, use algorithms like those for processing one-dimensional arrays.


## Examples

-   Initialization Examples:

    ```cpp
    double matrix[ROW_COUNT][COLUMN_COUNT];

    // Initialize all of row 3 to zeros.
    int row = 3;
    for (int col = 0; col < COLUMN_COUNT; ++col)
    {
        matrix[row][col] = 0;
    }

    // Initialize the whole array to zeros in **row order**
    for (int row = 0; row < ROW_COUNT; ++row)
    {
        for (int col = 0; col < COLUMN_COUNT; ++col)
        {
            matrix[row][col] = 0;
        }
    }
    ```

   
-   The end of initializing an array in column order is the same as the previous method above. However, the column-order method shown below is a *poor design* that will likely finish more slowly. Use row order whenever practical because that is how the array is laid out in memory.

    ```cpp
     // Poor Design: Initialize the whole array to zeros in **column order**
    for (int col = 0; col < COLUMN_COUNT; ++col)
    {
        for (int row = 0; row < ROW_COUNT; ++row)
        {
            matrix[row][col] = 0;
        }
    }
    ```

-   Displaying an array in a table:  

    ```cpp
    for (int row = 0; row < ROW_COUNT; ++row)
    {
        for (int col = 0; col < COLUMN_COUNT; ++col)
        {
            cout << setw(5) << matrix[row][col];
        }
        cout << endl;
    }
    ```

-   Input Example:

    ```cpp
    for (int row = 0; row < ROW_COUNT; ++row)
    {
        for (int col = 0; col < COLUMN_COUNT; ++col)
        {
            cin >> matrix[row][col];
        }
    }
    ```


Passing Two-Dimensional Arrays as Parameters to Functions
---------------------------------------------------------

Multidimensional arrays are passed by reference as parameters to a function.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/U1effjh6cLk?showinfo=0&amp;rel=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
</div>

-   The base address is passed as the actual parameter.

-   When declaring a two-dimensional array as a formal parameter, the size of the first dimension can be omitted, but not the second.

-   For example:

    ```cpp
    // Number of columns in the 2D arrays
    const int COLUMN_COUNT = 4;

    // The column count is fixed but the function accepts an array with 
    // any number of rows.
    void printMatrix(const int matrix[][COLUMN_COUNT], int rowCount);

    int main()
    {
        int array[5][COLUMN_COUNT] {}; // 5x4 array initialized to 0's.

        printMatrix(array, 5);

        return 0;
    }
    ```

*n*-Dimensional Arrays
======================

*n-dimensional array*: a collection of a fixed number of elements arranged in n
dimensions ($n \ge 1$)

Declaration syntax:  
`dataType arrayName[intExp1][intExp2]...[intExpN];`{.cpp}

To access an element:  
`arrayName[intExp1][intExp2]...[intExpN];`{.cpp}





