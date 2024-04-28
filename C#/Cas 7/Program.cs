namespace Cas_7
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Human tamara = new Human("Tamara", "Zdravkovic", 25);

            //Console.WriteLine(tamara.GetPersonStats());

            //Human milica = new Human("Milica", "Marinkovic", 30);

            //Console.WriteLine(milica.GetPersonStats());





            //Dog edi = new Dog("Edi", "Pudla", "Braon");

            //Console.WriteLine("Unesite jednu od 3 komande: Eat, Play, Tail");
            //string input = Console.ReadLine();

            //switch (input)
            //{
            //    case "Eat":
            //        Console.WriteLine(edi.Eat());
            //        break;
            //    case "Play":
            //        Console.WriteLine(edi.Play());
            //        break;
            //    case "Tail":
            //        Console.WriteLine(edi.ChaseTail());
            //        break;
            //    default:
            //        Console.WriteLine("Niste uneli jednu od 3 komande");
            //        break;
            //}




            Student[] arrayStudent = new Student[]
            {
                new Student("Tamara", "Seavus Academy", 1),
                new Student("Milica", "Seavus Academy", 2),
                new Student("Djordje", "Seavus Academy", 2),
                new Student("Goran", "Seavus Academy", 2),
                new Student("Zarko", "Seavus Academy", 1)
            };

            Console.WriteLine("Unesite ime studenta");
            string input1 = Console.ReadLine();

            for(int i = 0; i < arrayStudent.Length; i++)
            {
                if(input1 == arrayStudent.Name)
                {
                    Console.WriteLine($"{arrayStudent.Name}, {arrayStudent.Academy}, {arrayStudent.Group}");
                }
            }




        }
    }
}
