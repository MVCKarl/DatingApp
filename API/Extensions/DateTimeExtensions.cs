
namespace API.Extensions
{
    public static class DateTimeExtensions
    {
        public static int CalculateAge(this DateTime dob)
        {
            var today = DateTime.UtcNow;
            var age = today.Year - dob.Year;

            //if (dob.Year > today.AddYears(-age)) age--;

            return age;
        }
    }
}