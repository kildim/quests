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
import {useSelector, useStore} from 'react-redux';
import {getIsQuestsLoading} from '../../store/redusers/quests-reducer/selectors';
import {useEffect} from 'react';
import {fetchQuests} from '../../services/api/quests-api';
import Page404 from '../common/page-404/page-404';
import {ThunkAppDispatch} from '../../types/thunk-app-dispatch';

const App = () => {
  const store = useStore();

  useEffect(() => {
    (store.dispatch as ThunkAppDispatch)(fetchQuests());
    }, [store.dispatch]
  );

  const isQuestsLoading = useSelector(getIsQuestsLoading);

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
          <Route exact path="/detailed-quest/:id">
            <DetailedQuest/>
          </Route>
          <Route exact path="/contacts">
            <Contacts/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
