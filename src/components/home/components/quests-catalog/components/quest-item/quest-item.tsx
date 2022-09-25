import * as S from './quest-item.styled';
import {ReactComponent as IconPerson} from '../../../../../../assets/img/icon-person.svg';
import {ReactComponent as IconPuzzle} from '../../../../../../assets/img/icon-puzzle.svg';
import {Quest} from '../../../../../../types/quest';

type Props = {
  quest: Quest,
}

const QuestItem = (props: Props) => {
  const {quest} = props;

  return (
    <S.QuestItem>
      <S.QuestItemLink to={`/detailed-quest/${quest.id}`}>
        <S.Quest>
          <S.QuestImage
            src={`/${quest.previewImg}`}
            width="344"
            height="232"
            alt={`Постер квеста ${quest.title}`}
          />

          <S.QuestContent>
            <S.QuestTitle>{quest.title}</S.QuestTitle>

            <S.QuestFeatures>
              <S.QuestFeatureItem>
                <IconPerson/>
                {`${quest.peopleCount.join('-')} чел`}
              </S.QuestFeatureItem>
              <S.QuestFeatureItem>
                <IconPuzzle/>
                {quest.level}
              </S.QuestFeatureItem>
            </S.QuestFeatures>
          </S.QuestContent>
        </S.Quest>
      </S.QuestItemLink>
    </S.QuestItem>
  )
}

export default QuestItem;
