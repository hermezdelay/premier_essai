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

