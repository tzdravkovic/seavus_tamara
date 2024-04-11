using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Cas_2
{
    internal class Program
    {
        static void Main(string[] args)
        {

            //sajnin
            // Data Types

            int integerVariable1 = 5;
            int integerVariable2 = 0;

            int integerVariable3 = 3100020;

            Console.WriteLine("Vrednost varijable 1 je : " + integerVariable1);
            Console.WriteLine("Vrednost varijabe 2 je: " + integerVariable2);



            integerVariable1 = 500;
            integerVariable2 = 1000;

            Console.WriteLine("Vrednost varijable 1 je : " + integerVariable1);

            integerVariable1 = -500;

            // unit positiveNumberOnly

            float floatVariable = 2.5F;
            double doubleVariable = 2.5;

            Console.WriteLine($"Vrednost floatVarijable 1 je : {floatVariable} ");
            Console.WriteLine("Vrednost doubleVarijabe 2 je: " + doubleVariable);

            string message = "Hello students";
            char singleCharacterValue = 'a';

            bool isPrinted = false;
            bool isEnabled = true;

            Console.WriteLine($"Document is enabled: {isEnabled}");
            Console.WriteLine($"Document is printed: {isPrinted}");

            string firstName = "Tamara";

            Console.WriteLine(firstName);

            Console.WriteLine(message);


            //Bad example

            string firstname = "Tamara";

            string CONFIGURATION_KEY_ID = "10101010";

            Console.WriteLine(firstname);
            Console.WriteLine(CONFIGURATION_KEY_ID);

            int firstNumber = 10;
            int secondNumber = 20;

            int sum = firstNumber + secondNumber;
            int multipilecationResult = firstNumber * secondNumber;

            Console.WriteLine($"Sum is {sum}");
            Console.WriteLine($"Result of multipilection is {multipilecationResult}");


            Console.WriteLine("-----------------");

            // Zadatak 1

            int num1 = 10;
            int num2 = 3;

            int num3 = num1 / num2;

            Console.WriteLine($"Rezultat deljenja je {num3}");

            double doubleNum1 = 10;
            double doubleNum2 = 3;

            double result = doubleNum1 / doubleNum2;

            Console.WriteLine($"Rezultat deljenja je {result}");


            // Zadatak 2

            string fName = "Tamara";
            string lName = "Zdravkovic";

            string fNameAndlName = fName + " " +  lName;

            Console.WriteLine($"Zovem se {fNameAndlName}");

            string number1 = "9";
            string number2 = "3";

            string number3 = number1 + number2;

            Console.WriteLine(number3);


            // Zadatak 3

            int wholeNumber = 50;
            string stringNumber = "50";

            string newNumber = wholeNumber + stringNumber;

            Console.WriteLine(newNumber);


            // Zadatak 4 

            int n = 102;
            int m = 5;
            int sms = n / m;

            Console.WriteLine(sms);








            // Parsing 

            Console.Write("Write your name?");
            string userName = Console.ReadLine();

            Console.WriteLine($"Your name is: {userName}");

            Console.Write("How old are you");
            
            string userInputString = (Console.ReadLine() );

            int userAge = int.Parse(userInputString);

            int userAge2 = Convert.ToInt32(userAge);

            Console.WriteLine($"You are {userAge} years old");
            Console.WriteLine($"You are {userAge2} years old");

            Console.WriteLine("What is the value of pi?");
            double piValue = Convert.ToDouble(Console.ReadLine());

            Console.WriteLine($"Your answer is {piValue}");



            // If, switch

            Console.WriteLine("Type any positive or negative number: ");
            int userInputNumber = Convert.ToInt32(Console.ReadLine());

            if (userAge > 0)
            {
                Console.WriteLine("The number is positive");
            } else if (userAge < 0)
            {
                Console.WriteLine("The number is negative");
            } else
            { Console.WriteLine("The number is zero")};

           
            Console.WriteLine("1. Monday\n2. Tuesday\n3. Wednesday\n4. Thursday\n5. Friday\n6. Saturday\n7.Sunday");

            int userInputDay = Convert.ToInt32(Console.ReadLine());

            switch (userInputDay)
            {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    Console.WriteLine("Work day :(");
                    break;
                case 6:
                    Console.WriteLine("Happy");
                    break;
                case 7:
                    Console.WriteLine("Happy");
                    break;

                default:
                    Console.WriteLine("Outside of valid values!");
                    break;
            }

        }
    }
}
