<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const csuIcon = {
    svg: '<svg version="1.1" width="403.17334" height="386.49332" viewBox="0 0 403.17334 386.49332" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><g transform="matrix(1.3333333,0,0,-1.3333333,0,386.49333)"><g transform="scale(0.1)"><path d="m 1310.49,705.488 c 11.72,-208.027 76.18,-307.648 210.96,-307.648 117.21,0 196.32,79.109 196.32,199.242 0,172.867 -117.21,278.348 -287.14,448.288 -231.48,231.47 -395.56,401.41 -395.56,673.9 0,298.86 225.62,518.61 495.18,518.61 263.69,0 454.14,-190.45 477.59,-512.75 l -310.59,-43.95 c -11.72,178.73 -58.59,257.84 -175.8,257.84 -99.62,0 -169.93,-73.25 -169.93,-190.46 0,-187.52 137.7,-313.5 319.36,-489.3 219.75,-213.89 357.46,-369.178 357.46,-656.319 0,-304.722 -210.95,-515.6715 -495.16,-515.6715 -310.59,0 -512.76,208.0195 -527.41,571.3395 l 304.72,46.879" /><path d="m 176.848,2489.06 v -46.67 h 874.372 v 46.67 H 176.848" /><path d="m 1993.39,2489.06 v -46.67 h 905.74 v 46.67 h -905.74" /><path d="m 1051.22,2489.06 v -46.67 h 942.17 v 46.67 h -942.17" /><path d="M 625.297,90.1992 C 303,90.1992 135.988,286.5 135.988,664.469 V 1725.13 c 0,322.3 184.59,521.53 501.028,521.53 216.175,0 377.034,-109.04 444.954,-302.84 -30.02,-67.02 -46.9,-142.83 -46.9,-224.55 0,-73.83 12.05,-140.14 34.21,-202.17 H 789.379 v 228.53 c 0,143.57 -55.676,213.9 -164.082,213.9 -108.41,0 -164.074,-70.33 -164.074,-213.9 V 591.219 c 0,-143.559 55.664,-216.821 164.074,-216.821 108.406,0 164.082,73.262 164.082,216.821 V 872.5 H 1117.54 V 675.809 l -111.77,-17.2 c 4.48,-110.937 26.44,-207.41 63.63,-287.89 C 996.215,187.352 842.199,90.1992 625.297,90.1992" /><path d="m 1069.4,370.719 c -37.19,80.48 -59.15,176.953 -63.63,287.89 l 111.77,17.2 V 655.68 c 0,-110.469 -16.53,-205.758 -48.14,-284.961 m 48.14,1146.381 h -48.26 c -22.16,62.03 -34.21,128.34 -34.21,202.17 0,81.72 16.88,157.53 46.9,224.55 23.22,-66.25 35.57,-142.39 35.57,-227.48 V 1517.1" /><path d="m 2409.08,90.1992 c -212.6,0 -361.72,88.6208 -436.69,261.4098 35.97,72.61 55.95,157.52 55.95,251.332 0,154.911 -40.07,271.43 -111.49,379.489 v 729.82 l 90.99,12.88 c -8.75,120.15 -40.69,221.96 -90.99,302.43 v 175.15 h 325.23 V 600.012 c 0,-125.992 73.24,-196.313 169.94,-196.313 96.69,0 161.15,70.321 161.15,196.313 V 2202.71 H 2898.4 V 655.68 c 0,-366.25 -178.73,-565.4808 -489.32,-565.4808" /><path d="m 1972.39,351.609 c -36.62,84.379 -55.54,188.84 -55.54,312.86 V 982.43 c 71.42,-108.059 111.49,-224.578 111.49,-379.489 0,-93.812 -19.98,-178.722 -55.95,-251.332 m -55.54,1360.641 v 315.31 c 50.3,-80.47 82.24,-182.28 90.99,-302.43 l -90.99,-12.88" /></g></g></svg>'
}

const members = [
  {
    avatar: 'https://i0.wp.com/www.charlestonsouthern.edu/wp-content/uploads/2019/07/Sean-Hayes.jpg?w=200&ssl=1',
    name: 'Dr. Sean T. Hayes',
    title: 'Professor',
    links: [
      { icon: csuIcon, link: 'https://www.charlestonsouthern.edu/directory/hayes-sean/' },
      { icon: 'github', link: 'https://github.com/orgs/csu-cs/people/DoctorHayes' }
    ]
  },
  {
    avatar: 'https://i0.wp.com/www.charlestonsouthern.edu/wp-content/uploads/2019/07/Julie-Henderson.jpg?w=200&ssl=1',
    name: 'Prof. Julie Henderson',
    title: 'Professor',
    links: [
      { icon: csuIcon, link: 'https://www.charlestonsouthern.edu/directory/henderson-julie/' },
      { icon: 'github', link: 'https://github.com/orgs/csu-cs/people/profJHenderson' }
    ]
  }
]
</script>


Getting Started
===============

1.  Review [the syllabus](/syllabus).
2.  Access the textbook (Chapter 1 for the first week).
3.  Set up [the required software](#visual-studio-code).
4.  Say "hi" to [your instructor](#instructors).

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/YNIMbeNFCYQ?rel=0&amp;showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe></div>
</div>

Instructors
-----------

<VPTeamMembers size="small" :members="members" />


Visual Studio Code
------------------

To program in C++, you will need a text editor and a compiler. For a text editor, we will use [Visual Studio Code](https://code.visualstudio.com/). For a compiler, we will use g++ from the GNU Compiler Collection (GCC). Follow the instructions below to setup both.

[Visual Studio Code](https://code.visualstudio.com/) is an excellent text editor that works in macOS and Windows, is accessible from the command line, and has a great dark color scheme by default.

These small changes will make it easier to properly format your code.


1.  After installing Visual Studio Code, open it.
2.  Press `Ctrl + Shift + P` (or `Cmd + Shift + P` on a Mac) to open the Command Pallet.
3.  Type `Settings (JSON)` in the textbox and click on the dropdown as shown here.  
    ![](/images/setup/vscode-settings.png)
4.  On the left, you see all of the default settings. On the right, you can add your own.
5.  Add these two settings. You can replace the existing values or add these fore the existing values (inside the curly brackets).

	```json
	{
		"editor.insertSpaces": false,
		"editor.rulers": [80],
		"editor.renderWhitespace": "boundary",
		"editor.guides.bracketPairs": true,
		"editor.bracketPairColorization.enabled": true,
	}
	```

### MacOS: Launching VS Code from the command line

On a Mac, you will need to perform the following steps to run VS Code from the terminal:

1.  Launch VS Code.
2. Open the Command Palette (`⇧⌘P` i.e., `Cmd+Shift+P`) and type `shell command` to find the Shell Command: Install 'code' command in PATH command.  
    ![Add Shell Command](https://code.visualstudio.com/assets/docs/setup/mac/shell-command.png)
3.  Restart the terminal for the new `$PATH` value to take effect. You'll be able to type `code .` in any folder to start editing files in that folder.

The g++ Compiler
----------------

-   GCC (GNU Compiler Collection)
    -   100% free software
    -   Known as the Linux compiler, but cross platform
    -   g++ is the GCC C++ Compiler


Complete one of the sets of instructions below depending of if your computer that runs Windows or macOS.

::: details Installing G++ in Windows

On Windows, we will use the MinGW-w64 to compile C++ programs using g++.

-   MinGW (Minimalist GNU for Windows)
    -   Includes GCC
    -   MinGW-w64 is an updated branch of MinGW

Download the following:

-   [Mingw-w64](https://github.com/brechtsanders/winlibs_mingw/releases/download/13.2.0posix-17.0.5-11.0.1-ucrt-r3/winlibs-x86_64-posix-seh-gcc-13.2.0-mingw-w64ucrt-11.0.1-r3.zip)

Follow the following video instructions to set up your system.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/u-fPp6NcLuY?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe></div>
</div>

:::

::: details Installing G++ in MacOS

-   The default C++ compiler for macOS is clang, which is similar but now what we are using in this course.
-   Installing GNU’s g++ compiler (GCC) has become a lot easier.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/0z-fCNNqfEg?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe></div>
</div>

**Installation Steps:**

1.  Install [Homebrew](https://brew.sh/) by opening the “Terminal” and pasting in the following
    commend.  
    `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

2.  Use Homebrew to install the GCC compiler with the following Terminal
    command.  
    `brew install gcc`

3.  Go to where GCC was installed in the Terminal:
    1.  If you are on an older, Intel-based Mac, type:  
        `cd /usr/local/bin/`
    2.  If you are on a newer Mac with the M1 or M2 (Apple Silicon) CPUs, type:  
        `cd /opt/homebrew/bin`

        ::: warning
        If you have one of the newest Macbooks with the M1 or M2 CPUs, there may be a different path where g++ is located. You may ask your instructor for assistance.
        :::

4.  Add a link to g++-13 to g++.
    1.  For Intel-based Macs, type:  
        `ln -s g++-13 g++`
    2.  For Macs with an M1 or M2 (Apple Silicon) CPU, type:  
        `ln -s ../Cellar/gcc/13.1.0/bin/aarch64-apple-darwin22-g++-13 g++`

        The path may be different as new versions are released. If the above command does not work, type `ls ../Cellar/gcc` to see what number you should use instead of `13.1.0` in the above command.

5.  Sign out and sign back into your computer.

:::

Using the Lab Computers
-----------------------

You may log into the lab computers with your personal account.

-   **Username**: Combine your *First Initial*, *Middle Initial*, and Last Name* (like the beginning of your CSU email address).  
    For example, `JDSmith` 
-   **Password**: `Change1stTime!`

There is a “special” Window’s command-line interface installed that includes MinGW-w64.

-   From the start menu (or the search), start typing “MinGW”.
-   Right click on “Run terminal” and select “Pin to Start” for easy access in
    the future.
-   Open “Run terminal” to access the CLI that includes our compiler.
-   Do NOT pin it to the taskbar.