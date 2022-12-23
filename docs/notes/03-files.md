File Input and Output
=====================

*Chapter 3*

Introduction
------------

A *file* is an area in secondary storage to hold info.

We use streams that are similar to `cin` and count with files, except they are `fstream` variables that we define.

File I/O is a five-step process:

1.  Include the `fstream` header.
2.  Declare file stream variables (of time `ifstream` for input and `ofstream` for output).
3.  Associate the file stream variables with the input/output sources.
4.  Use the file stream variables with `>>`, `<<`, or other input/output functions.
5.  Close the file stream (don’t forget this step).

<div style="max-width: 853px; margin: 0 auto; padding: 0;">
<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe width="560" height="315" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/MMp4zV05R5k?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe></div>
</div>
<div style="max-width: 853px; margin: 1em auto 0 auto; padding: 0;">
<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe width="560" height="315" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/QnCVoYnLIg8?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe></div>
</div>

## Example

```cpp
#include <fstream> // the preprocessor directive for using files
using namespace std;

int main() {
    // Declare variables
    ...
    // Declare that you will use a file stream.
    ifstream inData; // input file stream
    ofstream outData; // output file stream

    // Read in values
    inData.open("text.txt"); // opens data for reading
    inData >> firstName >> lastName >> GPA; // gets the data out of text.txt
    inData.close();
    ...

    // Write values to new file
    outData.open("out.txt"); // creates a new file for output
    outData << finalGrade; // put the data into out.txt
    outData.close();

    return 0;
}
```

Common Errors
-------------

-   Forgot to open your file. It will still compile and run, but give you erroneous results.
-   Tried to read input from a file that does not exist. Make sure the file is in the correct directly and that your code didn’t misspell the name.
-   If you specify a directly location in conjunction with your filename (e.g.,
`"C:\\my stuff\\data.txt"`), use forward slashes or escape your backslashes (e.g., `"c:/my stuff/data.txt"` or `"c:\\my stuff\\data.txt"`).
-   Avoid using absolute paths (paths that reverence the file location from the root of the drive rather than path relative to the program’s location.

Self-Check Questions
--------------------

1.  Name the five steps for reading from a file.
2.  Name the five steps for writing to a file.
3.  If you are opening a file and it is not there, what happens?
4.  If you are writing to a file that doesn’t exist yet, what happens?
