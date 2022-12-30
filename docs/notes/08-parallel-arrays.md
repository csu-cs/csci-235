Parallel Arrays
===============

*Chapter 8*

Two (or more) arrays are called parallel if their corresponding elements hold
related information.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/tYIwaCo0JJo?showinfo=0&amp;rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe></div>
</div>

::: details Try the following code from the video.

<<< @/examples/08-parallelArrays.cpp
:::

Example:

```cpp
const int CLASS_SIZE = 50;
int studentId[CLASS_SIZE];
char courseGrade[CLASS_SIZE];

// Arrays initialized here...

// Display each student's id and grade
for (int index = 0; index < CLASS_SIZE; ++index)
{
    cout << "The student with id " << studentId[index] << " earned a "
        << couresGrade[index] << " in the class.\n";
}
```

![Visualization of the parallel arrays declared in the code above.](/images/arrays/array-parallel.svg 'Visualization of the parallel arrays declared in the code above.'){id=fig:parallel}
