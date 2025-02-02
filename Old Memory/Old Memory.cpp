#include <iostream>

using namespace std;

int main(){

void compareNumbers();{

float userInputNumber;
float userInputNumber1;
cin >> userInputNumber;
cin >> userInputNumber1;

// Convert Text To Number So User Can Enter Only Number

    
    if (userInputNumber > userInputNumber1) {
        
        cout << userInputNumber << " is greater than " << userInputNumber1 << endl;
    
    }
    
    else if (userInputNumber < userInputNumber1){

        cout << userInputNumber << " is less than " << userInputNumber1 << endl;
    }
    else if (userInputNumber == userInputNumber1)

    cout << userInputNumber << " is equal to " << userInputNumber1 << endl;
    
    else {
        cout << "Invalid Input" << endl;
    }
        
        return 0;
}
    
    
    void userWordsCheck();{

    string userInput;
    cin >> userInput;

        if (userInput == "FUCK" || userInput == "Fuck" || userInput == "fuck")
        {
        cout << "****";
        }
        else{
            cout << userInput;
        }
        
             return 0;
    }
    
   
    userWordsCheck();
}
