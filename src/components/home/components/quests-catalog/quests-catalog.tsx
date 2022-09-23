import {ReactComponent as IconAllQuests} from 'assets/img/icon-all-quests.svg';
import {ReactComponent as IconAdventures} from 'assets/img/icon-adventures.svg';
import {ReactComponent as IconHorrors} from 'assets/img/icon-horrors.svg';
import {ReactComponent as IconMystic} from 'assets/img/icon-mystic.svg';
import {ReactComponent as IconDetective} from 'assets/img/icon-detective.svg';
import {ReactComponent as IconScifi} from 'assets/img/icon-scifi.svg';
import {ReactComponent as IconPerson} from 'assets/img/icon-person.svg';
import {ReactComponent as IconPuzzle} from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import {useDispatch, useSelector} from 'react-redux';
import {getFilter} from '../../../../store/redusers/quests-reducer/selectors';
import {Filters} from '../../../../constants/filters';
import {getFilterByValue} from '../../../../helpers/get-filter-by-value';
import {setFilter} from '../../../../store/redusers/quests-reducer/quests-actions';

const QuestsCatalog = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <S.Tabs>
        <S.TabItem>
          <S.TabBtn onClick={() => dispatch(setFilter(getFilterByValue(Filters.all)))} isActive={filter === getFilterByValue(Filters.all)}>
            <IconAllQuests/>
            <S.TabTitle>{Filters.all}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn onClick={() => dispatch(setFilter(getFilterByValue(Filters.adventures)))} isActive={filter === getFilterByValue(Filters.adventures)}>
            <IconAdventures/>
            <S.TabTitle>{Filters.adventures}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn onClick={() => dispatch(setFilter(getFilterByValue(Filters.horror)))} isActive={filter === getFilterByValue(Filters.horror)}>
            <IconHorrors/>
            <S.TabTitle>{Filters.horror}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn onClick={() => dispatch(setFilter(getFilterByValue(Filters.mystic)))} isActive={filter === getFilterByValue(Filters.mystic)}>
            <IconMystic/>
            <S.TabTitle>{Filters.mystic}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn onClick={() => dispatch(setFilter(getFilterByValue(Filters.detective)))} isActive={filter === getFilterByValue(Filters.detective)}>
            <IconDetective/>
            <S.TabTitle>{Filters.detective}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn onClick={() => dispatch(setFilter(getFilterByValue(Filters['Sci-fi'])))} isActive={filter === getFilterByValue(Filters['Sci-fi'])}>
            <IconScifi/>
            <S.TabTitle>{Filters['Sci-fi']}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>
      </S.Tabs>

      <S.QuestsList>
        <S.QuestItem>
          <S.QuestItemLink to="/quest">
            <S.Quest>
              <S.QuestImage
                src="img/preview-sklep.jpg"
                width="344"
                height="232"
                alt="квест Склеп"
              />

              <S.QuestContent>
                <S.QuestTitle>Склеп</S.QuestTitle>

                <S.QuestFeatures>
                  <S.QuestFeatureItem>
                    <IconPerson/>
                    2–5 чел
                  </S.QuestFeatureItem>
                  <S.QuestFeatureItem>
                    <IconPuzzle/>
                    сложный
                  </S.QuestFeatureItem>
                </S.QuestFeatures>
              </S.QuestContent>
            </S.Quest>
          </S.QuestItemLink>
        </S.QuestItem>

        <S.QuestItem>
          <S.QuestItemLink to="/quest">
            <S.Quest>
              <S.QuestImage
                src="img/preview-maniac.jpg"
                width="344"
                height="232"
                alt="квест Маньяк"
              />

              <S.QuestContent>
                <S.QuestTitle>Маньяк</S.QuestTitle>

                <S.QuestFeatures>
                  <S.QuestFeatureItem>
                    <IconPerson/>
                    3–6 чел
                  </S.QuestFeatureItem>
                  <S.QuestFeatureItem>
                    <IconPuzzle/>
                    средний
                  </S.QuestFeatureItem>
                </S.QuestFeatures>
              </S.QuestContent>
            </S.Quest>
          </S.QuestItemLink>
        </S.QuestItem>

        <S.QuestItem>
          <S.QuestItemLink to="/quest">
            <S.Quest>
              <S.QuestImage
                src="img/preview-ritual.jpg"
                width="344"
                height="232"
                alt="квест Ритуал"
              />

              <S.QuestContent>
                <S.QuestTitle>Ритуал</S.QuestTitle>

                <S.QuestFeatures>
                  <S.QuestFeatureItem>
                    <IconPerson/>
                    3–5 чел
                  </S.QuestFeatureItem>
                  <S.QuestFeatureItem>
                    <IconPuzzle/>
                    легкий
                  </S.QuestFeatureItem>
                </S.QuestFeatures>
              </S.QuestContent>
            </S.Quest>
          </S.QuestItemLink>
        </S.QuestItem>

        <S.QuestItem>
          <S.QuestItemLink to="/quest">
            <S.Quest>
              <S.QuestImage
                src="img/preview-old-ceil.jpg"
                width="344"
                height="232"
                alt="квест История призраков"
              />

              <S.QuestContent>
                <S.QuestTitle>История призраков</S.QuestTitle>

                <S.QuestFeatures>
                  <S.QuestFeatureItem>
                    <IconPerson/>
                    5–6 чел
                  </S.QuestFeatureItem>
                  <S.QuestFeatureItem>
                    <IconPuzzle/>
                    легкий
                  </S.QuestFeatureItem>
                </S.QuestFeatures>
              </S.QuestContent>
            </S.Quest>
          </S.QuestItemLink>
        </S.QuestItem>

        <S.QuestItem>
          <S.QuestItemLink to="/quest">
            <S.Quest>
              <S.QuestImage
                src="img/preview-final-frontier.jpg"
                width="344"
                height="232"
                alt="квест Тайны старого особняка"
              />

              <S.QuestContent>
                <S.QuestTitle>Тайны старого особняка</S.QuestTitle>

                <S.QuestFeatures>
                  <S.QuestFeatureItem>
                    <IconPerson/>
                    2–3 чел
                  </S.QuestFeatureItem>
                  <S.QuestFeatureItem>
                    <IconPuzzle/>
                    легкий
                  </S.QuestFeatureItem>
                </S.QuestFeatures>
              </S.QuestContent>
            </S.Quest>
          </S.QuestItemLink>
        </S.QuestItem>

        <S.QuestItem>
          <S.QuestItemLink to="/quest">
            <S.Quest>
              <S.QuestImage
                src="img/preview-house-in-the-woods.jpg"
                width="344"
                height="232"
                alt="квест Хижина в лесу"
              />

              <S.QuestContent>
                <S.QuestTitle>Хижина в лесу</S.QuestTitle>

                <S.QuestFeatures>
                  <S.QuestFeatureItem>
                    <IconPerson/>
                    4–7 чел
                  </S.QuestFeatureItem>
                  <S.QuestFeatureItem>
                    <IconPuzzle/>
                    средний
                  </S.QuestFeatureItem>
                </S.QuestFeatures>
              </S.QuestContent>
            </S.Quest>
          </S.QuestItemLink>
        </S.QuestItem>
      </S.QuestsList>
    </>
  )
};

export default QuestsCatalog;
