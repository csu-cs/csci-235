/*
 * A game where the user is prompted to enter different types of
 * words that are then substituted into a story for comedic effect.
 *
 * by Dr. Hayes
 */

#include <iostream>
#include <string>
using namespace std;

int main()
{
	// Define variables
	string color, jobTitle, event, action;
	int age;

	// Get words to substitute into story
	cout << "Enter a color: ";
	cin >> color;
	cout << endl;

	cout << "Enter an occupation: ";
	cin >> jobTitle;
	cout << endl;

	cout << "Enter a weather event: ";
	cin >> event;
	cout << endl;

	cout << "Enter a whole number: ";
	cin >> age;
	cout << endl;

	cout << "Enter a progressive-tense action (ending in \"ing\"): ";
	cin >> action;
	cout << endl;

	// Tell the story.
	cout << "[" << color << "]beard, was a pirate who operated around "
		<< "the CSU campus.\n"
		<< "Little is known about his time as a ["
		<< jobTitle << "], but he was a sailor during the great ["
		<< event << "]. Placed in command by Captain Bucky, ["
		<< color <<"]beard at the age of [" << age
		<< "] engaged in numerous acts of [" << action
		<< "]. After his death, he became the inspiration"
		<< " for a [" << jobTitle << "] in works of fiction across "
		<< "many genres." << endl;

	return 0;
}
