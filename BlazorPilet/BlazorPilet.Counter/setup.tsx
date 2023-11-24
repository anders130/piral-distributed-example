import { PiletApi } from '../piral~/BlazorPilet.Counter/node_modules/app-shell';

export default (app: PiletApi) => {
	app.registerMenu(app.fromBlazor("counter-menu"));
    app.registerMenu(app.fromBlazor("user-menu"), 0);
};