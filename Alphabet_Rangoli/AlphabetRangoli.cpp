#include <iostream>
using namespace std;

int main()
{

    int n;
    cin >> n;

    // this is for upper half
    for (int i = 0; i < n; i++)
    {
        int ch = 97 + (n - 1);
        int start = ((2 * n) - 1 - (2 * i));
        int end = ((2 * n) - 1 + (2 * i));
        for (int j = 1; j <= ((4 * n) - 3); j++)
        {
            if (j % 2 == 1)
            {
                if (j >= start && (j < ((2 * n) - 1)))
                {
                    cout << char(ch);
                    ch--;
                }
                else if (j == ((2 * n) - 1))
                {
                    cout << char(ch);
                    ch++;
                }
                else if (j <= end && j > ((2 * n) - 1))
                {
                    cout << char(ch);
                    ch++;
                }
                else
                {
                    cout << "-";
                }
            }
            else
            {
                cout << "-";
            }
        }
        cout << endl;
    }

    //this is for lower half
    for (int i = n - 2; i >= 0; i--)
    {
        int ch = 97 + (n - 1);
        int start = ((2 * n) - 1 - (2 * i));
        int end = ((2 * n) - 1 + (2 * i));
        for (int j = 1; j <= ((4 * n) - 3); j++)
        {
            if (j % 2 == 1)
            {
                if (j >= start && (j < ((2 * n) - 1)))
                {
                    cout << char(ch);
                    ch--;
                }
                else if (j == ((2 * n) - 1))
                {
                    cout << char(ch);
                    ch++;
                }
                else if (j <= end && j > ((2 * n) - 1))
                {
                    cout << char(ch);
                    ch++;
                }
                else
                {
                    cout << "-";
                }
            }
            else
            {
                cout << "-";
            }
        }
        cout << endl;
    }

    return 0;
}
