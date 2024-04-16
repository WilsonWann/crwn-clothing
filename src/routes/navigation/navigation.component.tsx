import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutStart } from '../../store/user/user.action';

import { selectCurrentUser } from '../../store/user/user.selector';

import {
  NavigationContainer,
  NavLinksContainer,
  NavLink,
  LogoContainer,
} from './navigation.styles';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { useTranslation } from 'react-i18next';
import Select, { type ActionMeta } from 'react-select';

type OptionProps = {
  value: string;
  label: string;
};
const options: OptionProps[] = [
  { value: 'en', label: 'English' },
  { value: 'zh-tw', label: '繁體中文' },
];

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());
  const { t, i18n } = useTranslation();

  const onSelectorChange = (
    item: OptionProps | null,
    actionMeta: ActionMeta<OptionProps>,
  ) => {
    if (!item) return;
    i18n.changeLanguage(item.value);
  };

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/' title={t('logo')}>
          <CrwnLogo className={'logo'} />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to='/shop'>{t('Shop')}</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              {t('Sign Out')}
            </NavLink>
          ) : (
            <NavLink to='/auth'> {t('Sign In')}</NavLink>
          )}

          <Select
            defaultValue={options[0]}
            onChange={onSelectorChange}
            options={options}
          />
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
