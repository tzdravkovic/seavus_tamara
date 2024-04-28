using System;

public class Human
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public int Age { get; set; }

    public Human()
    {

    }

    public Human(string firstName, string lastName, int age)
    {

    }
    public string GetPersonStats()
    {
        return FirstName + " " + LastName + " " + Age;  
    }

}
