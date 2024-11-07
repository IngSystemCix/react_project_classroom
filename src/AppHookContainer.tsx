import App from "./App";
import { AppRouter } from "./AppRouter";

function AppHookContainer () {
    return (
        <App>
            <AppRouter />
        </App>
    )
}

export default AppHookContainer;