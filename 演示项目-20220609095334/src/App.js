import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Shouye from './pages/shouye/shouye';
import Xiangqingye from './pages/xiangqingye/xiangqingye';
import Wode from './pages/wode/wode';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={['/', '/shouye']} component={Shouye} />
        <Route exact path="/xiangqingye" component={Xiangqingye} />
        <Route exact path="/wode" component={Wode} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;