#include <iostream>
using namespace std;

void fifthPattern(int n)
{
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n - i + 1; j++)
        {
            cout << j << " ";
        }

        cout << endl;
    }
}

void sixthPattern(int n)
{
    for (int i = 1; i <= n; i++)
    {
        for (int j = 0; j < n - i + 1; j++)
        {
            cout << "8";
        }

        cout << endl;
    }
}

void seventhPattern(int n)
{
    for (int i = 0; i < n; i++)
    {
        // space
        for (int j = 0; j < n - i - 1; j++)
        {
        }
        // star

        // space

        for (int j = 0; j < n - i - 1; j++)
        {
        }
    }
}

int main()
{
    int n;

    cout << "Enter the number of rows: ";
    cin >> n;

    // fifthPattern(n);
    // sixthPattern(n);
    seventhPattern(n);
    return 0;
}
