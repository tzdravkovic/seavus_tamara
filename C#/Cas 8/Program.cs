using System.Dynamic;

namespace Cas_8
{
    internal class Program
    {
        static void Main(string[] args)
        {

            //LIST
        
            List<string> studentNames = new List<string>();

            studentNames.Add("John");
            studentNames.Add("Djordje");
            studentNames.Add("Tamara");
            studentNames.Add("Sava");
            studentNames.Add("Goran");
            studentNames.Add("Milica");

            studentNames.Remove("John");

            Console.WriteLine("Studeent names: ");
            foreach (string name in studentNames) {
                Console.WriteLine(name);
            }

            string search = "Tamara";

            if(studentNames.Contains("Tamara"))
            {
                Console.WriteLine($"There is a student with name: {search}");
            }

            Console.WriteLine($"There is { studentNames.Count } elements is this list");

            List<int> numbers = new List<int>() {10, 5, 20, 30, 7};

            Console.WriteLine("Numbers are: ");
            foreach (int number in numbers)
            {
                Console.WriteLine(number);
            }

            Console.WriteLine($"On position 3 there is a number: {numbers[2]}");

            Console.WriteLine($"On position 5 there is a number: {numbers.ElementAt(4)}");

            numbers.Remove(1);

            Console.WriteLine($"On position 2 there is a number: {numbers[1]}");



            //DISCITIONARY


            Dictionary<string, int> studentGrades = new Dictionary<string, int>();

            studentGrades.Add("Djordje", 10);
            studentGrades.Add("Tamara", 10);
            studentGrades.Add("John", 7);
            studentGrades.Add("Sava", 10);
            studentGrades.Add("Bob", 8);
            studentGrades.Add("Goran", 10);
            studentGrades.Add("Sam", 7);
            studentGrades.Add("Milica", 10);

            Console.WriteLine("Students and grades: ");

            foreach(KeyValuePair<string, int> grade in studentGrades)
            {
                Console.WriteLine($"Student: {grade.Key} - ocena: {grade.Value}");
            }


            if(studentGrades.ContainsKey("Milica"))
            {
                Console.WriteLine("There is a student called Milica");
            }

            if (studentGrades.ContainsValue(7))
            {
                Console.WriteLine("There is a student with grade 7 in the database");

                Console.WriteLine($"There is {studentGrades.Count} key - value pairs in this Dictionary");

                Console.WriteLine($"Student John has grade: {studentGrades["John"]}");


                Dictionary<string, bool> todoList = new Dictionary<string, bool>()
                {
                    {"Wash a car", false},
                    {"Get groceries", true},
                    {"Write homework", true }
                };



                //QUEUE


                Queue<string> queueInShop = new Queue<string>();

                queueInShop.Enqueue("Goran (Prvi dosao)");
                queueInShop.Enqueue("Milica (Druga dosla)");
                queueInShop.Enqueue("Almir (treci dosao)");

                queueInShop.Dequeue();
                Console.WriteLine($"Klijent je platio... idemo dalje {queueInShop.Peek()} je na redu");

                foreach (string elemenmt in queueInShop)
                {
                    Console.WriteLine(elemenmt);
                }


                queueInShop.Dequeue();
                Console.WriteLine($"Klijent je platio... idemo dalje {queueInShop.Peek()} je na redu");

                foreach (string elemenmt in queueInShop)
                {
                    Console.WriteLine(elemenmt);
                }



                //STACK


                Stack<string> cookies = new Stack<string>();

                cookies.Push("Prvi keks");
                cookies.Push("Drugi keks");
                cookies.Push("Treci keks");
                cookies.Push("Cetvrti keks");
                cookies.Push("Peti keks");

                Console.WriteLine("Cookies: ");
                foreach (string elemenmt in cookies)
                {
                    Console.WriteLine(elemenmt);
                }

                cookies.Pop();
                Console.WriteLine($"Keks je izvadjen... idemo dalje, naredni je {cookies.Peek()}");

                Console.WriteLine("Cookies: ");
                foreach (string elemenmt in cookies)
                {
                    Console.WriteLine(elemenmt);
                }

                cookies.Pop();
                cookies.Pop();
                Console.WriteLine($"Dva keksa su izvadjena... idemo dalje, naredni je {cookies.Peek()}");

                Console.WriteLine("Cookies: ");
                foreach (string elemenmt in cookies)
                {
                    Console.WriteLine(elemenmt);
                }

                cookies.Pop();
                Console.WriteLine("Keks je izvadjen...");







                //Zadatak 1


                Dictionary<string, string> phoneBook = new Dictionary<string, string>();

                phoneBook.Add("Djordje", "064333555");
                phoneBook.Add("Milica", "064333444");
                phoneBook.Add("Goran", "064333111");
                phoneBook.Add("Sava", "064333222");
                phoneBook.Add("Tamara", "064333333");

                Console.WriteLine("Unesite ime ciji broj trazite: ");

                string name = Console.ReadLine();

                if (phoneBook.ContainsKey(name))
                {
                    Console.WriteLine(phoneBook[name]);
                }
                else
                {
                    Console.WriteLine("Ne postoji ova osoba u imeniku");
                }





                //Linq

                List<string> students = new List<string>()
                {
                    "Tamara", "Sava", "Goran", "Milica", "John", "Manuel", "Stefan", "Almir"
                };


                foreach (string student in students)
                {
                    if(student.Length == 4)
                    {
                        Console.WriteLine($"Ovaj student ima 4 slova u svom imenu {student}");
                    }
                }

                List<string> studentsWith5Letters = new List<string>();

                foreach (string student in students)
                {
                    if(student.Length == 5)
                    {
                        studentsWith5Letters.Add(student);
                    }
                }

                List<string> studentWithFiveLettrs = 
                    students.Where(item => item.Length == 5).ToList();
                
                Console.WriteLine("Pet slova u svom imenu");
                foreach (string student in studentsWith5Letters)
                {
                    Console.WriteLine(student);
                }

                List<int> nameLengths = new List<int>();

                foreach(string student in students)
                {
                    nameLengths.Add(student.Length);
                }


                List<int> studentNameLengths = 
                    students.Select(item => item.Length).ToList();


            }
        
        }
    }
}
