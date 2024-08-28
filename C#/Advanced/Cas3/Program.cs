namespace Cas3
{
    internal class Program
    {
        static void Main(string[] args)
        {

            //STATIC

            string word1 = "Nis";
            string word2 = "Seavus";
            string word3 = "a";
            string word4 = "";

            string eWord1 = TextHelpers.CapitalFirstLetter(word1);
            string eWord2 = TextHelpers.CapitalFirstLetter(word2);
            string eWord3 = TextHelpers.CapitalFirstLetter(word3); 
            string eWord4 = TextHelpers.CapitalFirstLetter(word4);
            
            Console.WriteLine($"Editet word: {word1}");
            Console.WriteLine($"Editet word: {word2}");
            Console.WriteLine($"Editet word: {word3}");
            Console.WriteLine($"Editet word: {word4}");

            Console.WriteLine(TextHelpers.CapitalLetterUses);

            string someWeirdWord = "tAMARA";

            string editedInvertedWord = TextHelpers.InvertMeCapitalizedChars(someWeirdWord);   
            
            Console.WriteLine(editedInvertedWord);


            string sentence = "Mi danas ucimo C#";
            
            Console.WriteLine(TextHelpers.NumberOfCapitalLetters(sentence));


            //POLIMORFIZAM

            Dog dog = new Dog();
            dog.Name = "Edi";

            Cat cat = new Cat();
            cat.Name = "Tobi";

            CallEatMethod(dog);
            CallEatMethod(cat);
        }

        public static void CallEatMethod(Pet pet)
        {
            pet.Eat();
        }
    }
}
