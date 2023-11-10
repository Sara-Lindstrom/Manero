using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using WebApi.Context;
using WebApi.DTO;
using WebApi.Models;

namespace WebApi.Controllers
{
    [Route("api/Addresses")]
    [ApiController]
    public class AddressController : ControllerBase
    {
        private readonly UserManager<UserModel> _userManager;
        private readonly UserDbContext _context;

        public AddressController(UserManager<UserModel> userManager, UserDbContext context)
        {
            _userManager = userManager;
            _context = context;
        }

        //Method to add address to a user
        [Authorize]
        [HttpPost("AddAddress")]
        public async Task<IActionResult> AddAddress([FromBody] UserAddressDTO addressDTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            var address = new Address
            {
                Title = addressDTO.Title,
                StreetName = addressDTO.StreetName,
                City = addressDTO.City,
                Country = addressDTO.Country,
                PostalCode = addressDTO.PostalCode,
                UserId = userId 
            };

            _context.Addresses.Add(address);
            await _context.SaveChangesAsync();

            return Ok(new { Message = "Address added successfully." });
        }

        // Method to get addresses associated with the currently authenticated user
        [Authorize]
        [HttpGet("UserAddresses")]
        public async Task<IActionResult> GetUserAddresses()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            var userAddresses = await _context.Addresses
                .Where(a => a.UserId == userId)
                .Select(address => new UserAddressDTO
                {
                    Id = address.Id,
                    Title = address.Title,
                    StreetName = address.StreetName,
                    City = address.City,
                    Country = address.Country,
                    PostalCode = address.PostalCode
                })
                .ToListAsync();

            return Ok(userAddresses);
        }

        // Method to get address by id
        [Authorize]
        [HttpGet("GetAddress/{addressId}")]
        public async Task<IActionResult> GetAddressById([FromRoute] int addressId)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            var userAddress = await _context.Addresses
                .Where(a => a.UserId == userId && a.Id == addressId)
                 .Select(address => new UserAddressDTO
                 {
                     Id = address.Id,
                     Title = address.Title,
                     StreetName = address.StreetName,
                     City = address.City,
                     Country = address.Country,
                     PostalCode = address.PostalCode
                 })
                .FirstOrDefaultAsync();

            if (userAddress == null)
            {
                return NotFound("Address not found.");
            }

            return Ok(userAddress);
        }

        // Method to update user address
        [Authorize]
        [HttpPut("UpdateAddress/{addressId}")]
        public async Task<IActionResult> UpdateUserAddress([FromRoute] int addressId, [FromBody] UserAddressDTO updatedAddressDTO)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            var existingAddress = await _context.Addresses
                .Where(a => a.Id == addressId && a.UserId == userId)
                .FirstOrDefaultAsync();

            if (existingAddress == null)
            {
                return NotFound("Address not found.");
            }

            // Update the address properties based on the provided fields in the DTO
            if (!string.IsNullOrEmpty(updatedAddressDTO.Title))
            {
                existingAddress.Title = updatedAddressDTO.Title;
            }
            if (!string.IsNullOrEmpty(updatedAddressDTO.StreetName))
            {
                existingAddress.StreetName = updatedAddressDTO.StreetName;
            }
            if (!string.IsNullOrEmpty(updatedAddressDTO.PostalCode))
            {
                existingAddress.PostalCode = updatedAddressDTO.PostalCode;
            }
            if (!string.IsNullOrEmpty(updatedAddressDTO.City))
            {
                existingAddress.City = updatedAddressDTO.City;
            }
            if (!string.IsNullOrEmpty(updatedAddressDTO.Country))
            {
                existingAddress.Country = updatedAddressDTO.Country;
            }

            await _context.SaveChangesAsync();

            return Ok(new { Message = "Address updated successfully." });
        }
    }
}
