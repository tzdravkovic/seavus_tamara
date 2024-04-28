using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cas_7
{
    public class Dog
    {
        public string Name { get; set; }
        public string Rase { get; set; }
        public string Color { get; set; }

        public Dog(string name, string rase, string color)
        {
            Name = name;
            Rase = rase;
            Color = color;
        }
        public string Eat()
        {
            return "The dog is now eating";
        }

        public string Play()
        {
            return "The dog is now playing";
        }

        public string ChaseTail()
        {
            return "The dog is now chasing tail";
        }
    }
}
