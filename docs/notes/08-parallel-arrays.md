Parallel Arrays
===============

*Chapter 8*

Two (or more) arrays are called **parallel** if their corresponding elements hold related information.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/tYIwaCo0JJo?showinfo=0&amp;rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe></div>
</div>

::: details Try the following code from the video.

<<< @/examples/08-parallelArrays.cpp
:::

### The Problem: Multi-Type Data

Standard arrays can only hold elements of the **same data type**. If you need to store complex information about an object—such as a person's name (`string`), age (`int`), and height (`double`). A single basic array cannot do this. 

**Parallel arrays** solve this by using separate arrays of different types that are "linked" by their index. For any index `index`, the values at `name[index]`, `age[index]`, and `height[index]` all describe the same person.

### Organization and Declaration

To set up parallel arrays, define a shared constant for the size and declare each array:

```cpp
constexpr int CLASS_SIZE = 50;
int studentId[CLASS_SIZE];
char courseGrade[CLASS_SIZE];
```

![Visualization of the parallel arrays declared in the code above.](/images/arrays/array-parallel.svg 'Visualization of the parallel arrays declared in the code above.'){id=fig:parallel}


Another example:

```cpp
constexpr int COUNT = 6;
string name[COUNT]   = { "Michael", "Jessica", "Ashley", ... };
int age[COUNT]       = { 21, 17, 45, ... };
double height[COUNT] = { 6.7, 5.5, 5.9, ... };
```

### Processing with a Single Index

The primary advantage of parallel arrays is that a single index variable can iterate over and access all related data points simultaneously.

```cpp
// Display a table of all related information
for (int index = 0; index < COUNT; ++index)
{
    cout << setw(12) << name[index] 
        << setw(4) << age[index] 
        << setw(7) << height[index] << endl;
}
```

### The Power of Returning an Index

When working with parallel arrays, it is often better to write functions that return an **index** rather than a specific value.

1.  **Value-based function**: `double maxHeight(double height[], int size)` returns `6.7`. You know the height, but you don't know *who* has that height.
2.  **Index-based function**: `int tallestIndex(double height[], int size)` returns `0`. With index `0`, you can look up the name (`name[0]`), age (`age[0]`), and height (`height[0]`).

> [!TIP]
> Always prefer returning an index when the search result needs to be used across multiple parallel arrays.

### Searching and Validation

When searching for a specific item (a "needle" in a "haystack"), your function should handle the case where the item is not found by returning an invalid index, typically `-1`.

```cpp
int indexOfName(const string names[], string searchName, int size)
{
    for (int index = 0; index < size; ++index)
    {
        if (names[index] == searchName)
        {
            return index;
        }
    }
    return -1; // Not found
}
```

#### Important: Boundary Guards

Always validate the returned index before using it. Accessing an array with a negative index or an index beyond its size can cause crashes, nonsensical output, or security vulnerabilities that could be exploited by hackers.

```cpp
int personIndex = indexOfName(name, "Alice", COUNT);

if (personIndex >= 0 && personIndex < COUNT)
{
    cout << name[personIndex] << " is " << age[personIndex] << " years old.";
}
else
{
    cout << "Person not found in database.";
}
```
