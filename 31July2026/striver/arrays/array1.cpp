#include <iostream>
#include <string>
using namespace std;

int main()
{

    int x = 7;

    int arr[] = {1, 2, 3, 4, 5, 6, 7};
    cout << arr[sizeof(arr) / sizeof(arr[0]) - 1];
    cout << endl;
}
