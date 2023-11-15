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
