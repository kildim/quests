import * as S from './tab-item.styled';
import {ReactComponent as IconAllQuests} from '../../../../../../assets/img/icon-all-quests.svg';
import {useSelector} from 'react-redux';
import {getFilter} from '../../../../../../store/redusers/quests-reducer/selectors';

type TabItemProps = {
  title: string
}

const TabItem = (props: TabItemProps) => {
  const {title} = props;
  const filter = useSelector(getFilter);

  return (
    <>
      <S.TabItem>
        <S.TabBtn isActive>
          <IconAllQuests/>
          <S.TabTitle>{title}</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>
    </>
  )
}

export default TabItem;
