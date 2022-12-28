/*
 * Demonstration function overloading (multiple functions
 * with the same name).
 *
 * The function signature is used to determine which
 * function declaration is being called.
 */

#include <iostream>
#include <string>
using namespace std;

/**
 * Displays the type and value of an integer.
 */
void display(int value);

/**
 * Displays the type and value of a double.
 */
void display(double value);

/**
 * Displays the type and value of a string.
 */
void display(const string& value);

/**
 * Displays the type and value of a string.
 */
void display(double value, const string& type);

/**
 * Returns the larger of 2 numbers.
 */
double largest(double num1, double num2);

/**
 * Returns the maximum value of 3 numbers.
 */
double largest(double num1, double num2, double num3);

int main()
{
	// Show the type and value of each actual parameter
	display(1);
	display(1.12145);
	display("Hello World!");

	display(23.23, "This is a Double");

	// Display the largest of some example numbers.
	cout << largest(234, 345.345) << endl;
	cout << largest(252345, 2.3) << endl;
	cout << largest(23, 0, 355555) << endl;
	cout << largest(1, 3, -1) << endl;
	cout << largest(3, -1, -355555) << endl;

	return 0;
}

void display(int value)
{
	display(value, "Integer");
}

void display(double value)
{
	display(value, "Double");
}

void display(const string& value)
{
	cout << "String: " << value << endl;
}

void display(double value, const string& type)
{
	cout << "This " << type << " is " << value << endl;
}

double largest(double num1, double num2)
{
	if (num1 > num2)
	{
		return num1;
	}

	return num2;
}

double largest(double num1, double num2, double num3)
{
	return largest(largest(num1, num2), num3);
}