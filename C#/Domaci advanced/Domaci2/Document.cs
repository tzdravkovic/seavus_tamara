using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domaci2
{
    public class Document : Searchable
    {
        public string Search(string word)
        {
            return $"Document {word}";
        }
    }
}
