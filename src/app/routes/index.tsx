import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Dasboard } from "../pages";

export const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact Component={Dasboard} />
            </Switch>
        </BrowserRouter>
    );
}
