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
      <picture className="title-icon">
        <source srcSet="icon_small.webp" type="image/webp" />
        <img src="icon_small.png" alt="Icon" className="title-icon" />
      </picture>
      <div className="byrd-xl-extra-bold">
        {t(titleKey)}
      </div>
    </div>
  );
};

export default IconTitle;