// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.

// 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
// Example
// Return '12:01:00'.
// Return '00:01:00'.
// Function Description
// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in hour format
// Returns

// string: the time in hour format
// Input Format

// A single string that represents a time in -hour clock format .

// Constraints

// All input times are valid
// Sample Input 0
// 07:05:45PM

// Sample Output 0
// 19:05:45

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
public class hourformat {
    public static void main(String[] args){

    String input = "10:22:12 PM";
      //Format of the date defined in the input String
      DateFormat df = new SimpleDateFormat("hh:mm:ss aa");
      //Desired format: 24 hour format: Change the pattern as per the need
      DateFormat outputformat = new SimpleDateFormat("HH:mm:ss");
      Date date = null;
      String output = null;
      try{
         //Converting the input String to Date
    	 date= df.parse(input);
    	 output = outputformat.format(date);
         //Displaying the hours
    	 System.out.println(output);
      }catch(Exception pe){
         pe.printStackTrace();
       }
    }
}
