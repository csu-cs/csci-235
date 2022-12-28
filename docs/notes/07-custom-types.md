Custom Types
============

*Chapter 7*

Type Aliasing
-------------

We can create new names for existing types with the keyword `using` or `typedef`.

-   Syntax (two options):

    ```cpp
    typedef existingTypeName newTypeName; // traditional method
    using newTypeName = existingTypeName; // preferred in the new standard
    ```

-   An example that creates a new name, `Number`, for the `int` type.

    ```cpp
    using Number = int; // Create a new name for the int type

    const Number MAX = 100; // Define a new const int using the new type name
    ```

-   These statements do NOT create any new data types. They create only aliases to existing types.

Auto Variable Types
-------------------

C++11 and beyond allow auto declaration of variables.

-   Data type does not need to be specified when initializing a variable at declaration.

    ```cpp
    auto num1 = 15;   // num1 is an int because 15 is an int.
    auto num2 = 15.0; // num2 is a double
    auto num3 = 'A';  // num3 is a char
    auto num4 = num1; // num4 is an int
    ```
-   The `auto` keyword is a placeholder for a type, but it is not itself a type. The compiler determines the type based on the value it receives.
-   There is no conversion between types, so your code is not only more flexible but more efficient.
-   The variable **must** be initialized at declaration. For example, the following code will not compile.  
    ```cpp
    auto value; // compiler error
    value = "Test";
    ````
