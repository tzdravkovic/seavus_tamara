namespace Cas_6
{
    internal class Program
    {
        static void Main(string[] args)
        {
            DateTime currentDate = new DateTime(2024, 4, 16, 6, 3, 0);
            DateTime currentDay = DateTime.Today;
            DateTime currentDateTime = DateTime.Now;

            Console.WriteLine(currentDate);
            Console.WriteLine(currentDay);
            Console.WriteLine(currentDateTime);

            string dateFormat1 = currentDate.ToString("dd/MM/yyyy");
            Console.WriteLine(dateFormat1);

            string dateFormat2 = currentDate.ToString("dddd, dd/MM/yyyy");
            Console.WriteLine(dateFormat2);

            DateTime dateAfter100day = currentDateTime.AddDays(100);
            Console.WriteLine(dateAfter100day);

            DateTime removed1000Days = currentDateTime.AddDays(-1000);
            Console.WriteLine($"Pre 1000 dana bio je datum: {removed1000Days}");

            DateTime after30000Hours = currentDateTime.AddHours(30000);
            Console.WriteLine(after30000Hours);

            DateTime myBirthDay = new DateTime(1999, 01, 21);



            //Vezba 1 


            string text = "The whole group of G1  loves C#. They find learning this lenguage  fun and easy";

            int point = text.IndexOf(".");
            
            string afterPoint = text.Substring(point + 1);

            Console.WriteLine(afterPoint);


            //Vezba 2 



        }

        static string NumberStats(int number) { 

            
            if(number  > 0)
            {
                Console.WriteLine("Pozitivan");
            }else
            {
                Console.WriteLine("Negativan");

            }
        }
    }
}
