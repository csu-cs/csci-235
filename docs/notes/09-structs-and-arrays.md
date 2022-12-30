Structs and Array, Together
===========================

*Chapter 9*

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/S_olSydh6FU?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
</div>

Arrays in `struct`s
-------------------

Suppose we want to store a list of numbers in an array. However, the list may or
may not fill up the entire array. We can create a `struct` for our list where we
store the current length (or size) of the list.

-   Two items are associated with a list:
    +   Values (elements)
    +   Length of the list
-   Define a `struct` containing both items:  

    ```cpp
    // Max size of a list
    const int LIST_SIZE = 1000;

    /**
     * A data type that holds an array and its length
     */
    struct List
    {
        int values[LIST_SIZE]; // array containing list elements
        int length; // the number of values used in this list
    };
    ```

![The members of intList after begin declared as a List.](/images/structs/struct-list.svg 'The members of `intList` after begin declared as a `List`.'){#fig:dec}

### Assignment

```cpp
// variable declaration and initialization.
List intList {{}, 0}; // Set values all to 0 and length to 0.

// Set first value to 21.
intList.values[intList.length] = 21;
intList.length++; // update the length to 1

// Set second value to 117.
intList.values[intList.length] = 117;
intList.length++; // update the length to 2
```

![The members of intList after initialization and assigning the first two values.](/images/structs/struct-list-init.svg 'The members of `intList` after initialization and assigning the first two values.'){#fig:init}

`struct`s in Arrays
-------------------

A common practice is to have arrays of `struct`s. For example,

```cpp
/**
 * Info about an employee of this company.
 */
struct Employee
{
    string firstName;
    string lastName;
    int    personID;
    string deptID;
    double yearlySalary;
    double yearToDatePaid;
};

Employee employees[50]; // variable declaration

// output first names
for (int index = 0; index < 50; ++index)
    cout << employees[index].firstName << endl;
```


`struct`s within `struct`s
--------------------------

`struct`s may also be members of other `struct`s. For example,

```cpp
/**
 * A person's name.
 */
struct Name
{
    string first; 
    string middle;
    string last;
};

/**
 * A US address.
 */
struct Address
{
    string streetAddress;
    string city;
    string state;
    int zip;
};

/**
 * Info record of a customer.
 */
struct Customer
{
    int id;
    Name name;
    Address shippingAddress;
    Address billingAddress;
};

Customer newCustomer;
newCustomer.id = 2000;
newCustomer.name.first = "James";
newCustomer.name.last = "Kirk";
newCustomer.shippingAddress.city = "South Carolina";
//...
```

Summary
-------

-   `struct`s can be members of other `struct`s
-   `struct`s can have array members.
-   Arrays can be of a `struct` type.
