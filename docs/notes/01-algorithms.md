Algorithms and Problem Solving
==============================

*Chapter 1*

Algorithms and Flowcharts (Designing a Program)
-----------------------------------------------

Reference this presentation for your first homework.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/q63KRVnK5To?rel=0&amp;showinfo=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen="allowfullscreen"></iframe></div>
</div>

### Five Simple Ideas Used to Create All Programs

1.  Sequential Processing
    +   A list of instructions performed in order
2.  Conditional Execution
    +   If…, then…, else…
3.  Looping or Iteration
    +   Repeated behavior (i.e., while there are cookies on the plate, keep eating cookies)
4.  Problem Decomposition (i.e., stepwise refinement, top-down design)
    +   Breaking the problem into sub-problems that can be solved independently.
5.  Functions
    +   A set of instructions that return a single result (answer a question). 

### Complexity

Most computers only really “understand” about 100 different instructions.

Powerful applications take advantage of the extreme number of possible instruction combinations.

Chess is a good analogy:

-   6 types of pieces, each moves in a simple pattern.
-   Possible/playable chess games (assuming an avg. game has 30 moves) is 4,670,033.

### Algorithms

An *algorithm* is A step-by-step list of instructions for solving a problem. The solution must be determined in a *finite* amount of time.

Algorithms can be expressed in many kinds of notations (e.g., natural language, psedocode, flowcharts, etc.)

### Flowcharts

A flowchart is one way to representation an algorithm and uses the following symbols. 

| Symbol                 | Name      | Description                                         |
|-----------------------:|:---------:|:----------------------------------------------------|
| ![Terminal](/images/algorithms/Flowchart_Terminal.svg)       | Terminal  | Indicates the beginning and ending of an algorithm. |
| ![Line](/images/algorithms/Flowchart_Line.svg)           | Flow Line | Shows the order of operation by connecting one symbol to the next symbol.|
| ![Input/Output](/images/algorithms/Flowchart_IO.svg)   | Input/Output | An action where either input is received from outside the program (from the user, a text file, etc.) or the program is outputting information (on the screen, to a file, to a printer, etc.) |
| ![Process](/images/algorithms/Flowchart_Process.svg)        | Process | The execution of any mathematical operation or other built-in instruction(s). |
| ![Call-Process](/images/algorithms/Flowchart_Predefined_Process.svg)        | Call-Process | An action defined elsewhere (in another flowchart). |
| ![Decision](/images/algorithms/Flowchart_Decision.svg)       | Decision | An action where a decision is made where the outcome is either true or false (Boolean). |
| ![Flow Connector](/images/algorithms/Flowchart_Connector.svg) | Flow Connector| Multiple arrows converge at a flow connector. |
| ![Off-Page Connector](/images/algorithms/Flowchart_Page_Connector.svg) | Off-Page Connector | Indicates that the flowchart continues on another page. |




Creating Solutions
------------------

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/oBDncytnVP4?rel=0&amp;showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe></div>
</div>

-   *Algorithm*
    +   Step-by-step problem-solving process
    +   In finite amount of time
-   *Programming* is a process of problem solving.

### Programming with the Problem Analysis–Coding–Execution Cycle

![Development Process](/images/computers/DevelopmentProcess.svg "Development Process")


1.  *Analyze* the problem
    1.  Thoroughly understand the problem and all requirements
        *   Does program require user interaction?
        *   Does program manipulate data?
        *   What is the output?
    2.  If the problem is complex, divide it into subproblems
        *    Analyze and design *algorithms* for each subproblem
    3.  Check the correctness of algorithm
        *   Can test using sample data
        *   Some mathematical analysis might be required

2.  *Implement* the algorithm
    1.  Once the algorithm is designed and correctness verified, write the equivalent code in high-level language.
        *   Enter the program using text editor. This is called the *implementation* of the algorithm.
    2.  Compile code
    3.  If compiler generates errors
        *   Look at code and remove errors
        *   Run code again through compiler 
    4.  If there are no syntax errors, the compiler generates equivalent machine code.
        *   The compiler guarantees that the program follows the rules of the language. It does **not** guarantee that the program will run correctly.
    5.  Linker links machine code with system resources

3.  Execution (run the compiles program)
    1.  Once compiled and linked, the loader can place program into main memory for execution.
    2.  The final step is to execute the program.

4.  *Maintenance*
    +   Use and modify the program if the problem domain changes.


Programming Methods
-------------------

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/ZJLURiDaokQ?rel=0&amp;showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe></div>
</div>

Two popular approaches to programming design

1.  Structured (e.g., Procedural)
2.  Object-oriented

There are [many other programming paradigms](https://en.wikipedia.org/wiki/Comparison_of_programming_paradigms).


### Structured Programming

*Procedural design* is a subset of structured design: 

-   Dividing a problem into smaller subproblems
-   A solution to a subproblem is a “module” or “procedure” and is simply a series of computation steps to be carried out.
-   Procedural design approach is also called:
    +   Top-down (or bottom-up) design
    +   Stepwise refinement
    +   Modular programming

### Object-Oriented Programming

*Object-oriented design*:

-   Identify components called objects.
-   Determine how objects interact with each other
-   Specify relevant data and possible operations to be performed on that data.
-   Each object consists of data and operations on that data.
-   An object combines data and operations on the data into a single unit
-   A language that supports object-oriented design is called an object-oriented programming (OOP) language
-   Must learn how to represent data in computer memory, how to manipulate data, and how to implement operations.
-   C++ was designed to support object-oriented programming.
-   Object-oriented design is used with structured design.



