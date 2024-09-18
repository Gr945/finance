import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import { Grid } from '@mui/material';

function App() {
    return (
        <Grid container className="App">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route>
                    <Redirect to={'/'} />
                </Route>
            </Switch>
        </Grid>
    );
}

export default App;
