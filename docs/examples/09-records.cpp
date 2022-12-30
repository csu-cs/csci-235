/*
 * Introduction to records. Creating our own structured data types!
 * by Dr. Hayes
 */
#include <iostream>
#include <string>
#include <iomanip>
using namespace std;

/**
 * A data type representing a student's info.
 */
struct Student
{
	string firstName;
	string lastName;
	double gpa;
};

/**
 * Display the information about the student.
 */
void print(const Student& stud);
 
/**
 * Get a student's info from the user.
 */
void getStudent(Student& stud);

/**
 * Get a student's info from the user.
 */
Student getStudent();

int main()
{
	Student stud1 = {"James", "Kirk", 3.5};
	Student stud2;

	stud1 = getStudent();
	getStudent(stud2);

	if (stud1.firstName == stud2.firstName
		&& stud1.lastName == stud2.lastName 
		&& stud1.gpa == stud2.gpa)
	{
		cout << "The two students are the same." << endl;
	}

	cout << setprecision(1) << fixed;
	print(stud1);
	print(stud2);

	return 0;
}

void print(const Student& stud)
{
	cout << stud.firstName << " " << stud.lastName 
		<< " has a GPA of " << stud.gpa << endl;
}

void getStudent(Student& stud)
{
	cout << "Enter your first name: ";
	cin >> stud.firstName;

	cout << "Enter your last name: ";
	cin >> stud.lastName;

	cout << "Enter your current GPA: ";
	cin >> stud.gpa;
}

Student getStudent()
{
	Student stud;

	getStudent(stud);

	return stud;
}