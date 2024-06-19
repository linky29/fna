import React, { useState } from 'react';
import IconTitle from './IconTitle';
import { useTranslation } from 'react-i18next';
import { OrderFormData } from '../interfaces/OrderFormData';
import { settings } from '../config/settings';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const OrderForm: React.FC = () => {
    const { t } = useTranslation();

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalHeader, setModalHeader] = useState('');
    const [modalMessage, setModalMessage] = useState('');

    const [formData, setFormData] = useState<OrderFormData>({
        name: '',
        email: '',
        message: '',
        consent: false,
    });

    const isValidEmail = (email: string) => {
        // Einfaches Regex für grundlegende E-Mail-Validierung
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type, checked } = event.target as HTMLInputElement;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!formData.consent) {
            setModalHeader(t('OrderForm.Modal.Validation.Header'));
            setModalMessage(t('OrderForm.Modal.Validation.ConsentNotChecked'));
            setModalIsOpen(true);
            return;
        }

        if (!isValidEmail(formData.email)) {
            setModalHeader(t('OrderForm.Modal.Validation.Header'));
            setModalMessage(t('OrderForm.Modal.Validation.InvalidEmail'));
            setModalIsOpen(true);
            return; // Stoppt die Ausführung, wenn die E-Mail ungültig ist
        }
          
        try {
            const response = await fetch(`${settings.apiUrl}mail`, {
                method: 'POST',
                body: JSON.stringify({
                    fromName: settings.OrderForm.fromName,
                    fromMail: settings.OrderForm.fromAddress,
                    to: settings.OrderForm.mailTo,
                    replyTo: formData.email,
                    subject: "Bestellanfrage von " + formData.name + " fuer UoC",
                    body: formData.message                   
                }),

                headers: { 'Content-Type': 'application/json' },
            });
    
            const responseBody = await response.json();    

            if (response.ok) {
                setModalHeader(t('OrderForm.Modal.Success.Header'));
                // Nachricht ist: Alles super, wenn was is melde dich bei mailadresse
                const successMessage = t('OrderForm.Modal.Success.Message.1') + " " + settings.OrderForm.fromAddress + " " + t('OrderForm.Modal.Success.Message.2');
                setModalMessage(successMessage);

            } else {
                // Verwendung der Fehlermeldung vom Server, falls vorhanden
                setModalHeader(t('OrderForm.Modal.Failure.Header'));
                const errorMessage = t('OrderForm.Modal.Failure.Message.1') + " " + settings.OrderForm.fromAddress + " " + t('OrderForm.Modal.Failure.Message.2') + " " + responseBody.message + t('OrderForm.Modal.Failure.Message.3');
                setModalMessage(errorMessage);
            }
        } catch (error: unknown) {
            let errorMessage = t('OrderForm.Modal.Failure.Message');
            if (error instanceof Error) {
                errorMessage += " " + t('OrderForm.Modal.Failure.Info') + error.message;
            }
            setModalHeader(t('OrderForm.Modal.Failure.Header'));
            setModalMessage(errorMessage);
        }
            
        setModalIsOpen(true);
    };

    return (
        <section id="OrderForm" className="container" >
            <div className="spacer-s" />
            
            <IconTitle titleKey="OrderForm.Title" />
            
            <div className="spacer-s" />
            
            <div className="inter-l-light order-form-limited">
                {t('OrderForm.Header.1')}{' '}
                <b>{t('OrderForm.Header.2')}</b>{' '}
                {t('OrderForm.Header.3')}{' '}
                <b>{t('OrderForm.Header.4')}</b>{' '}
                {t('OrderForm.Header.5')}{' '}
                {t('OrderForm.Header.6')}
            </div>

            <div className="spacer-m" />

            <form className="order-form" onSubmit={handleSubmit}>
                <div className="order-form-price-tag inter-l-bold">
                    {t('OrderForm.PriceTag')}
                </div>
                <div className="order-form-row">
                    <div className="floating-label-group">
                        <input 
                            id="name-input"
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange}
                            required
                            className="input-element inter-l-light"
                            placeholder=" "
                            autoComplete='name'
                        />
                        <label htmlFor="name-input" className="input-label inter-l-light">{t('OrderForm.Fields.Name')}</label>
                    </div>
                    <div className="floating-label-group">
                        <input 
                            id="email-input"
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange}
                            required
                            className="input-element inter-l-light"
                            placeholder=" "
                            autoComplete='email'
                        />
                        <label htmlFor="email-input" className="input-label inter-l-light">{t('OrderForm.Fields.ReplyTo')}</label>
                    </div>
                </div>

                <div className="textarea-floating-label-group">
                    <textarea
                        id="message-input" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange}
                        required
                        className="textarea-element inter-l-light"
                        placeholder=" "
                        autoComplete="off"
                    />
                    <label htmlFor="message-input" className="textarea-label inter-l-light">{t('OrderForm.Fields.Message')}</label>
                </div>

                <div className="order-form-text-row">
                    {t('OrderForm.Required')}
                </div>

                <div className="order-form-row">
                    <label htmlFor="consent-checkbox" className="order-form-consent">
                        <input 
                            id="consent-checkbox"
                            type="checkbox" 
                            name="consent" 
                            checked={formData.consent} 
                            onChange={handleChange}
                            required
                            autoComplete='off'                           
                        />
                        {t('OrderForm.Fields.Consent.Start')}{' '}
                        <a href="/privacy" className="order-form-privacy">
                            <b>{t('OrderForm.Fields.Consent.Privacy')}</b>{' '}
                        </a>
                        {t('OrderForm.Fields.Consent.End')}
                    </label>
                    <button type="submit" className="order-form-button-submit byrd-m-extra-bold">{t('OrderForm.Submit')}</button>
                </div>
            </form>
            
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="OrderFormModal"
                className="order-form-modal-content"
            >
                <div className="order-form-modal">
                    <div className="order-form-modal-header inter-l-bold">{modalHeader}</div>
                    <div className="order-form-modal-message inter-l-light">{modalMessage}</div>
                    <div className="order-form-modal-button byrd-s-extra-bold" onClick={() => setModalIsOpen(false)}>{t('OrderForm.Modal.Button')}</div>
                </div>
            </Modal>
        </section>
    );
};

export default OrderForm;
