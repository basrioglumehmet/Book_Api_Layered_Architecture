using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using Core.Entities;

namespace Core.Security.JsonWebToken
{
    public class JsonWebTokenHelper : ITokenHelper
    {
        private readonly TokenOptions _tokenOptions;

        // JsonWebTokenHelper sınıfının yapıcısı (constructor) TokenOptions nesnesini alır.
        // TokenOptions, JWT oluşturmak için gerekli olan ayarları içerir.
        public JsonWebTokenHelper(TokenOptions tokenOptions)
        {
            _tokenOptions = tokenOptions;
        }

        // Kullanıcı bilgilerini kullanarak bir JWT oluşturur ve AccessToken döner.
        public AccessToken CreateToken(User user)
        {
            // Güvenlik anahtarını (security key) oluşturur.
            // SecretKey, TokenOptions'dan alınır ve bir byte dizisine dönüştürülür.
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_tokenOptions.SecretKey));

            // Güvenlik kimlik doğrulama bilgilerini (signing credentials) oluşturur.
            // HMACSHA256 algoritması kullanılarak güvenlik anahtarı ile imzalanır.
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            // Kullanıcı bilgileri için claim'leri (yeni bir Claim nesnesi) tanımlar.
            // Claim'ler, JWT'de saklanan bilgileri temsil eder (örneğin, kullanıcı adı ve e-posta).
            var claims = new[]
            {
                new Claim(ClaimTypes.Name, user.Name),
                new Claim(ClaimTypes.Email, user.Email),
                // Diğer claim'leri buraya ekleyebilirsiniz
            };

            // Token tanımlayıcısını (token descriptor) oluşturur.
            // Bu nesne, token'ın nasıl oluşturulacağını belirtir.
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims), // Claim'ler burada tanımlanır.
                Expires = DateTime.UtcNow.AddMinutes(_tokenOptions.ExpirationMinutes), // Token'ın süresi burada belirtilir.
                Issuer = _tokenOptions.Issuer, // Token'ı oluşturanın kimliği.
                Audience = _tokenOptions.Audience, // Token'ın hedef kitlesi.
                SigningCredentials = credentials // Token'ın imzalanması için kullanılan bilgileri belirtir.
            };

            // JwtSecurityTokenHandler sınıfını kullanarak token oluşturur.
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);

            // Oluşturulan token'ı AccessToken nesnesine dönüştürür ve döner.
            // Token ve geçerlilik süresi (expire time) burada ayarlanır.
            return new AccessToken
            {
                Token = tokenHandler.WriteToken(token),
                ExpireAt = tokenDescriptor.Expires.Value
            };
        }
    }
}