/*
 * Given a month of the year, calculates the number of days in that month.
 * by Dr. Hayes
 */

#include <iostream>
using namespace std;

int main()
{
	int month;
	int days;
	int year;

	// Get the month number
	cout << "Enter the month number: ";
	cin >> month;
	cout << endl;

	// Check for invalid months
	if (month <= 0 || month > 12)
	{
		cout << month << " is NOT a valid month (between 1 and 12)"
			<< endl;
		return 0;
	}

	// Calculate the number of days in the month
	switch (month)
	{
		case 0:
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
			days = 31;
			break;
		case 2:
			cout << "Enter the year: ";
			cin >> year;
			cout << endl;

			// Note: Leap days occur in February every 4 years, except for
			//       years that are divisible by 100, but not by 400.
			if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
			{
				days = 29;
			}
			else
			{
				days = 28;
			}
			break;
		default:
			days = 30;
	}

	
	// Display the number of days in this month
	cout << "There are " << days << " days in that month." << endl;

	return 0;
}
