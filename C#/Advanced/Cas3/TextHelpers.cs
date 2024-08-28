using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cas3
{
    public static class TextHelpers
    {
        public static int CapitalLetterUses = 0;
        public static string CapitalFirstLetter(string word)
        {
            string editedWord = "";

            if(word.Length == 0)
            {
                return "Empaty word";

            }else if(word.Length == 1)
            {
                editedWord = char.ToUpper(word[0]).ToString();

            }else
            {
                editedWord = char.ToUpper(word[0]) + word.Substring(1);
            }

            CapitalLetterUses++;

            return editedWord;

        }

        public static string InvertMeCapitalizedChars(string word)
        {
            string editedWord = "";

            for(int i = 0; i < word.Length; i++)
            {
                if (char.IsUpper(word[i]))
                {
                    editedWord += char.ToLower(word[i]);

                }else
                {
                    editedWord += char.ToUpper(word[i]);
                }
            }

            return editedWord;
        }

        public static int NumberOfCapitalLetters(string word)
        {
            int count = 0;

            for(int i = 0;i < word.Length;i++)
            {
                if (char.IsUpper(word[i]))
                {
                    count++;
                }
            }

            return count;
        }
    }
}
