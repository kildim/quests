import {
  BrowserRouter as Router, Route, Switch
} from 'components/common/common';
import Contacts from 'components/contacts/contacts';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Home from 'components/home/home';
import {ThemeProvider} from 'styled-components';
import * as S from './app.styled';
import {appTheme} from './common';
import Loading from '../common/loading/loading';
import {useSelector} from 'react-redux';
import {getIsQuestsLoading} from '../../store/redusers/quests-reducer/selectors';

const App = () => {
  const isQuestsLoading = useSelector(getIsQuestsLoading);;

  if (isQuestsLoading) {
    return (
      <ThemeProvider theme={appTheme}>
        <S.GlobalStyle/>
        <Loading/>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle/>
      <Router>
        <Switch>
          <Route exact path="/quest">
            <DetailedQuest/>
          </Route>
          <Route exact path="/contacts">
            <Contacts/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
