Namespaces
==========

*Chapter 7*

What does this statement, `using namespace std;` do and what similar statements can we use? Find out here!

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/dv4Ec3A500g?rel=0&amp;showinfo=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe></div>
</div>

Problems with conflicting global identifiers (constants, functions, `enum` types, etc.):

1.  Global identifiers in a header file used in a program become global in the program

    +   A syntax error occurs if an identifier has the same name as a global
        identifier in the header file

2.  The same problem can occur with third-party libraries

    +   Common solution: third-party vendors begin their global identifiers with
        `_` (underscore)  
        Do not begin identifiers in your program with `_`

Namespaces attempt to solve these problems.

-   A namespace includes members, which have a scope that is local to the namespace.

Syntax to create a namespace:

```cpp
namespace NamespaceName // NamespaceName can be any identifier you want
{
    // Put here: variable declarations, named constants, functions, 
    // or another namespace

    const int MAX_SIZE = 100; // Example Constant
    
    int calculateSize();    // Example function prototype; definitions go
                            // below the namespace (and below main)
} // <-- No semicolon here

int NamespaceName::calculateSize()  // Example function definition
{
    // ...
}
```

-   A namespace member can be accessed outside the namespace:

    ```cpp
    NamespaceName::identifier;
    ```

    Or the identifier can be used without specifying the namespace if you use:

    ```cpp
    using namespace NamespaceName;
    ```

    Or for just the specific identifier.

    ```cpp
    using NamespaceName::MAX_SIZE;
    ```

-   After the using statement, it is NOT necessary to put the `NamespaceName::` before the namespace member.  
    Unless a namespace member and a global identifier or a block identifier have the same name.

-   Example for defining a function with a prototype in a namespace (below main).  
    (See the example of `calculateSize()` above).
