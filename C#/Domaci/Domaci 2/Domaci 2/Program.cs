using System.Diagnostics.CodeAnalysis;

namespace Domaci_2
{
    internal class Program
    {
        static void Main(string[] args)

        // Zadatak 1 

        //SumOfEven
        {
            int[] array = new int[6];

            Console.WriteLine("Unesite 6 brojeva");



            int sum = 0;

            for (int i = 0; i < array.Length; i++)
            {

                array[i] = int.Parse(Console.ReadLine());

                if (array[i] % 2 == 0)
                {
                    sum += array[i];
                }
            };

            Console.WriteLine($"Rezultat je: {sum}");


            // Zadatak 2 

            //StudentGroup


            string[] studentG1 = new string[]
            {
                "Tamara", "Marko", "Mateja", "Goran", "Natalija"
            };


            string[] studentG2 = new string[]
            {
                "Milan", "Tanja", "Sandra", "Mihajlo", "Jelena"
            };

            Console.WriteLine("Unesite grupu");

            int choice = int.Parse(Console.ReadLine());

            switch (choice)
            {
                case 1:
                    for (int i = 0; i < studentG1.Length; i++)
                    {
                        Console.WriteLine(studentG1[i]);
                    }
                    break;
                case 2:
                    for (int i = 0; i < studentG2.Length; i++)
                    {
                        Console.WriteLine(studentG2[i]);
                    }
                    break;
                default:
                    Console.WriteLine("Niste uneli 1 ili 2");
                    break;

            }
        }
    }
}
