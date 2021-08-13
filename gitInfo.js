/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/
let gitDefinition = 'Git is a method of version control, it helps us keep our projects safe while we are making changes so that if anything goes wrong we can revert back to previous versions and our projects progress wont be lost'
//CODE HERE

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = `Git hub is similar to git but it is a remote location that we can store different versions of projects so that if anything goes wrong with our computer and our files our lost, all of our projects can be stored remotely on github so they won't be completely lost. You can also share code/projects easily with other developers on github`
//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/
let init = {
    description: 'init, initializes/begins a repository within our current folder/directory which allows us to then begin adding files to this repository if we would like.',
    code: 'git init'
}

//CODE HERE

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
let clone = {
    description: 'git clone allows us to make a copy of a repository in a different directory, this can be used to make copies of remote repositories on our local computers ',
    code: 'git clone repositoryofurl.here'
}
//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
let status = {
    description: 'allows you to check the status of the current repository and see which files within the directory have already been added and which files have not yet been added',
    code: 'git status'
}
//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
let add = {
    description: 'git add allows us to add files to the repository that we want to begin tracking.',
    code: 'git add filename.filetype or git add . to add all files within the directory'
}
//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
let commit = {
    description: 'After a file has been added to a repository, we use commit to take a screenshot of each of the files within the repository at the current time. This way if we use commit often enough, our project should be relatively safe becuse we can later go back to any of these commits if needed.',
    code: 'git commit, git commit -a this commits all chnges in directory, git commit -m "add commit message here",git commit -am "combines the last two" git commit --amend, amend allows you to change the last commit.'
}

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
let push = {
    description: 'When we push a repository, we can upload it from our local computer to a remote repository like github.',
    code: 'git push "remoterepositoryurl/name" "branch" '
}