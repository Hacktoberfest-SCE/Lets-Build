#include<bits/stdc++.h>
using namespace std;

void timeConversion(string s){
    //if time is given in AM format
    if(s.substr(8,2) == "AM"){
        //check for case when its 12AM
        if(s.substr(0,2) == "12"){

            //add 00 as the hour value and print the rest of string
            cout << "00" << s.substr(2,6);
        }

        //if hour in between 1AM to 11AM
        else{
            //print the string without any changes
            cout << s.substr(0,8);
        }
    }

    // if not in AM, then time given would be in PM
    else{
        
        //case when time is 12PM
        //no need to modify the hour value
        if(s.substr(0,2) == "12"){
            cout << "12" << s.substr(2,6);
        }

        //if time is between 1PM and 11PM
        else{
            //convert the hour count into integer
            int time = stoi(s.substr(0,2));
            //to make into 24 hour format add 12 to hour count
            time+=12;

            //display the calculated 24hour format time
            cout << time << s.substr(2,6);
        }
    }
}

int main(){
    string s;
    cin >> s;

    //calling time conversion function
    timeConversion(s);
    return 0;
}