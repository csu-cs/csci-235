More C++ Basics
===============

Basic Elements of C++ (Part 3)
------------------------------

This 32-minute video is an overview of the third part of Chapter 2.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/XPnJDC06XMM?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe></div>
</div>

String Variables and String Input
---------------------------------

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/Md3JPZqMaqY?rel=0&amp;showinfo=0" loading="lazy" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe></div>
</div>

::: details Click me to view the code from the video.

<<< @/examples/02-stringStory.cpp
:::


### What Is a `string`?

A `string` is a variable type used to store **text data**, such as words, sentences, or any sequence of characters.

Examples:

- `"Hello"`
- `"CS101"`
- `"123 Main Street"`

In modern C++, strings are typically handled using the **Standard Library** type `string`.



### Including and Using `string`
To use `string`, you must include the `<string>` header.

```cpp
#include <string>
using namespace std;
```

### Declaring and Initializing Strings

```cpp
string name;
string city = "Charleston";
string greeting {"Hello"};

// You can also assign a value later
name - "Alice"
```

### Strings vs. Characters

A character uses type char and stores a single character:

```cpp
char letter = 'A';
```

A string stores multiple characters:

```cpp
string word = "Apple";
```

Key difference:

-   char uses single quotes: `'A'`
-   string uses double quotes: `"A"`

### Input with Strings

`cin` reads input up to the first whitespace.

For example, if the user input for the following code is `John Smith`, the value
stored in `firstName` is `"John"`.

```cpp
string firstName;

cout << "Enter Your Name: ";
cin >> firstName;
cout << '\n';
```

### Outputting Strings

Strings are printed using `cout` like any other variable.

```cpp
cout << "Hello, " << firstName << "!" << endl;
```
