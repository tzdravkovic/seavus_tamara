using System.Diagnostics;

namespace Domaci
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Zadatak 1

            // RealCalculator

            Console.WriteLine("Unesite prvi broj");
            double num1 = double.Parse(Console.ReadLine());

            Console.WriteLine("Unesite drugi broj");
            double num2 = double.Parse(Console.ReadLine());

            Console.WriteLine("Unesite operaciju koju zelite da koristite (+, -, *, /)");
            char operation = char.Parse(Console.ReadLine());

            double result = 0;

            switch(operation)
            {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    result = num1 / num2;
                    break;
                default:
                    Console.WriteLine("Niste uneli racunsku operaciju");
                    break;
            
            }

            Console.WriteLine($"Rezultat je: {result}");



            // Zadatak 2

            // AverageNumber

            Console.WriteLine("Unesite prvi broj");
            double number1 = double.Parse(Console.ReadLine());

            Console.WriteLine("Unesite drugi broj");
            double number2 = double.Parse(Console.ReadLine());

            Console.WriteLine("Unesite treci broj");
            double number3 = double.Parse(Console.ReadLine());

            Console.WriteLine("Unesite cetvrti broj");
            double number4 = double.Parse(Console.ReadLine());


            double averge = (number1 + number2 + number3 + number4) / 4;

            Console.WriteLine($"Prosečna vrednost brojeva {number1}, {number2}, {number3}, {number4} je: {averge}");



            // Zadatak 3

            // SwapNumbers

            Console.WriteLine("Unesite prvi broj");
            int num_1 = int.Parse(Console.ReadLine());

            Console.WriteLine("Unesite drugi broj");
            int num_2 = int.Parse(Console.ReadLine());

            int num_3 = num_1;
            num_1 = num_2;
            num_2 = num_3;

            Console.WriteLine("Nakon zamene:");
            Console.WriteLine($"Prvi broj je: {num_1}");
            Console.WriteLine($"Drugi broj je: {num_2}");
        }
    }
}
