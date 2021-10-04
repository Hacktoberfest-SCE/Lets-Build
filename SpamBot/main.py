import pyautogui
import time


def spammer():
    print("""
*****************************************
   ____                ___       __ 
  / __/__  ___ ___ _  / _ )___  / /_
 _\ \/ _ \/ _ `/  ' \/ _  / _ \/ __/
/___/ .__/\_,_/_/_/_/____/\___/\__/ 
   /_/                              

*****************************************
""")
    print("Spam Bot < Options >")
    print("1. Spam a message for n times ")
    print("2. Spam a whole script")
    opt = int(input("Choose a Option (1 or 2) : "))

    if opt == 1:
        word = input("Enter the message you want to spam : ")
        n = int(input("Number of times : "))
        print("Spamming in 5sec")
        time.sleep(5)
        for i in range(n):
            pyautogui.typewrite(word)
            pyautogui.press("enter")

    elif opt == 2:
        file = open("script.txt", 'r')
        print("Spamming in 5sec")
        time.sleep(5)
        for line in file:
            pyautogui.typewrite(line)
            pyautogui.press("enter")
    else:
        print("###########################")
        print("Invalid Option !!!!! Retry")
        print("###########################")
        spammer()


spammer()
