using Microsoft.AspNetCore.Components.Authorization;
using System.Security.Claims;
using Piral.Blazor.Utils;
using System.IdentityModel.Tokens.Jwt;

namespace BlazorPilet.Counter.Services;

public sealed class CustomAuthProvider : AuthenticationStateProvider
{
    private readonly IPiletService _piletService;

    public CustomAuthProvider(IPiletService piletService)
    {
        _piletService = piletService;
    }

    public override async Task<AuthenticationState> GetAuthenticationStateAsync()
    {
        var jwtToken = await _piletService.GetAccessToken();
        if (string.IsNullOrEmpty(jwtToken))
            return CreateAuthState();

        var claims = ParseClaimsFromJwt(jwtToken).ToArray();

        if (!long.TryParse(claims.First(claim => claim.Type == "exp").Value, out long longExp) ||
            DateTimeOffset.FromUnixTimeSeconds(longExp).DateTime < DateTime.UtcNow)
        {
            return CreateAuthState();
        }

        return CreateAuthState(claims);
    }

    private static AuthenticationState CreateAuthState(Claim[]? claims = null) =>
        claims is null ? new AuthenticationState(new ClaimsPrincipal(new ClaimsIdentity())) :
        new AuthenticationState(new ClaimsPrincipal(new ClaimsIdentity(claims, "JwtAuth")));

    private static IEnumerable<Claim> ParseClaimsFromJwt(string jwt)
    {
        var handler = new JwtSecurityTokenHandler();
        var jsonToken = handler.ReadToken(jwt);
        var token = jsonToken as JwtSecurityToken;
        return token!.Claims.Select(c => c.Type switch
        {
            "name" => new Claim(ClaimTypes.Name, c.Value),
            _ => c
        });
    }
}