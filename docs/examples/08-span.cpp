/*
 * Demonstration of using span to connect an array with its size.
 * To compile with the C++20 standard, add the following command line argument
 * -std=c++20
 * (Replace -std=c++20 with -std=c++2a in GCC 9 or earlier.)
 */
#include <iostream>
#include <span> // To use this new span container
using namespace std;

/**
 * Displays the length and values in an array of doubles.
 * The numbers parameter is a constant span for an array of doubles.
 *     Like static_cast, the type goes within the <>. If you change
 *     <double> to <int>, then it will accept an array of integers.
 */
void display (const span<double> numbers);

int main()
{
    // Create an example array of length 10.
    const int LENGTH = 10;
    double array[LENGTH] { 1.1, 2.1, 3.1, 4, 5.1, 6.1, 7.1, 8.1, 9.1, 10.1 };

    // Display the array using an implicit cast to a span container.
    display(array);

    return 0;
}

void display (const span<double> numbers)
{
    // Display the array length
    cout << "Length: " << numbers.size() << '\n';

    // Display each number. This rang-based for loop would not work with a
    // traditional array parameter.
    for (auto num : numbers)
    {
        cout << num << '\n';
    }
}