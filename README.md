to initiate a git repository i'll do:

$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
$ git config --global color.diff auto
$ git config --global color.status auto
$ git config --global color.branch auto
$ git config --global core.editor vim
$ git config --global merge.tool vimdiff
$ git init

/******************************************************/
$ git config --global color.ui false                   /
  color.branch                                         /
  color.diff                                           /
  color.interactive                                    /
  color.status                                         /  
$ git config --global color.diff.meta "blue black bold"/
                                                       /
$ git config --global core.pager ''                    /
/******************************************************/

/************ To verify configurations i'll do ************/
$ git config --list

-1- To add a directory: 
      $ git add index.php
      /** Or to add all repositories
      $ git add .

-2- to commit changes:
      $ git commit -m "messages of changes i've made"

-3- To push code on the remote repository i'll do
      * git remote add origin https://github.com/hermezdelay/premier_essai.git
      * git branch -M main
      * git push -u origin main

