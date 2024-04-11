namespace ConsoleApp2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            ////FOR petlja

            //for (int i = 0; i < 10; i++)
            //{
            //    Console.WriteLine($"The value of i: {i}");
            //};

            //for (; ; )
            //{
            //    Console.WriteLine("This will on go foreveres unless your enger X");
            //    string userInput = Console.ReadLine();

            //    if (userInput == "X" || userInput == "x")
            //    {
            //        break;
            //    }
            //}

            //for (int i = 10; i > 0; i--)
            //{
            //    Console.WriteLine($"The value of i: {i}");
            //}

            //Console.WriteLine("Happy new year!");
            //Console.WriteLine("We are outside of the loop");

            ////While petlja

            //int counter = 0;

            //while (counter < 10)
            //{
            //    Console.WriteLine($"The value is: {counter}");
            //    counter++;
            //    break;
            //}

            ////string userInputX = string.Empty;

            ////while (userInputX != "X" || userInputX != "x")
            ////{
            ////    Console.WriteLine("This will on go foreveres unless your enger X");
            ////    userInputX = Console.ReadLine();
            ////}

            ////Do While petlja

            //int doWhileCounter = 0;

            //do
            //{
            //    Console.WriteLine($"The value of counter is: {doWhileCounter}");
            //    doWhileCounter++;

            //} while (doWhileCounter < 10);


            //int anotherCounter = 100;

            //do
            //{
            //    Console.WriteLine($"Another counter value is: {anotherCounter}");
            //    anotherCounter++;

            //} while (anotherCounter < 10);

            //Console.WriteLine("We are outside of the loop...");


            ////Vezba

            //// Vezba 1

            //Console.WriteLine("Unesite prvi broj");
            //int number1 = int.Parse(Console.ReadLine()); 

            //for (int i = 1; i <= number1; i++)
            //{
            //    Console.WriteLine(i);
            //}


            //Console.WriteLine("Unesite neki drugi broj");
            //int number2 = int.Parse(Console.ReadLine());

            //for (int i = 1; i <= number2; i++)
            //{
            //    Console.WriteLine(i);
            //}



            ////Vezba 2

            //Console.WriteLine("Unesite bilo koji broj");
            //int num1 = int.Parse(Console.ReadLine());

            //for(int i = 1; i <= num1; i++)
            //{
            //    if (i % 2 == 0)
            //    {
            //        Console.WriteLine(i);
            //    }
            //}


            //Console.WriteLine("Ponovo unesite bilo koji broj");
            //int num2 = int.Parse(Console.ReadLine());

            //for (int i = 1; i <= num2; i++)
            //{
            //    if (i % 2 != 0)
            //    {
            //        Console.WriteLine(i);
            //    }
            //}


            ////Vezba 3


            //Console.WriteLine("Unesite broj");
            //int num3 = int.Parse(Console.ReadLine());

            //for (int i = 1; i <= num3; i++)
            //{
            //    if (i % 3 != 0 && i % 7 != 0) 
            //    {
            //        Console.WriteLine(i);
            //    }
                
            //    if(i >= 100)
            //    {
            //        Console.WriteLine("Granica je dostignuta i prestanite da brojite");
            //        break;
            //    }
            //}



            ////Nizovi


            //int[] numbersArray = new int[5];

            //numbersArray[0] = 1;
            //numbersArray[1] = 2;
            //numbersArray[2] = 3;
            //numbersArray[3] = 4;
            //numbersArray[4] = 5;


            //Console.WriteLine("The array elements are:");
            
            //for(int i = 0; i < numbersArray.Length; i++)
            //{
            //    Console.WriteLine(i);
            //}

            //string[] studentArray = new string[]
            //{
            //    "Milica", "Tamara", "Goran", "Stefan", "Sava"
            //};

            //int[] studentRetingsArray = new int[] { 10, 10, 10, 10, 10 };

            //foreach(string student in studentArray)
            //{
            //    Console.WriteLine(student);
            //}

            //Console.WriteLine("Students ratings:");
            //foreach(int rating in studentRetingsArray)
            //{
            //    Console.WriteLine(rating);
            //}



            //Vezbe

            //Vezba 1

            string[] stringsArray = new string[]
            {
                "String", "Number", "Boolean", "Array", "Object"
            };

            double[] doubleArray = new double[]
            {
                2.1, 5.6, 3.3, 9.11, 4.5
            };

            char[] charArray = new char[]
            {
                't', 'm', 'g', 's', 's'
            };

            bool[] boolArray = new bool[]
            {
                true, false, false, true, true
            };


            //Vezba 2

            int[] intArray = new int[5];
            int sum = 0;

            for(int i = 0; i < intArray.Length; i++)
            {
                intArray[i] = int.Parse(Console.ReadLine());
                sum += intArray[i];
            }

            Console.WriteLine(sum);


            //Vezba 3 

            string[] fullNames = new string[5];

            int counter = 0;

            while (true)
            {
                Console.WriteLine("Please enter a name form the keyboard");
                string name = Console.ReadLine();

                fullNames[counter] = name;
                counter++;

                Console.WriteLine("Do you want to enter another name?");

                if (Console.ReadLine() == "N")
                    break;

            }
        }
    }
}
