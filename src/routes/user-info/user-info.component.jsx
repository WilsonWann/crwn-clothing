import { UserInfoContainer } from './user-info.styles'
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { useTranslation } from 'react-i18next';

const UserInfo = () => {

  const currentUser = useSelector(selectCurrentUser);
  const { t } = useTranslation()

  return currentUser && (
    <UserInfoContainer>
      <h2>{`${t("Display Name")}: ${currentUser.displayName}`}</h2>
      <h2>{`${t("Email")}: ${currentUser.email}`}</h2>
      <h2>{`${t("Create Date")}: ${currentUser.createdAt.toDate()}`}</h2>
    </UserInfoContainer>
  )
}

export default UserInfo
