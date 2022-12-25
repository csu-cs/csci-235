/*
 * Test program to see what happens with the user input does not match the
 * variables' types
 *
 * by Sean T. Hayes
 */

#include <iostream>
#include <string>
using namespace std;

int main()
{
	// Variables to receive input
	char ch1 = ' '; // 1 character
	char ch2 = ' '; // a second character
	int int1 = -8888; // whole number
	double doub1 = -999.999; // decimal (floating point) number
	string text;

	// Get input from the user
	cout << "Input a char, floating-point number, char, int, string: ";
	cin >> ch1 >> doub1 >> ch2 >> int1;
	getline(cin, text);

	// Display the values for each variable
	cout << endl;
	cout << "    Double: " << doub1 << '\n'
		<< "Characters: '" << ch1 << "', '" << ch2 << "'\n"
		<< "   Integer: " << int1 << endl
		<< "    String: \"" << text << "\"" << endl;

	return 0; // exit with success code.
}
