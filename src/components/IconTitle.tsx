// IconTitle.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

// Definiere ein Interface für die Props der Komponente
interface IconTitleProps {
  titleKey: string; // erwartet einen String als titleKey
}

const IconTitle: React.FC<IconTitleProps> = ({ titleKey }) => {
  const { t } = useTranslation();

  return (
    <div className="title-with-icon">
      <img src="header/logo.png" width="32" height="32" alt={t('Header.IconTitle')} className="title-icon" />
      <div className="byrd-xl-extra-bold">
        {t(titleKey)}
      </div>
    </div>
  );
};

export default IconTitle;