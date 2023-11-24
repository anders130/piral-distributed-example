using BlazorPilet.Counter.Services;
using Microsoft.AspNetCore.Components.Authorization;

namespace BlazorPilet.Counter;

public class Module
{
    public static void Main()
    {
        // only for visual studio
    }

    public static void ConfigureServices(IServiceCollection services)
    {
        services.AddOptions();
        services.AddAuthorizationCore();
        services.AddScoped<AuthenticationStateProvider, CustomAuthProvider>();
    }
}