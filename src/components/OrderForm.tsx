import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import IconTitle from './IconTitle';
import { OrderFormData } from '../interfaces/OrderFormData';

const OrderForm: React.FC = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState<OrderFormData>({
        germanGames: 0,
        englishGames: 0,
        deliveryAddress: '',
        billingAddress: '',
        comments: '',
        educationalDiscount: false,
        termsAccepted: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const target = e.target as HTMLInputElement;  // Cast to HTMLInputElement
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setFormData({
            ...formData,
            [target.name]: value
        });
    };
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        // Hier würdest du normalerweise den API-Aufruf zum Versenden der Daten machen
    };

    return (
        <div className="order-form-xyz container" id="OrderForm">
            <div className="spacer-s"></div>
            <IconTitle titleKey="OrderForm.Title" />
            <form onSubmit={handleSubmit}>
                <input type="number" name="germanGames" value={formData.germanGames} onChange={handleChange} min="0" max="9" placeholder={t('GermanGames')} />
                <input type="number" name="englishGames" value={formData.englishGames} onChange={handleChange} min="0" max="9" placeholder={t('EnglishGames')} />
                <input type="text" name="deliveryAddress" value={formData.deliveryAddress} onChange={handleChange} placeholder={t('DeliveryAddress')} />
                <input type="text" name="billingAddress" value={formData.billingAddress} onChange={handleChange} placeholder={t('BillingAddress')} />
                <textarea name="comments" value={formData.comments} onChange={handleChange} placeholder={t('Comments')} />
                <label>
                    <input type="checkbox" name="educationalDiscount" checked={formData.educationalDiscount} onChange={handleChange} />
                    {t('EducationalDiscount')}
                </label>
                <label>
                    <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
                    {t('AcceptTerms')}
                </label>
                <button type="submit">{t('Submit')}</button>
            </form>
        </div>
    );
};

export default OrderForm;