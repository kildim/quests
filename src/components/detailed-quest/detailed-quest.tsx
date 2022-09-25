import React from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getQuests} from '../../store/redusers/quests-reducer/selectors';
import {getEnumValueByKey} from '../../helpers/get-enum-value-by-key';
import {Filters} from '../../constants/filters';
import {Levels} from '../../constants/levels';
import Page404 from '../common/page-404/page-404';
import OrderLoader from './components/order-loader/order-loader';
import {getIsOrderFetching} from '../../store/redusers/orders-reducer/selectors';
import {setIsBookingModalOpened} from '../../store/redusers/app-integrity-reducer/app-integrity-actions';
import {getIsBookingModalOpened} from '../../store/redusers/app-integrity-reducer/selectors';

const DetailedQuest = () => {
  const dispatch = useDispatch();
  const {id} = useParams<{id: string}>();
  const quests = useSelector(getQuests);
  const isOrderFetching = useSelector(getIsOrderFetching);
  const isBookingModalOpened = useSelector(getIsBookingModalOpened)

  const onBookingBtnClick = () => {
    dispatch(setIsBookingModalOpened(true))
  };

  const quest = quests.find(quest => quest.id.toString() === id);

  if (quest === undefined) {
    return (<Page404 />)
  }

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`/${quest.coverImg}`}
          alt={`Постер квеста ${quest.title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{quest.title}</S.PageTitle>
            <S.PageSubtitle>{getEnumValueByKey(Filters, quest.type).toLowerCase()}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{`${quest.duration} мин`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{`${quest.peopleCount.join('-')} чел`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{getEnumValueByKey(Levels, quest.level)}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {quest.description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal />}
        {isOrderFetching && <OrderLoader/>}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
