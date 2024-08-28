

using Newtonsoft.Json;

namespace Serijalizacija_i_Deserijalizacija
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string name = Console.ReadLine();
            int age = int.Parse(Console.ReadLine());
            string color = Console.ReadLine();

            Dog dog = new Dog(name, age, color);

            string json = JsonConvert.SerializeObject(dog);

            string path = "D:\\Tamara\\Akademija\\dogs.json";

            StreamWriter sw = new StreamWriter(path);

            using (sw)
            {
                sw.Write(json);
            }

            StreamReader sr = new StreamReader(path);
            string text;

            using (sr)
            {
                text = sr.ReadLine();
            }

            Dog myDog = JsonConvert.DeserializeObject<Dog>(text);

            Console.WriteLine($"{myDog.Name} {myDog.Age} {myDog.Color}");
        }
    }
}
