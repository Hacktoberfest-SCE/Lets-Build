def timeConversion(s):
    #splitting time
    #inp_time will store each hour, minute, seconds value as a list
    inp_time = s.split(":")

    #getting hour value
    hour = inp_time[0]

    #check if string is given in PM format
    if(s[-2:]== "PM"):
    
        #when its 12PM, no change in format
        if(hour == "12"):
            pass

        #if hour between 1PM to 11PM
        #convert in 24 hour by adding 12
        else:
            hour = str(int(hour)+12) #typecasting here

    #if time around 12AM
    #change it to 00:mm:ss
    else:
        if(hour == "12"):
            hour = "00"

    #replace first value of inp_time by hour obtained
    inp_time[0] = hour

    #conversion to string by join()
    ans = ':'.join(inp_time)

    #output until -2, it doesn't include AM and PM string
    return ans[:-2]


#main code
s = input().rstrip()
print(timeConversion(s))