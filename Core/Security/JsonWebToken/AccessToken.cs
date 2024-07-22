namespace Core.Security.JsonWebToken
{
    public class AccessToken
    {
        public string Token { get; set; } = String.Empty;
        public DateTime ExpireAt { get; set; }
    }

}