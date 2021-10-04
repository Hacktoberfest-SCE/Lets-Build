#Import section
from tkinter import *

#Funtion definations

def click(num):
    """
    To display the number
    num: input onclick parameter
    """
    value = entry.get()
    entry.delete(0, END)
    entry.insert(0, str(value) + str(num))
    return


def clear():
    """
    To clear the screen
    """
    entry.delete(0, END)
    return
    
    
def add():
    """
    To perform addition
    """
    global num1 
    num1 = "0"
    num1 = entry.get() + "+"
    entry.delete(0, END)
    return 


def subtract():
    """
    To perform Substraction
    """
    global num1 
    num1 = "0"
    num1 = entry.get() + "-"
    entry.delete(0, END)
    return


def divide():
    """
    To perform float division
    """
    global num1 
    num1 = "0"
    num1 = entry.get() + "/"
    entry.delete(0, END)
    return

def multiply():
    """
    To perform Multiplication
    """
    global num1 
    num1 = "0"
    num1 = entry.get() + "*"
    entry.delete(0, END)
    return


def mod():
    """
    To Find the remainder
    """
    global num1 
    num1 = "0"
    num1 = entry.get() + "%"
    entry.delete(0, END)
    return


def compute():
    """
    Logic to perform the said function
    """
    try:
        num2 = entry.get()
        num3 = str(num1)+str(num2)
        e = eval(num3)
        entry.delete(0, END)
        entry.insert(0,e)
    except:
        entry.delete(0, END)
        entry.insert(0,"ERROR")
        
        
root = Tk() #Initialises a blank window
root.title("Calculator")
entry = Entry(root, width = 45, borderwidth = 4)
entry.grid(row = 0, column = 1, columnspan = 4, padx =8, pady=10)

#Buttons definations

#Number buttons
button1 = Button(root, text = "1", padx = 40, pady = 20, command = lambda : click(1), fg = "Black")
button2 = Button(root, text = "2", padx = 40, pady = 20, command = lambda : click(2), fg = "Black")
button3 = Button(root, text = "3", padx = 40, pady = 20, command = lambda : click(3), fg = "Black")
button4 = Button(root, text = "4", padx = 40, pady = 20, command = lambda : click(4), fg = "Black")
button5 = Button(root, text = "5", padx = 40, pady = 20, command = lambda : click(5), fg = "Black")
button6 = Button(root, text = "6", padx = 40, pady = 20, command = lambda : click(6), fg = "Black")
button7 = Button(root, text = "7", padx = 40, pady = 20, command = lambda : click(7), fg = "Black")
button8 = Button(root, text = "8", padx = 40, pady = 20, command = lambda : click(8), fg = "Black")
button9 = Button(root, text = "9", padx = 40, pady = 20, command = lambda : click(9), fg = "Black")
button0 = Button(root, text = "0", padx = 40, pady = 20, command = lambda : click(0), fg = "Black")
button = Button(root, text = ".", padx = 42, pady = 20, command = lambda : click("."))

#Clear button 
buttonClear = Button(root, text = "AC", padx = 36, pady = 20, command = clear)

#Function buttons
buttonAdd = Button(root, text = "+", padx = 25, pady = 13, command = lambda : add())
buttonSub = Button(root, text = "-", padx = 25, pady = 13, command = lambda : subtract())
buttonDiv = Button(root, text = "/", padx = 25, pady = 13, command = lambda : divide())
buttonMul = Button(root, text = "*", padx = 25, pady = 13, command = lambda : multiply())
buttonMod = Button(root, text = "%", padx = 25, pady = 13, command = lambda : mod())
buttonEqual = Button(root, text = "CALCULATE", padx = 117, pady = 20, command = compute)

#To place buttons in grid
button1.grid(row = 3, column = 0,padx =5, pady=3)
button2.grid(row = 3, column = 1)
button3.grid(row = 3, column = 2)
button4.grid(row = 2, column = 0)
button5.grid(row = 2, column = 1)
button6.grid(row = 2, column = 2)
button7.grid(row = 1, column = 0)
button8.grid(row = 1, column = 1)
button9.grid(row = 1, column = 2)
button0.grid(row = 4, column = 1)
button.grid(row = 4, column = 0)
buttonClear.grid(row = 4, column = 2, pady=3)
buttonAdd.grid(row = 1, column = 4)
buttonSub.grid(row = 2, column = 4)
buttonDiv.grid(row = 3, column = 4)
buttonMul.grid(row = 4, column = 4)
buttonMod.grid(row = 5, column = 4)
buttonEqual.grid(row = 5, column = 0, columnspan=3, pady=5)

#To add some colors to the buttons!
buttonAdd.config(bg = "#AAAAAA", fg = "WHITE")
buttonSub.config(bg = "#AAAAAA", fg = "WHITE")
buttonDiv.config(bg = "#AAAAAA", fg = "WHITE")
buttonMul.config(bg = "#AAAAAA", fg = "WHITE")
buttonMod.config(bg = "#AAAAAA", fg = "WHITE")
buttonEqual.config(bg = "#BDBDBD", fg = "WHITE")

root.mainloop() #Finally lets render
