# piral-distributed-example
## app-shell
### Scaffold an application shell
```ps1
piral new --target app-shell
cd app-shell
npm i
```
### Start the Piral instance in debug mode
```ps1
npm run start
```
### Create an npm package for the app-shell
```ps1
npm run build
vsts-npm-auth -config .npmrc
npm publish
```
### Authentication with msal
- create app-registration with redirect-url set to `http:localhost:1234/auth`
- add your users to the app using **Microsoft Entra ID**
- Go to `Authentication` and enable Accesstoken and ID-Token
- create config.js in src folder
  ```js
  export const config = {
    clientId: 'your-client-id',
    authority: 'https://login.microsoftonline.com/tenant-id',
  };
  ```

## react-pilet
### Scaffold a new pilet for the app-shell
```ps1
pilet new ./app-shell/app/emulator/app-shell-1.0.0.tgz --target react-pilet
```
### Start a Pilet in debug mode
```ps1
npm run start
```
### publish to feed
```ps1
npx pilet publish --fresh --url https://feed.piral.cloud/api/v1/pilet/feed-name --api-key <your-api-key>
```
## blazor pilet
`.csproj`:
```xml
<Project Sdk="Microsoft.NET.Sdk.BlazorWebAssembly">

  <PropertyGroup>
    <TargetFramework>net7.0</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
    <!-- sample app-shell -->
    <PiralInstance>sample-piral</PiralInstance>
    <!-- local app-shell -->
    <PiralInstance>../../app-shell/app/emulator/app-shell-1.0.0.tgz</PiralInstance>
    <!-- app-shell from private npm-registry -->
    <PiralInstance>app-shell-npm-name@version</PiralInstance>
    <NpmRegistry>https://npm-registry-domain.com/company/</NpmRegistry>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="Microsoft.AspNetCore.Components.WebAssembly" Version="7.0.11" />
    <PackageReference Include="Piral.Blazor.DevServer" Version="7.0.10-pre.20231110.1" />
    <PackageReference Include="Piral.Blazor.Tools" Version="7.0.10-pre.20231110.1" />
    <PackageReference Include="Piral.Blazor.Utils" Version="7.0.10-pre.20231110.1" />
  </ItemGroup>

</Project>

```

### publish to feed
#### 1. Set the `PublishFeedUrl`:
```xml
<PropertyGroup>
    <TargetFramework>net7.0</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
    <PublishFeedUrl>https://feed.piral.cloud/api/v1/pilet/feed-name</PublishFeedUrl>
</PropertyGroup>
```
#### 2. Publish using `FolderProfile`:
```ps1
dotnet publish -p:PublishProfile=FolderProfile
```
