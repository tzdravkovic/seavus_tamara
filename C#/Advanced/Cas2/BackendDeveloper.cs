using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cas2
{
    public class BackendDeveloper : Developer, IDeveloper
    {
        public BackendDeveloper(string fullName, int age) 
            : base(fullName, age) 
        { 
        }
    }
}
