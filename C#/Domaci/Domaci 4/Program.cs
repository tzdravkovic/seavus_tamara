using System.Reflection.Metadata;

namespace Domaci_4
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Driver driver1 = ChooseDriver();
            Car car1 = ChooseCar(driver1);

            Driver driver2 = ChooseDriver();
            Car car2 = ChooseCar(driver2);

            RaceCars(car1, car2);
        }

        static void RaceCars(Car car1, Car car2)
        {
            if (car1.CalculateSpeed() > car2.CalculateSpeed())
            {
                Console.WriteLine("Brzi je auto 1.");
            }
            else if (car1.CalculateSpeed() < car2.CalculateSpeed())
            {
                Console.WriteLine("Brzi je auto 2.");
            }
            else
            {
                Console.WriteLine("Automobili su iste brzine.");
            }
        }

        static Driver ChooseDriver()
        {
            Driver bob = new Driver("Bob", 5);
            Driver greg = new Driver("Greg", 7);
            Driver jill = new Driver("Jill", 3);
            Driver anne = new Driver("Anne", 10);

            Console.WriteLine($"Izaberite vozaca:{bob.Name}, {greg.Name}, {jill.Name}, {anne.Name}");
            string driverName = Console.ReadLine();

            Driver userDriver = bob;
            switch (driverName)
            {
                case "Bob":
                    userDriver = bob;
                    break;
                case "Greg":
                    userDriver = greg;
                    break;
                case "Jill":
                    userDriver = jill;
                    break;
                case "Anne":
                    userDriver = anne;
                    break;
                default:
                    Console.WriteLine("Niste izabrali vozaca sa liste. Podrazumevani vozac Bob.");
                    break;
            }
            return userDriver;
        }

        static Car ChooseCar(Driver userDriver)
        {
            Car hyundai = new Car("Hyundai", 80);
            Car mazda = new Car("Mazda", 60);
            Car ferrari = new Car("Ferrari", 100);
            Car porsche = new Car("Porsche", 100);

            Console.WriteLine($"Izaberite auto:{hyundai.Model}, {mazda.Model}, {ferrari.Model}, {porsche.Model}");
            string carName = Console.ReadLine();

            Car userCar = hyundai;
            switch (carName)
            {
                case "Hyundai":
                    userCar = hyundai;
                    userCar.Driver = userDriver;
                    break;
                case "Mazda":
                    userCar = mazda;
                    userCar.Driver = userDriver;
                    break;
                case "Ferrari":
                    userCar = ferrari;
                    userCar.Driver = userDriver;
                    break;
                case "Porsche":
                    userCar = porsche;
                    userCar.Driver = userDriver;
                    break;
                default:
                    Console.WriteLine("Niste izabrali auto sa liste. Podrazumevani auto Hyundai.");
                    break;
            }
            return userCar;
        }
    }
}
