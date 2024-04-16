import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';

import {
  CheckContainer,
  CheckHeader,
  HeaderBlock,
  Total,
} from './checkout.styles';
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';
import { useTranslation } from 'react-i18next';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const { t } = useTranslation();

  return (
    <CheckContainer>
      <CheckHeader>
        <HeaderBlock>
          <span>{t('Product')}</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>{t('Description')}</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>{t('Quantity')}</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>{t('Price')}</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>{t('Remove')}</span>
        </HeaderBlock>
      </CheckHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>{`${t('Total')}: ${cartTotal}`}</Total>
      <PaymentForm />
    </CheckContainer>
  );
};

export default Checkout;
