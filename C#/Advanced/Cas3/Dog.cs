using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cas3
{
    public class Dog : Pet
    {
        public bool IsGoodBoy { get; set; }
        public override void Eat()
        {
            base.Eat();

            Console.WriteLine("Ja sam pas i ja sada jedem");
        }

    }
}
