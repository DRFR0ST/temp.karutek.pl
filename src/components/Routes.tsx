import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, Temp, WrongPage } from "pages/"

const Routes = () => {
    // Use Temp component for maintenance mode.
    const mtMode = !!process.env.REACT_APP_MAINTENANCE_MODE;
    const HomeComponent = mtMode ? Temp : Home;

    return <Switch>
        <Route path="/" exact component={HomeComponent} />
        {mtMode && <Route path="/dev" exact component={Home} />}
        <Route exact component={WrongPage} />
    </Switch>
}

export default Routes;