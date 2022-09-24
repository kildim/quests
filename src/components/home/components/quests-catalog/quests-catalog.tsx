import {ReactComponent as IconAllQuests} from 'assets/img/icon-all-quests.svg';
import {ReactComponent as IconAdventures} from 'assets/img/icon-adventures.svg';
import {ReactComponent as IconHorrors} from 'assets/img/icon-horrors.svg';
import {ReactComponent as IconMystic} from 'assets/img/icon-mystic.svg';
import {ReactComponent as IconDetective} from 'assets/img/icon-detective.svg';
import {ReactComponent as IconScifi} from 'assets/img/icon-scifi.svg';
import * as S from './quests-catalog.styled';
import {useDispatch, useSelector} from 'react-redux';
import {getFilter, getQuests} from '../../../../store/redusers/quests-reducer/selectors';
import {Filters} from '../../../../constants/filters';
import {getFilterByValue} from '../../../../helpers/get-filter-by-value';
import {setFilter} from '../../../../store/redusers/quests-reducer/quests-actions';
import {FilterTitle} from '../../../../types/filtersTitle';
import QuestItem from './components/quest-item/quest-item';

const QuestsCatalog = () => {
  const filter = useSelector(getFilter);
  const quests = useSelector(getQuests)
  const dispatch = useDispatch();

  const filterQuestItems = (filter: FilterTitle) => {
    if (filter === Filters.all) {
      return [...quests]
    }

    return quests.filter(quest => quest.type === getFilterByValue(filter))
  }

  const filteredQuests = filterQuestItems(filter);

  return (
    <>
      <S.Tabs>
        <S.TabItem>
          <S.TabBtn onClick={() => dispatch(setFilter(Filters.all))} isActive={filter === Filters.all}>
            <IconAllQuests/>
            <S.TabTitle>{Filters.all}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn onClick={() => dispatch(setFilter(Filters.adventures))} isActive={filter === Filters.adventures}>
            <IconAdventures/>
            <S.TabTitle>{Filters.adventures}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn onClick={() => dispatch(setFilter(Filters.horror))} isActive={filter === Filters.horror}>
            <IconHorrors/>
            <S.TabTitle>{Filters.horror}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn onClick={() => dispatch(setFilter(Filters.mystic))} isActive={filter === Filters.mystic}>
            <IconMystic/>
            <S.TabTitle>{Filters.mystic}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn onClick={() => dispatch(setFilter(Filters.detective))} isActive={filter === Filters.detective}>
            <IconDetective/>
            <S.TabTitle>{Filters.detective}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn onClick={() => dispatch(setFilter(Filters['sci-fi']))} isActive={filter === Filters['sci-fi']}>
            <IconScifi/>
            <S.TabTitle>{Filters['sci-fi']}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>
      </S.Tabs>

      <S.QuestsList>
        {filteredQuests.map(item => <QuestItem quest={item} key={item.id}/>) }
      </S.QuestsList>
    </>
  )
};

export default QuestsCatalog;
