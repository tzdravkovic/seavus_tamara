namespace Cas4
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");

            //Poziv metode

            SayHello(); 

            //Poziv metode sa vracanjem 

            string message = PrintMyName("Tamara");
            Console.WriteLine(message);

            string fName = "Tamara";
            Console.WriteLine(PrintMyInfo(fName, "Zdravkovic"));


            //Zadatak 1


            Console.WriteLine("Unesite prvi broj");
            int num1 = int.Parse(Console.ReadLine());

            Console.WriteLine("Unesite drugi broj");
            int num2 = int.Parse(Console.ReadLine());

            Console.WriteLine("Unesite racunsku operaciju + ili -");
            char operation = char.Parse(Console.ReadLine());

            switch(operation)
            {
                case '+':
                    Console.WriteLine(Sum(num1, num2));
                    break;
                case '-': 
                    Console.WriteLine(Subtract(num1, num2));
                    break;
                default:
                    Console.WriteLine("Niste uneli + ili -");
                    break;
                    
            }


        }

        static int Sum(int num1, int num2)
        {
            return num1 + num2;
        }

        static int Subtract(int num1, int num2)
        {
            return num1 - num2;
        }



        //Definicija void metode
        static void SayHello()
        {
            Console.WriteLine("Hello from our first method");
        }



        //Definicija metode koja vraca string
        static string PrintMyName(string name)
        {
            string message = $"Hi form another method, your name is {name}";
            return message;
        }


        static string PrintMyInfo(string firstName, string lastName)
        {
            return $"Your name is {firstName} {lastName}";
        }


     
    }
}
