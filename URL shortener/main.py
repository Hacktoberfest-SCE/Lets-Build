import pyperclip
import pyshorteners
from tkinter import *

root = Tk()
root.geometry("450x300")
root.title("URL Shortner")
root.configure(bg="#C5206D")
url = StringVar()
url_address = StringVar()


def urlshortner():
    urladdress = url.get()
    url_short = pyshorteners.Shortener().tinyurl.short(urladdress)
    url_address.set(url_short)


def copyurl():
    url_short = url_address.get()
    pyperclip.copy(url_short)


Label(root, text="My URL Shortener", font="poppins").pack(pady=10)
Entry(root, textvariable=url).pack(pady=5)
Button(root, text="Generate short URL", command=urlshortner).pack(pady=7)
Entry(root, textvariable=url_address).pack(pady=5)
Button(root, text="copy URL", command=copyurl).pack(pady=7)

root.mainloop()
