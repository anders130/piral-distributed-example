using Piral.Blazor.Utils;

namespace BlazorPilet.Shared;

/// <summary>
/// Extends the functionality of <see cref="IPiletService"></see>
/// </summary>
public static class PiletServiceExtensions
{
    private record NotificationOptions(int AutoClose);

    /// <param name="piletService"></param>
    /// <param name="content"></param>
    /// <param name="autoClose">Closes the notification after the specified milliseconds</param>
    /// <returns></returns>
    public static Task ShowNotification(this IPiletService piletService, string content, int autoClose)
    {
        return piletService.ShowNotification(content, new NotificationOptions(autoClose));
    }
}