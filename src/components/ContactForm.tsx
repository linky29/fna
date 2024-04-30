import React, { useState } from 'react';
import IconTitle from './IconTitle';
import { useTranslation } from 'react-i18next';
import { ContactFormData } from '../interfaces/ContactFormData';
import { settings } from '../config/settings';
import Modal from 'react-modal';

const ContactForm: React.FC = () => {
    const { t } = useTranslation();

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalHeader, setModalHeader] = useState('');
    const [modalMessage, setModalMessage] = useState('');

    const [formData, setFormData] = useState<ContactFormData>({
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
            setModalHeader(t('ContactForm.Modal.Validation.Header'));
            setModalMessage(t('ContactForm.Modal.Validation.ConsentNotChecked'));
            setModalIsOpen(true);
            return;
        }

        if (!isValidEmail(formData.email)) {
            setModalHeader(t('ContactForm.Modal.Validation.Header'));
            setModalMessage(t('ContactForm.Modal.Validation.InvalidEmail'));
            setModalIsOpen(true);
            return; // Stoppt die Ausführung, wenn die E-Mail ungültig ist
        }
          
        try {
            const response = await fetch(`${settings.apiUrl}mail`, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: { 'Content-Type': 'application/json' },
            });
    
            const responseBody = await response.json();    

            if (response.ok) {
                setModalHeader(t('ContactForm.Modal.Success.Header'));
                setModalMessage(t('ContactForm.Modal.Success.Message'));                
            } else {
                // Verwendung der Fehlermeldung vom Server, falls vorhanden
                setModalHeader(t('ContactForm.Modal.Failure.Header'));
                const errorMessage = responseBody.message || t('ContactForm.Modal.Failure.Message');
                setModalMessage(errorMessage);
            }
        } catch (error: unknown) {
            let errorMessage = t('ContactForm.Modal.Failure.Message');
            if (error instanceof Error) {
                errorMessage += " " + t('ContactForm.Modal.Failure.Info') + error.message;
            }
            setModalHeader(t('ContactForm.Modal.Failure.Header'));
            setModalMessage(errorMessage);
        }
            
        setModalIsOpen(true);
    };

    return (
        <div className="container" id="OrderForm">
            <div className="spacer-s"></div>
            
            <IconTitle titleKey="ContactForm.Title" />
            
            <div className="spacer-s"></div>
            
            <div className="inter-l-light">
                {t('ContactForm.Header.1')}{' '}
                <b>{t('ContactForm.Header.2')}</b>{' '}
                {t('ContactForm.Header.3')}{' '}
                <b>{t('ContactForm.Header.4')}</b>{' '}
                {t('ContactForm.Header.5')}{' '}
                {t('ContactForm.Header.6')}
            </div>

            <div className='spacer-m'></div>

            <form className="order-form" onSubmit={handleSubmit}>
                <div className="order-form-price-tag inter-l-bold">
                    {t('ContactForm.PriceTag')}
                </div>
                <div className="order-form-row">
                    <div className="floating-label-group">
                        <input 
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange}
                            required
                            className="input-element inter-l-light"
                            placeholder=" "
                        />
                        <label className="input-label inter-l-light">{t('ContactForm.Fields.Name')}</label>
                    </div>
                    <div className="floating-label-group">
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange}
                            required
                            className="input-element inter-l-light"
                            placeholder=" "
                        />
                        <label className="input-label inter-l-light">{t('ContactForm.Fields.ReplyTo')}</label>
                    </div>
                </div>

                <div className="textarea-floating-label-group">
                    <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange}
                        required
                        className="textarea-element"
                        placeholder=" "
                    />
                    <label className="textarea-label inter-l-light">{t('ContactForm.Fields.Message')}</label>
                </div>

                <div className="order-form-text-row">
                    {t('ContactForm.Required')}
                </div>

                <div className="order-form-row">
                    <label>
                        <input 
                            type="checkbox" 
                            name="consent" 
                            checked={formData.consent} 
                            onChange={handleChange}
                        />
                        {t('ContactForm.Fields.Consent')}
                    </label>
                    <button type="submit" className="order-form-button-submit byrd-m-extra-bold">{t('ContactForm.Submit')}</button>
                </div>
            </form>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="ContactFormModal"
                className="contact-form-modal-content"
            >
                <div className="contact-form-modal">
                    <div className="contact-form-modal-header inter-l-bold">{modalHeader}</div>
                    <div className="contact-form-modal-message inter-l-light">{modalMessage}</div>
                    <div className="contact-form-modal-button byrd-s-extra-bold" onClick={() => setModalIsOpen(false)}>{t('ContactForm.Modal.Button')}</div>
                </div>
            </Modal>
        </div>
    );
};

export default ContactForm;
