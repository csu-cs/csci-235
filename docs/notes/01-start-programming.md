Start Programming in C++
========================

Before continuing, make sure you have installed the required software in [Getting Started - Software Setup](/notes/01-getting-started#software-setup).

In this guide, you will learn:

1. How to use the command-line interface.
2. How to compile C++ programs.
3. How to run your compiled programs.

The Command-Line Interface (CLI)
--------------------------------

Demonstration on how to get up and running with the command line to compile and run C++ programs.

-   Powerful method of interacting with the computer
-   Accepts successive lines of typed commands (instructions)
-   Commands may print (display) text output.


<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/tfxB2gYwXJ4?rel=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
</div>

::: tip
The above video says that you need to open "Run Terminal" if you are using Windows. However, that is no longer necessary. You can just open up the regular command prompt.
:::


### Accessing the CLI

| OS | Name | Icon |
|----|------|------|
| Windows | “Command Prompt” or “CMD” | ![](/images/setup/cli-windows.png) |
| macOS   | “Terminal” | ![](/images/setup/cli-macos.png) |
| Linux   | “Terminal,” “Shell,” or similar | ![](/images/setup/cli-linux.png) |


### Example Commands


| **Windows** | **macOS / Linux** | **Description**                                        |
|-------------|-------------------|--------------------------------------------------------|
| cd          | cd                | Change directory                                       |
| dir         | ls                | List directory                                         |
| copy        | cp                | Copy a file or directory                               |
| move        | mv                | Move a file or directory (also useful to rename files) |
| del         | rm                | Remove a file or directory                             |
| mkdir       | mkdir             | Make a new directory                                   |
| cls         | clear             | Clear the CLI                                          |

### Parameters

-   A parameter is an additional piece of information passed to the command.
-   Parameters are space separated
-   Examples (in Windows)
    -   `dir /?`
        -   Displays helpful information about the dir command including what additional parameters do.
    -   `dir /w /p`
        -   Displays a list of files and subdirectories in a directory in a wide list view and pauses after each screenful of information.


Compiling with GCC
------------------

Before continuing, you should have Visual Studio Code and g++ to make your first C++ program. Refer back to [Getting Started](01-getting-started) if needed.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/VRi0heDDg4M?rel=0&amp;showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe></div>
</div>

### A Simple C++ Program

-   Create a text file named `hello.cpp` (cpp is the extension we give to C++ source code files).
-   Type the following code into the file   (displays “Hello World!” on the screen).

	```cpp
	#include <iostream>
	using namespace std;

	int main()
	{
		cout << "Hello World!" << endl;

		return 0;
	}
	```

### Compiling with g++

In the command-line interface:

-   Change the directory to the location of `hello.cpp`.
    -   For example, `cd "C:\Users\Sean\235"`
    -   Hint: Put double quotes around any parameters with spaces.
    -   Hint: Hit tab while typing the path to autocomplete the rest of the directory name.
-   Run g++ with the following command:
    -   `g++ -Wall -Wextra -o world hello.cpp`
-   No output means it worked!

### Understanding the Command

`g++ -Wall -Wextra -o world hello.cpp`

g++ is the name of the compiler program and the rest of the lines are parameters.

| **Parameter** | **Parameter Description**                                                       |
|---------------|---------------------------------------------------------------------------------|
| `-Wall `      | Enables additional warnings about questionable constructions that are easily avoid. |
| `-Wextra `    | Enables even more helpful warnings. |
| `-o world`    | Name the executable file we are creating “world”.                               |
| `hello.cpp`   | The name of the input file (must be the last parameter).                        |

### Additional Useful Parameters

`-fmax-errors=5`

-   This will tell the compiler to output at most 5 errors.
    -   The number 5 can be changed to any number you want.
-   Sometimes when we have one problem, it produces a ton of errors. Use this parameter to only show the first however many.
-   Always look at the first error first.

`-std=c++23`

-   This will tell the compiler to use the latest (2023) standard of C++.
-   This may be necessary if you are using more recent features of the language.
-   If your compiler doesn’t support the 2020 standard, you can try a previous standard:
    -   `-std=c++20`
    -   `-std=c++17`

`-pedantic` or `-Wpedantic`

-   GCC compilers always try to compile your program if this is at all possible.
    However, in some cases, the C++ standard specifies that certain extensions
    are forbidden.
-   Use this option to receive warnings when your code can compile but is NOT valid C++.
-   Helps track down errors and ensures a better assignment grade.

`-Wmissing-declarations`

-   Notifies you if you accidentally define a function without a [prototype (i.e. forward declaration)](06-functions-intro#function-prototype-function-declarations).

### Run the Hello Program

-   To run your newly-compiled program, type the name of the program  
    `world`
-   In macOS or Linux, you may need to put a `./` before the program name.  
    `./world`

![Example Output](/images/setup/program-output.svg)