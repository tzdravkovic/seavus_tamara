using Cas1;
using System.Diagnostics.CodeAnalysis;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            ////Vezba 1 


            //Console.WriteLine("Unesite Vase ime i godine");

            //string name = Console.ReadLine();
            //int age = int.Parse(Console.ReadLine());

            //Console.WriteLine($"Zdravo {name}, imate {age} godina.");


            ////Vezba 2


            //Console.WriteLine("Unesite neki broj");
            //int num = int.Parse(Console.ReadLine());

            //if (num < 0)
            //{
            //    Console.WriteLine("Negativan broj");
            //}
            //else if (num > 0)
            //{
            //    Console.WriteLine("Pozitivan broj");
            //}
            //else
            //{
            //    Console.WriteLine("Nula");
            //}


            ////Vezba 3


            //Console.WriteLine("Unesite neki broj");
            //int number = int.Parse(Console.ReadLine());

            //int sum = 0;

            //for (int i = 0; i <= number; i++)
            //{
            //    if (i % 2 == 0)
            //    {
            //        sum = sum + i;
            //    }
            //}

            //Console.WriteLine(sum);


            ////Vezba 4

            //Console.WriteLine("Unesite broj");

            //double number1 = double.Parse(Console.ReadLine());

            //NumberStats(number1);


            //Vezba 5


            List<Person> persons = new List<Person>();

            persons.Add(new Person("Tamara", 25, "F"));
            persons.Add(new Person("Milica", 40, "F"));
            persons.Add(new Person("Djordje", 28, "M"));
            persons.Add(new Person("Almir", 39, "M"));
            persons.Add(new Person("Sava", 20, "M"));



            List<Person> person30 = persons
                .Where(person => person.Age > 30)
                .OrderByDescending(person => person.Age)
                .ToList();

            foreach(Person person in person30)
            {
                Console.WriteLine($"{person.Name}, {person.Age}");
            }

            foreach (Person person in persons)
            {
                Console.WriteLine($"{person.Name}, {person.Age}");
            }

        }

        static void NumberStats(double number)
        {

            Console.WriteLine($"Statistika za broj {number} je: ");

            if (number < 0)
            {
                Console.WriteLine("Negativan");
            }
            else if (number > 0)
            {
                Console.WriteLine("Pozitivan");
            }
            else
            {
                Console.WriteLine("Nula");
            }

            if (number % 2 == 0)
            {
                Console.WriteLine("Paran");
            }
            else
            {
                Console.WriteLine("Neparan");
            }

            if (number % 1 == 0)
            {
                Console.WriteLine("Ceo");
            }
            else
            {
                Console.WriteLine("Decimalan");
            }
        }
    }
}
