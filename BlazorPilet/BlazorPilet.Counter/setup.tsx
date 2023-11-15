import { PiletApi } from '../piral~/BlazorPilet.Counter/node_modules/app-shell';

type AddScript = (path: string, attrs?: Record<string, string>) => void;
type AddStyles = (path: string, pos?: 'first' | 'last' | 'before' | 'after') => void;

export default (app: PiletApi, addScript: AddScript, addStyles: AddStyles) => {
	app.registerMenu(app.fromBlazor("counter-menu"));
};