import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from './directory-item.styles';
import { Category } from '../../store/categories/categories.types';
import { useTranslation } from 'react-i18next';

type DirectoryItemProps = {
  category: {
    route: string;
  } & Category;
};

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  const { t, i18n } = useTranslation();

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage $imageUrl={imageUrl} />
      <Body>
        <h2>{t(title)}</h2>
        <p>{t('shop now')}</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
