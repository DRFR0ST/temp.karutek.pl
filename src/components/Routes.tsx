import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, Temp, WrongPage } from "pages/"

const Routes = () => {
    // Use Temp component for production mode before release.
    const HomeComponent = process.env.NODE_ENV === "production" ? Temp : Home;

    return <Switch>
        <Route path="/" exact component={HomeComponent} />
        <Route path="/dev" exact component={Home} />
        <Route exact component={WrongPage} />
    </Switch>
}

export default Routes;