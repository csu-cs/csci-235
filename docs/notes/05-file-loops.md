Reading from Files with Loops
=============================

Often we don't know how much data is within a file. Therefore, we use a 
sentinel-controlled loop to end when we reach the end of the file (EOF).

`EOF`-Controlled While Loop
---------------------------

<div class="youtube">
<div><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/VW-Q3ZD_W0w?rel=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
</div>

::: details This is the data file from the video, `data.txt`

<<< @/examples/05-data.txt
:::

Often, we want to read a file until we are at the end of a file (`EOF`). If you
are importing from a file, there is a function called `eof()`, which returns
`true` if you have reached the end of the file, and `false` otherwise.
Alternatively, the input stream variable itself will return `true` if (1) you are not at end of the file and (2) you do not have an input error.

```cpp
ifstream inFile; // declare the input stream variable
string word; // variable to hold input

inFile.open("test.txt"); // open the file

inFile >> word; // read first value (if there is a value to read)
while (inFile) // make sure the stream is good (no errors, not at EOF).
{
    ... // do something with word.
    inFile >> word; // update the loop control variable
}
inFile.close();// close the file
```

If you use `eof()`, make sure your input file does not have a blank line of
space after the last value.