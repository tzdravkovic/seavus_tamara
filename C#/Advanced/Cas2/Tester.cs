using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cas2
{
    public class Tester : Human
    {
        public bool IsQACertified { get; set; }
        public int NumberOfBugsFound { get; set; }
        
        public Tester(string fullName, int age, bool isQACertified) :
            base(fullName, age) {

            isQACertified = isQACertified;
        }
        public override string GetInfo()
        {
            return $"{FullName} - {Age} - IsQACertified: {IsQACertified} - Number of Bugs Found: {NumberOfBugsFound}";
        }
    }
}
