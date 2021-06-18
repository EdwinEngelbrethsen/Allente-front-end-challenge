import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeScreen from '../pages/Homescreen';
import Topbar from '../components/Topbar';

const Routes = () => {
    return (
        <BrowserRouter>
            <Topbar />
            <Switch>
                <Route exact path="/" component={HomeScreen}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;