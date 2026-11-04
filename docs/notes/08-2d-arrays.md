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
dataType arrayName[rowCount][colCount];
```

-   `rowCount` and `colCount` are expressions with positive integer values.
-   A two-dimensional array is an **array of arrays**. Each row is itself a one-dimensional array.

### Accessing Elements

Elements are accessed using two indices: `arrayName[rowIndex][colIndex]`. The first index selects the row, and the second selects the column; both start at `0`.

For example, this array represents a table with 3 rows and 4 columns:

```cpp
constexpr int ROW_COUNT = 3;
constexpr int COLUMN_COUNT = 4;
int scores[ROW_COUNT][COLUMN_COUNT] {
    { 83, 90, 77, 92 },
    { 85, 88, 91, 79 },
    { 94, 81, 86, 89 }
};
```

| Row index | Column `0` | Column `1` | Column `2` | Column `3` |
|----------:|-----------:|-----------:|-----------:|-----------:|
| `0`       | 83         | 90         | 77         | 92         |
| `1`       | 85         | 88         | 91         | 79         |
| `2`       | 94         | 81         | 86         | 89         |

So, `scores[1][2]` is `91`: row `1` (the second row), column `2` (the third column).

To visit every value, use a nested loop: the outer loop selects a row, and the inner loop visits each column in that row.

```cpp
for (int row = 0; row < ROW_COUNT; ++row)
{
    for (int col = 0; col < COLUMN_COUNT; ++col)
    {
        cout << scores[row][col] << ' ';
    }
    cout << '\n';
}
```

### Initialization

Two-dimensional arrays can be initialized at declaration using nested curly braces:

-   Elements of each row are enclosed within braces and separated by commas.
-   All rows are enclosed within a final pair of braces.
-   For numeric arrays, unspecified elements are automatically set to `0`.

```cpp
// A 4x3 array
int board[4][3] {
    {  2,  3,  1 }, // Row 0
    { 15, 25, 13 }, // Row 1
    { 20,  4,  7 }, // Row 2
    { 11, 18, 14 }  // Row 3
};
```

You can also partially initialize rows; the remaining elements will be zero:

```cpp
int table[3][3] {
    {1, 2}, // {1, 2, 0}
    {4}     // {4, 0, 0}
}; // Row 2 will be {0, 0, 0}
```

Enumeration types can be used for array indices:

```cpp
constexpr int ROW_COUNT = 6;
constexpr int COLUMN_COUNT = 5;
enum Car { GM, FORD, TOYOTA, BMW, NISSAN, VOLVO };
enum Color { RED, BROWN, BLACK, WHITE, GRAY };

int inStock[ROW_COUNT][COLUMN_COUNT];

inStock[FORD][WHITE] = 15;
```


### Memory Layout and Processing Order

Two-dimensional arrays are stored in **row-major order**. This means an entire row is stored together in contiguous memory, followed by the next row.

-   **Row processing**: Processing elements across a row before moving to the next row accesses contiguous memory locations.
-   **Column processing**: Processing elements down a column skips between rows in memory.

> [!TIP]
> When the algorithm allows it, row-first traversal can improve performance (by increasing the locality of processed values), especially for large arrays.

::: info Memory Layout Example

```cpp
// List initialization of a 2D array
char board[2][3] {
    {  'A',  'B',  'C' },
    {  'X',  'Y',  'Z' }
};
```


![Visualization of how the 2D array declared above is ordered in computer memory. The hexadecimal numbers below each array element are memory addresses; they are all 1-byte apart because each `char` takes 1 byte. The out-of-bounds elements, shown in red, can be accessed by several indices; the ones shown are two examples.](/images/arrays/array-2D-Memory.svg 'Visualization of how the 2D array declared above is ordered in computer memory. The hexadecimal numbers below each array element are memory addresses; they are all 1-byte apart because each `char` takes 1 byte. The out-of-bounds elements, shown in red, can be accessed by several indices; the ones shown are two examples.'){id=fig:2DMem}

:::

-   Each row of a two-dimensional array is a one-dimensional array.
-   To process, use algorithms like those for processing one-dimensional arrays.

::: details Demonstration of how C++ arrays are laid out in memory

<<< @/examples/08-arrays3D.cpp

:::

### Common Processing Examples

#### Initialization

```cpp
constexpr int ROW_COUNT = 10;
constexpr int COL_COUNT = 10;
int table[ROW_COUNT][COL_COUNT];

// Initialize to a times table (offset by 1)
for (int row = 0; row < ROW_COUNT; ++row)
{
    for (int col = 0; col < COL_COUNT; ++col)
    {
        table[row][col] = (row + 1) * (col + 1);
    }
}
```

#### Passing a Single Row
Because a 2D array is an "array of arrays," a single row matches the type of a 1D array. You can pass one row of a 2D array to a function expecting a 1D array.

```cpp
void printArray(const int list[], int length);

// In main or another function:
printArray(table[2], COL_COUNT); // Passes the third row (index 2)
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
        cout << '\n';
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


Passing 2D Arrays to Functions
-----------------------------

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/U1effjh6cLk?showinfo=0&amp;rel=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
</div>

When passing a 2D array as a parameter:

1.  **The first dimension is optional**: The number of rows can be omitted (e.g., `[]`).
2.  **The second dimension is REQUIRED**: You must specify the number of columns.

### Why is the second dimension required?

Arrays are stored in memory as one long line of elements. To find the location of `array[row][col]`, the compiler must skip a specific number of elements for each row.

$$ \text{address} = \text{base address} + (\text{rowIndex} \times \text{columnCount} + \text{colIndex}) \times \text{sizeof}(\text{type}) $$

If the compiler doesn't know the `columnCount`, it can't calculate how many elements ahead to skip for each row. This is why the second dimension is part of the "type" for a 2D array parameter.

```cpp
constexpr int COL_COUNT = 10;

// Correct Prototype: Row count is passed separately
void printMatrix(int matrix[][COL_COUNT], int rowCount);

int main()
{
    int table[5][COL_COUNT];
    
    // Pass the base address (no square brackets)
    printMatrix(table, 5); 
    
    return 0;
}
```

### Boundary Risks
C++ does not check array bounds. Each index must be within its own dimension: for a 10-column array, valid column indices are `0` through `9`. Even though rows are stored next to each other in memory, an out-of-range column index such as `table[0][10]` is still an invalid access; do not use it to reach another row. Accessing an element out of bounds of an array has undefined behavior.

> [!CAUTION]
> Accessing out-of-bounds indices can lead to unpredictable behavior, program crashes, or security vulnerabilities. Always use constants and careful loop logic to stay within bounds.

*n*-Dimensional Arrays
======================

*n-dimensional array*: a collection of a fixed number of elements arranged in n
dimensions ($n \ge 1$)

Declaration syntax:  
`dataType arrayName[intExp1][intExp2]...[intExpN];`{.cpp}

To access an element:  
`arrayName[intExp1][intExp2]...[intExpN];`{.cpp}

