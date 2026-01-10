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
  },
  {
	avatar: 'data:image/jpeg;base64,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',
	name: 'Dr. Jonathan Sun',
	title: 'Professor'
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


VSCodium
--------

To program in C++, you will need a text editor and a compiler. For a text editor, we will use [VSCodium](https://vscodium.com/). For a compiler, we will use g++ from the GNU Compiler Collection (GCC). Follow the instructions below to setup both.

[VSCodium](https://vscodium.com/) is an excellent text editor that works in macOS and Windows, is accessible from the command line, and has a great dark color scheme by default.

These small changes will make it easier to properly format your code.

1.  [Download VSCodium](https://github.com/VSCodium/vscodium/releases).
    -  For Windows computers, we recommend selecting the **User Installer** link.
    -  For newer Apple computers (with Apple Silicon), scroll down to the **ARM 64bit** links, and then click the first link in the macOS section.
    -  For older Apple computers, use the macOS version at the top (under the **x86 64bits**) heading.
2.  After installing Visual Studio Code, open it.
3.  Press `Ctrl + Shift + P` (or `Cmd + Shift + P` on a Mac) to open the Command Pallet.
4.  Type `Settings (JSON)` in the textbox and click on the dropdown as shown here.  
	![](/images/setup/vscode-settings.png)
5.  On the left, you see all of the default settings. On the right, you can add your own.
6.  Add the settings below. You can replace the existing values or add these fore the existing values (inside the curly brackets).

	```json
	{
		"editor.insertSpaces": false,
		"editor.rulers": [80],
		"editor.renderWhitespace": "boundary",
		"editor.guides.bracketPairs": true,
		"editor.bracketPairColorization.enabled": true,
		"terminal.integrated.defaultProfile.windows": "Command Prompt",
		"chat.agent.enabled": false,
		"chat.commandCenter.enabled": false,
		"inlineChat.accessibleDiffView": "off",
		"terminal.integrated.initialHint": false,
		"github.copilot.enable": {
			"*": false,
		},
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

-   [Mingw-w64](https://github.com/brechtsanders/winlibs_mingw/releases/download/15.2.0posix-13.0.0-ucrt-r5/winlibs-x86_64-posix-seh-gcc-15.2.0-mingw-w64ucrt-13.0.0-r5.zip)

Follow the following video instructions to set up your system.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/u-fPp6NcLuY?rel=0&amp;showinfo=0" loading="lazy" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe></div>
</div>

:::


::: details Installing G++ on Apple Silicon (M1, M2, M3) Macs

-   The default C++ compiler for macOS is clang, which is similar but now what we are using in this course.
-   Installing GNU’s g++ compiler (GCC) has become a lot easier.


<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/NYC6W-DsFcU?rel=0&amp;showinfo=0" loading="lazy" title="Installing G++ in Apple Silicon video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
</div>

1.  Install [Homebrew](https://brew.sh/) by opening the “Terminal” and pasting in the following
	command.  
	`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

2.  Use Homebrew to install the GCC compiler with the following Terminal
	command.  
	`brew install gcc`

3.  Go to where GCC was installed in the Terminal by typing:  
	`cd /opt/homebrew/bin`

4.  Add a link to g++-15 to g++ by typing:  
	`ln -s g++-15 g++`

	::: warning
	The path may be different as new versions are released. If the above command does not work, type `ls` to see what number you should use instead of `15` in the above command.
	:::

5.  Sign out and sign back into your computer.

:::

::: details Installing G++ on Intel-Based Macs

-   The default C++ compiler for macOS is clang, which is similar but now what we are using in this course.
-   Installing GNU’s g++ compiler (GCC) has become a lot easier.

<div class="youtube">
<div><iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/0z-fCNNqfEg?rel=0&amp;showinfo=0" loading="lazy" title="Installing G++ in Intel Macs video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
</div>

**Installation Steps:**

1.  Install [Homebrew](https://brew.sh/) by opening the “Terminal” and pasting in the following command.  
	`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

2.  Use Homebrew to install the GCC compiler with the following Terminal
	command.  
	`brew install gcc`

3.  Go to where GCC was installed in the Terminal by typing:  
	`cd /usr/local/bin/`

4.  Add a link to g++-15 to g++ by typing:  
	`ln -s g++-15 g++`

	::: warning
	The path may be different as new versions are released. If the above command does not work, type `ls` to see what number you should use instead of `15` in the above command.
	:::

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