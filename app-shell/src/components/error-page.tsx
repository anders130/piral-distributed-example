import * as React from "react"
import { SwitchErrorInfo, ErrorInfoProps } from "piral";

export const ErrorInfo: React.FC<ErrorInfoProps> = (props) => (
    <div>
        <h1>Error</h1>
        <SwitchErrorInfo {...props} />
    </div>
);