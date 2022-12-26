The Switch Statement
====================

*Chapter 4*

Instead of an if…else, use a switch statement whenever comparing single value with multiple discrete values (i.e., instead of an `if` with the `==` operator).

Here is the syntax:

```cpp
switch (thing to switch on)
{
    case thing1:
        //do this;
        break;
    case thing2:
        //do this;
        break;
    default:
        //do everything else;
}
```

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube.com/embed/YDXofREPkuY?showinfo=0;rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe></div>
</div>

::: details Try the following code from the video.

<<< @/examples/04-daysInMonth.cpp
:::

Example
-------

```cpp
// grade is an int
switch (grade / 10)
{
	case 10:
	case 9:
		letter = 'A';
		break;
	case 8:
		letter = 'B';
		break;
	case 7:
		letter = 'C';
		break;
	case 6:
		letter = 'D';
		break;
	default:
		letter = 'F';
}
```

Self-Check Questions
--------------------

1.  When should you use a `switch` statement instead of an if…else statement?
2.  Give two examples of data types that cannot be used in `switch` statements in C++.
