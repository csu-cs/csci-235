Function Overloading and Default Parameters
===========================================

Function Overloading
--------------------

-   Two functions are said to have **different formal parameter lists** if both functions have either:

    +   A different number of formal parameters

    +   If the number of formal parameters is the same, but the data type of the
        formal parameters differs in at least one position

-   Overloaded functions must have different function signatures (name + parameter types)

-   The parameter list supplied in a call to an overloaded function determines which function is executed.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/TqT8BZ0--EM?rel=0&amp;showinfo=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe></div>
</div>

::: details Click here to view the code from the video.

<<< @/examples/06-overloading.cpp
:::

Here is an example of function overloading. Notice that the functions have the same name. You choose which function to call based on the number (or type ) of actual parameters you pass it.

```cpp
/**
 * Returns the larger of 2 numbers.
 */
double max(double num1, double num2);

/**
 * Returns the largest of 3 numbers.
 */
double max(double num1, double num2, double num3);
```

Default Parameters
------------------

Normally, when you call a function, you must provide the same number of actual parameters to a function as there are formal parameters in the function definition.

*Default parameters* allow you to provide a default value to a function parameter so that providing an actual parameter during a function call is optional.


<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/wGFHqcZRRTQ?rel=0&amp;showinfo=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe></div>
</div>

::: tip
In this video, a pass-by-value string parameter is used. Remember, all string parameters should actually be pass-by-reference to improve efficiency. In cases where the string’s value is not changed in the body of the function (as in this video), the parameter should be a const string reference. For example, the prototype for the 3 parameter function in this video should be:

```cpp
void updateScore(double& currentScore, const string& message,
	double amount = 0);`
```
:::

-   Can specify the value of a default parameter in the function prototype (*and only the prototype*).
-   If an actual parameter is not given in a function call, the default value is used.
-   Default parameters must be the rightmost parameters of the function.
-   If a default parameter value is **not** specified in a function call, you must omit all the arguments to its right.
-   Default values can be constants, global variables, or function calls.
-   One cannot assign a constant value as a default value to a reference parameter. References need to point to a memory location. The exception to this is if the parameter is `const`.

Here is an example where the second parameter has a default value of `10` and the third parameter has a default value of `"Nice job!"`.

```cpp
/**
 * Updates the player's current score
 * @param currentScore  the score to be updated
 * @param amount        the amount by which to updated the score.
 * @param message       a message to display to the user.
 */
void updateScore (double& currentScore, double amount = 10,
    const string& message = "Nice job!");

int main()
{
    double score = 0;

    updateScore(score); // Using the defaults (10 and "Nice Job!")

    updateScore(score); // Using the defaults (10 and "Nice Job!")

    // passing a larger update value, but using the default message.
    updateScore (score, 20);

    updateScore(score, -5, "Oh no!"); // using a negative update value and message.

    // updateScore(score, "mehhh"); // syntax error (must give value for amount)

    return 0;
}

// Notice that the default parameter values are not given here.
void updateScore (double& currentScore, double amount, const string& message)
{
    currentScore += amount; // update the score be amount (defaults to 10)

    // Output "Nice Job!" if a actual parameter is not given
    cout << message << endl; 

    // Display the updated score.
    cout << "Score is now: " << currentScore << endl;
}
```