using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domaci2
{
    public class WebPage : Searchable
    {
        public string Search(string word)
        {
            return $"Web Page {word}";
        }
    }
}
