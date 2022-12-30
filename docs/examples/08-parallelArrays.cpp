/*
 * Example code with three 1D arrays that are parallel that contain:
 *   Names of specific people
 *   Ages of specific people
 *   Heights of specific people
 * Because the arrays are parallel,
 * for any index name[index], age[index], and height[index]
 * are all describing the same person.
 */

#include <iostream>
#include <string>
#include <iomanip>
using namespace std;

// Find the largest value from an array
int maxValue(const int values[], int length);

// Find the location of the largest value from an array
int maxIndex(const double values[], int length);

// Lookup person's index by name. Return a negative number if not found.
int indexOfName(const string haystack[], const string& needle,
	int length);

int main ()
{
	const int PEOPLE_COUNT = 6;

	// First names
	string name[PEOPLE_COUNT] = {
		"Michael", "Jessica", "Christopher", "Ashley", "Jairy", "Dondi"
	};

	// Age of each person in years old.
	int age[PEOPLE_COUNT] = { 21, 17, 44, 45, 70, 65 };

	// The height of each person in feet
	double height[PEOPLE_COUNT] = { 6.7, 5.5, 6.6, 5.9, 6.5, 5.9 };

	int personIndex;
	string searchName;

	// Display each persons information
	cout << setw(12) << "Name" << setw(4) << "Age"
		<< setw(7) << "Height" << endl;
	for (int index = 0; index < PEOPLE_COUNT; ++index)
	{
		cout << setw(12) << name[index]
			<< setw(4) << age[index]
			<< setw(7) << height[index] << endl;
	}

	// Find the oldest person
	cout << "The oldest person is " << maxValue(age, PEOPLE_COUNT)
		<< " years old." << endl;

	// Display information about the tallest person
	personIndex = maxIndex(height, PEOPLE_COUNT);

	cout << "The tallest person is named " << name[personIndex] << ".\n";
	cout << name[personIndex] << " is " << age[personIndex]
		<< " years old and "
		<< height[personIndex] << "ft tall." << endl;

	// Search for a person by name
	cout << "Enter a name to look up: ";
	cin >> searchName;

	// Find the index of the person's name
	personIndex = indexOfName(name, searchName, PEOPLE_COUNT);

	if (personIndex >= 0 && personIndex < PEOPLE_COUNT)
	{
		cout << name[personIndex] << " is " << age[personIndex]
			<< " years old." << endl;
	}
	else
	{
		cout << searchName << " is not in our database." << endl;
	}

	return 0;
}

int maxValue(const int values[], int length)
{
	// Initially, assert that the first value is the max.
	auto max = values[0];

	// Check to see if any other value in the array is larger.
	for (int index = 1; index < length; ++index)
	{
		// Update the max if the the value we are looking at is larger.
		if (values[index] > max)
			max = values[index];
	}

	return max;
}

int maxIndex(const double values[], int length)
{
	// Initially, assert that the first index is the location of the max.
	int maxIndex = 0;

	// Check to see if any other index has a larger vlue.
	for (int index = 1; index < length; ++index)
	{
		// Update maxIndex f we the current location has a larger value.
		if (values[index] > values[maxIndex])
			maxIndex = index;
	}

	return maxIndex;
}

int indexOfName(const string haystack[], const string& needle,
	int length)
{
	// Check each location in the array for the search value.
	for (int index = 0; index < length; ++index)
	{
		// If found, return it's location.
		if (haystack[index] == needle)
		{
			return index;
		}
	}

	// If we get here, the value was not found in the array.
	// Return an invalid index (something negative).
	return -1;
}