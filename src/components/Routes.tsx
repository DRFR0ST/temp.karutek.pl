import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, Temp, WrongPage } from "pages/"

const Routes = () => {
    // Use Temp component for maintenance mode.
    const prodMode = !!process.env.REACT_APP_PRODUCTION_MODE;
    const HomeComponent = !prodMode ? Temp : Home;

    return <Switch>
        <Route path="/" exact component={HomeComponent} />
        {!prodMode && <Route path="/dev" exact component={Home} />}
        <Route exact component={WrongPage} />
    </Switch>
}

export default Routes;