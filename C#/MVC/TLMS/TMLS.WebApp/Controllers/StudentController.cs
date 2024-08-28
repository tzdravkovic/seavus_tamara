using Microsoft.AspNetCore.Mvc;
using TMLS.WebApp.Database;
using TMLS.WebApp.Models.ViewModels;
using TMLS.WebApp.Models.Entities;

namespace TMLS.WebApp.Controllers
{
    public class StudentController : Controller
    {
        public IActionResult GetStudentById(int id)
        {
           Student student = InMemoryDatabase.Students.Single(s => s.Id == id);

            StudentWithCourseDto studentWithCourseDto = new StudentWithCourseDto();
            studentWithCourseDto.Id = student.Id;
            studentWithCourseDto.Name = student.Name;

            return Json(studentWithCourseDto);
        }
    }
}
