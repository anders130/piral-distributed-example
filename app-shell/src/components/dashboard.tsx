import * as React from "react"
import { DashboardContainerProps, DashboardTileProps } from "piral";

const defaultTiles = (
    <>
        <div className="tile rows-2 cols-2">
            <div className="teaser">
                <a href="https://piral.io/">Piral</a>
                <br />
                for next generation portals
            </div>
        </div>
        <div className="tile rows-2 cols-2">
            <div className="teaser">
                <a href="https://www.typescriptlang.org/">TypeScript</a>
                <br />
                for writing scalable web apps
            </div>
        </div>
        <div className="tile rows-2 cols-2">
            <div className="teaser">
                <a href="https://reactjs.org/">React</a>
                <br />
                for building components
            </div>
        </div>
        <div className="tile rows-2 cols-2">
            <div className="teaser">
                <a href="http://getbootstrap.com/">Bootstrap</a>
                <br />
                for layout and styling
            </div>
        </div>
        <div className="tile rows-2 cols-2">
            <div className="teaser">
                <a href="https://sass-lang.com">Sass</a>
                <br />
                for crafting custom styles
            </div>
        </div>
    </>
);

export const DashboardContainer: React.FC<DashboardContainerProps> = ({ children }) => (
    <div>
        <h1>Hello, world!</h1>
        <p>Welcome to your new microfrontend app shell, built with:</p>
        <div className="tiles">
            {defaultTiles}
            {children}
        </div>
    </div>
);

export const DashboardTile: React.FC<DashboardTileProps> = ({ columns, rows, children }) => 
    <div className={`tile cols-${columns} rows-${rows}`}>{children}</div>