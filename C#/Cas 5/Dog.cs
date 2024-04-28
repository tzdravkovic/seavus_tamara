using System;
using System.Security.Cryptography;

public class Dog
{
	public string Name { get; set; }
	public string Rase {  get; set; }
	public string Color { get; set; }


    public Dog(string name, string rase, string color)
    {
        Name = name;
        Rase = rase;
        Color = color;
    }

    public void Eat()
	{
		Console.WriteLine("Pas sada jede");
	}

    public void Play()
    {
        Console.WriteLine("Pas sada igra.");
    }

    public void ChaseTail()
    {
        Console.WriteLine("Pas sada juri svoj rep.");
    }
}
