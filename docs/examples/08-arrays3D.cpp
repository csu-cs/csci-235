// This program demonstrates how C++ arrays are laid out in memory, how array
// expressions provide addresses, and how to traverse and display a 2D array.
#include <iostream>
#include <iomanip>
using namespace std;

// The number of columns in our array.
// Declared globally so it can be used in our function prototypes.
constexpr int COLS = 4;
constexpr int ROWS = 5;

// Displays the values of a 1D array
void display(const double array[], int length);

// Displays the values of a 2D array
void display(const double array[][COLS], int rowCount);

// Displays the values of a 3D array
void display(const double array[][ROWS][COLS], int planeCount);

int main ()
{
	double array[ROWS][COLS];

	// Display addresses
	// The & operator gives the address of an object, such as a constant
	// or element.
	// An array name without [] already converts to an address to its 
	// first element (base address).
	// The same is true of array[row]: it is a row array that converts to 
	// its first element's address.
	cout << "Address of ROWS: " << &ROWS << endl;
	cout << "Address of COLS: " << &COLS << endl;
	cout << "Base Address   : " << array << endl;
	cout << "Address of array[0]   : " << &array[0] << endl;
	cout << "Address of array[0][0]: " << &array[0][0] << endl;
	cout << "Address of array[0][1]: " << &array[0][1] << endl;
	cout << "Address of array[0][4]: " << &array[0][4] << endl;
	cout << "Address of array[1][0]: " << &array[1][0] << endl;
	cout << "Address of array[0][4]: " << &array[0][COLS] << endl;
	cout << "Address of array[1]   : " << array[1] << endl;
	cout << "Address of array[4]   : " << array[4] << endl;
	cout << "Address of array[0][16]: " << &array[0][16] << endl;

	// Set all elements.
	// row order is faster
	for (int row = 0; row < ROWS; ++row)
	{
		for (int col = 0; col < COLS; ++col)
		{
			array[row][col] = (row * COLS) + col + 1;
		}
	}

	// for (int index = 0; index < ROWS * COLS; ++index)
	// {
	// 	array[0][index] = index + 1;
	// }

	display(array, ROWS);
	// display(array[0], COLS);
}

void display(const double array[], int length)
{
	for (int index = 0; index < length; ++index)
	{
		cout << setw(5) << array[index];
	}
	cout << endl;
}

void display(const double array[][COLS], int rowCount)
{
	// Iterate over each row.
	for (int rowIndex = 0; rowIndex < rowCount; ++rowIndex)
	{
		// // Iterate over each column
		// for (int colIndex = 0; colIndex < COLS; ++colIndex)
		// {
		// 	cout << setw(5) << array[rowIndex][colIndex];
		// }
		// cout << endl;
		
		// Instead of iterating over each column, pass the whole
		// column to the 1D display function.
		display(array[rowIndex], COLS);
	}
}

void display(const double array[][ROWS][COLS], int planeCount)
{
	for (int plainIndex = 0; plainIndex < planeCount; ++plainIndex)
	{
		// Calls the 2D version 
		display(array[plainIndex], ROWS);
	}
	cout << endl;
}