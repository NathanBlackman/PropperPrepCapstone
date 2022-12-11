using Microsoft.AspNetCore.Http;
using PropperPrep.Repositories;
using PropperPrep.Models;
using Microsoft.AspNetCore.Mvc;

namespace PropperPrep.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly IUser _userRepo;

        public UserController(IUser userRepository)
        {
            _userRepo = userRepository;
        }

        // Get
        [HttpGet]
        public ActionResult GetAll()
        {
            var users = _userRepo.GetAllUsers();
            return Ok(users);
        }

        [HttpGet("{id}")]
        public ActionResult Details(int id)
        {
            var user = _userRepo.GetUserById(id);
            return Ok(user);
        }

        [HttpPost]
        public ActionResult PostUser(User user)
        {
            var newUser = _userRepo.CreateUser(user);
            return Ok(newUser);
        }

        [HttpPut]
        public void Put(User user)
        {
            _userRepo.UpdateUser(user);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _userRepo.DeleteUser(id);
        }

    }
}
