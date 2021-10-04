#!/usr/bin/python3

print("content-type:text/html")
print()
# this is header line 


import cgi
import subprocess as sp

# enter user name
a = ["username"]
# enter your password
b = ["password"]

# FieldStorage is a function that will take input from the server
form = cgi.FieldStorage()
user  = form.getvalue('user')
passwd = form.getvalue('passwd')

if(user in a):
    if(passwd in b):
        final = sp.getoutput("cat  /var/www/html/JS/docker.html")
    else:
        print("invalid password")

else:
    print("invalid username")

# here final is very important because only if password is right it redirects orelse it wont.
print(final)

