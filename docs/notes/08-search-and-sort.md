Searching and Sorting Arrays
============================

<script setup>
import selectionSortDiagram from '/images/arrays/selection_sort_example.svg'
</script>

*Chapter 8*

Searching an Array for a Specific Item
--------------------------------------

*Sequential search* (or *linear search*):

-   Searching a list for a given item, starting from the first array element

-   Compare each element in the array with the value being searched for

-   Continue the search until the item is found or no more data is left in the list.

Sorting an Array
----------------

*Selection sort* is one algorithm that orders a list by moving unsorted values to their proper position.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/yWQWRT3RhE4?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe></div>
</div>

Steps:

1.  Find the smallest element in the unsorted portion of the list.
2.  Swap it with the top value in the unsorted portion of the array.
3.  Start again with the rest of the list.

![Example of sorting using the steps described above with the example array `int list[8] { 37, 38, 62, 53, 14, 30, 19, 37 };`](/images/arrays/array-sort.svg 'Example of sorting using the steps described above with the example array `int list[8] { 37, 38, 62, 53, 14, 30, 19, 37 };`')


### Example Selection Sort

Lets step through an example of using the Selection Sort on an array of names.

```C++
string names[] {
	"Sophia", "Jackson", "Olivia", "Liam", "Emma", "Emma", "Ava", "Aiden"
};
```
Use the arrow buttons (◀ and ▶) below to step through the visualization.

<ProgressiveDiagram :src="selectionSortDiagram" />