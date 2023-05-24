Computers and Programming
=========================

*Chapter 1*

Only the first two weeks contain theses slide-based videos. After that, you will see more demonstration videos and resources.

This looks like a lot of videos, but each video is not very long (about 55 minutes total).

What is a computer?
-------------------

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/YzGzsR-INvY?rel=0&amp;showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe></div>
</div>

-   One that computes (makes calculations).

-   A *programmable computer* is an electronic device that: 
    1.  **Retrieves** numerical data
    2.  **Stores** numerical data
    3.  Performs **arithmetic** or **logical** operations on numerical data
    4.  **Outputs** numerical data


![NACA (NASA) - Dryden Flight Research Center “Computer Room” (1949)](/images/computers/Human_computers-Dryden.jpg "NACA (NASA) - Dryden Flight Research Center “Computer Room” (1949)")


### Hardware

![Hardware components](/images/computers/Hardware.svg)

-   *Input devices* feed data and programs into computers
    +   Keyboard
    +   Mouse
-   *Output devices* display results
    +   Monitor
    +   Printer
    +   Network Interface Card (NIC) (input/output)
-   *Central Processing Unit* (CPU)
    +   Brain of the computer
    +   Usually, the most expensive piece of hardware
    +   Carries out arithmetic and logical operations
    +   Commonly a single chip called a microprocessor.
-   *Main memory* (RAM)
    +   Main memory is an ordered sequence of memory cells.
        *   Each cell has a unique location in main memory, called the address of the cell
        *   Also called *primary storage* or physical memory
    +   Each cell can contain either a programming instruction or data.
-   Secondary storage: device that stores information permanently
    +   Hard drives 
    +   Flash drives
    +   CDs
    +   Tapes


### Software


Software: programs that do specific tasks. There are two types of software.
1.  *System programs* control the computer.
    +   Operating system monitors the overall activity of the computer and provides services such as:
        *   Memory management
        *   Input/output activities
        *   Storage management
2.  *Applications* perform a specific task. For example,
    +   Word processors
    +   Web browsers
    +   Games



What does a computer understand?
--------------------------------

The language of computers.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/TFTxSTn2-4o?rel=0&amp;showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe></div>
</div>

### Two Types of Signals

1.  *Analog* signals: continuous wave forms
2.  *Digital* signals: sequences including only a finite set of values (generally only 0s and 1s, which is call Binary).

![Examples of Analog and Digital Signals](/images/computers/Signals.svg "Examples of Analog and Digital Signals")

### Binary

-   *Machine language*: language of a computer a binary sequence (0s and 1s).
-   *Binary digit* (*bit*): the digit 0 or 1  
-   *Binary code* (binary number): a sequence of 0s and 1s 


|     Decimal    |   0  |   1  |    2  |    3  |     4  |     5  |     6  |     7  |      8  |      9  |
|---------------:|-----:|-----:|------:|------:|-------:|-------:|-------:|-------:|--------:|--------:|
|      Binary    |   0  |   1  |   10  |   11  |   100  |   101  |   110  |   111  |   1000  |   1001  |


-   Bit: A binary unit (can be either 0 or 1)
-   Byte: A sequence of eight bits
-   Kilobyte (KB): 210 bytes = 1024 bytes
-   ASCII (American Standard Code for Information Interchange)
    +   128 characters
    +   A is encoded as 01000001 (65th ASCII character)
    +   3 is encoded as 00110011 (51st ASCII character)

|     Unit         |     Symbol    |     Size         |                 | Size in Bytes |                     Size in Bytes      |
|------------------|---------------|------------------|-----------------|:-------------:|---------------------------------------:|
|     Byte         |               |     8   bits     |                 |   $2^{0}$     |                                   1    |
|     Kilobyte     |     KB        |   $2^{10}$ bytes |                 |   $2^{10}$    |                                1024    |
|     Megabyte     |     MB        |   $2^{10}$ KB    |    1024 KB      |   $2^{20}$    |                           1,048,576    |
|     Gigabyte     |     GB        |   $2^{10}$ MB    |    1024 MB      |   $2^{30}$    |                       1,073,741,824    |
|     Terabyte     |     TB        |   $2^{10}$ GB    |    1024 GB      |   $2^{40}$    |                   1,099,511,627,776    |
|     Petabyte     |     PB        |   $2^{10}$ TB    |    1024 TB      |   $2^{50}$    |                 1125899,906,842,624    |
|     Exabyte      |     EB        |   $2^{10}$ PB    |    1024 PB      |   $2^{60}$    |           1,152,921,504,606,846,976    |
|     Zettabyte    |     ZB        |   $2^{10}$ EB    |    1024 EB      |   $2^{70}$    |       1,180,591,620,717,411,303,424    |
|     Yottabyte    |     YB        |   $2^{10}$ ZB    |    1024 ZB      |   $2^{80}$    |   1,208,925,819,614,629,174,706,176    |


### The Evolution of Programming Languages

-   Early programmed written in machine language 
-   To calculate `wages = rate × hours`, where the rate is 20 and wages is 40 in machine language:

| Machine Code                          | Purpose                         |
|:--------------------------------------|:--------------------------------|
| `11000111 01000101 11111100 00010100` | Set rate to 20                  |
| `11000111 01000101 11111000 00101000` | Set hours to 40                 |
| `00000000 10001011 01000101 11111100` | Move the rate for multiplication|
| `00001111 10101111 01000101 11111000` | Multiply the rate by the hours  |
| `00000000 10001001 01000101 11110100` | Store the results in wages      |


Using assembly language instructions,  
rate = 20  
hours = 40  
wages = rate × hours  
can be written as:

| Assembly Code             | Purpose                         |
|:--------------------------|:--------------------------------|
| `mov 20, ecx`             | Set rate to 20                  |
| `mov 40, edx`             | Set hours to 40                 |
| `mov eax, ecx`            | Move the rate for multiplication|
| `imul    eax, edx`        | Multiply the rate by the hours  |
| `mov DWORD PTR [r8], eax` | Store the results in wages      |


-   *High-level languages* include FORTRAN, COBOL, Basic, Pascal, C, C++, Java, Python, and C#.
-   *Compiler*: translates a program written in a high-level language into machine language
-   The equation, wages = rate × hours, can be written in C++ as: 
    ```
    rate = 20;
    hours = 40;
    wages = rate * hours;
    ```

### Introducing C++

-   Without software, the computer is useless.
-   Software is developed with programming languages like *C++*.
-   *C++* is suited for a wide variety of programming tasks with a focus on:
    +   Performance
    +   Efficiency
    +   Flexibility of use


How does a C++ program run?
---------------------------

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/0Yaz_8Ogvy4?rel=0&amp;showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe></div>
</div>


### Processing a C++ Program

C++ Example Program

```
/*
 * Displays the message: "Hello World!"
 */
#include <iostream>
using namespace std;
int main()
{
    cout << "Hello World!" << endl;
    return 0;
}
```

Program Output when Run

```
Hello World!
```

![Processing a C++ Program](/images/computers/ProcessingCpp.svg "The steps to process a C++ program")

1.  Create a plain-text file with the *source* program in C++
2.  *Preprocessor directives* begin with # and are processed by the preprocessor.
3.  Use the *compiler* to:
    +   Check that the program obeys the language rules.
    +   Translate into machine language (object program).
4.  *Linker*:
    +   Combines object program with other programs provided by a *Software Development Kit* (SDK) to create executable code.
    +   *Library*: contains prewritten code you can use
5.  *Loader*: Loads executable program into main memory.
6.  The last step is to *execute* the program.


-   Some *IDE*s (like Visual Studio) compile, link, and run with single Build or Rebuild command.
-   IDE = Integrated development environment



An Early History of Computing
-----------------------------

This is a great overview of the early computing, which is included in Chapter 1. You may skip to 2 minutes 27 seconds into the video to start.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/O5nskjZ_GoI?rel=0&amp;showinfo=0&amp;start=147" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
</div>
