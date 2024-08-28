
using TMLS.WebApp.Models.Entities;

namespace TMLS.WebApp.Database

{
    public class InMemoryDatabase
    {
        public static List<Student> Students = new List<Student>()
        {
            new Student() { Id = 1, Name = "Tamara"},
            new Student() { Id = 2, Name = "Milica"}
        };

        public static List<Course> Course = new List<Course>();
        
    }
}
