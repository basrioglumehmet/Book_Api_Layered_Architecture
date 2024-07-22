

using Core.Entities;

namespace Core.Security.JsonWebToken
{
    public interface ITokenHelper
    {
        AccessToken CreateToken(User user);
    }
}
