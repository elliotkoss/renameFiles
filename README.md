# renameFiles

This is intended as a quick, light-weight script to easily rename files in bulk. The primary use case was exporting individual layers in Photoshop, where the output file would have some number sequence in front of it that needed to be removed.

If there's another use case that you'd like to cover, please raise a ticket. Or better yet, submit a branch.

# How to use this

1. Make sure you have Node installed. `node --version`. I built this using Node v14.17.6, but this likely works for earlier versions as well.
2. Download the GitHub repository. Do not change anything yet.
3. Open the code in your preferred editor. If you don't have one, use Visual Studio. Notice how there is a folder labeled 'rename' with some png images already in the folder. Do not touch these yet.
4. Look at /source/rename.js. On line 9 you can change the number of characters to remove from the filename.
5. Pull up your terminal, make sure you're navigated to the correct directory (Visual Studio does this for you automatically), and run `node index.js`. 
6. Done. The files should now be renamed.
7. Try this with your own file. Make sure to use a copy of the file in case something goes wrong.

Enjoy!