import React, { useState } from 'react';
import IconTitle from './IconTitle';
import { useTranslation } from 'react-i18next';
import { ContactFormData } from '../interfaces/ContactFormData';
import { settings } from '../config/settings';
import Modal from 'react-modal';

Modal.setAppElement('#root');

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
                body: JSON.stringify({
                    fromName: settings.ContactForm.fromName,
                    fromMail: settings.ContactForm.fromAddress,
                    to: settings.ContactForm.mailTo,
                    replyTo: formData.email,
                    subject: "Bestellanfrage von " + formData.name + " fuer UoC",
                    body: formData.message                   
                }),

                headers: { 'Content-Type': 'application/json' },
            });
    
            const responseBody = await response.json();    

            if (response.ok) {
                setModalHeader(t('ContactForm.Modal.Success.Header'));
                // Nachricht ist: Alles super, wenn was is melde dich bei mailadresse
                const successMessage = t('ContactForm.Modal.Success.Message.1') + " " + settings.ContactForm.fromAddress + " " + t('ContactForm.Modal.Success.Message.2');
                setModalMessage(successMessage);

            } else {
                // Verwendung der Fehlermeldung vom Server, falls vorhanden
                setModalHeader(t('ContactForm.Modal.Failure.Header'));
                const errorMessage = t('ContactForm.Modal.Failure.Message.1') + " " + settings.ContactForm.fromAddress + " " + t('ContactForm.Modal.Failure.Message.2') + " " + responseBody.message + t('ContactForm.Modal.Failure.Message.3');
                setModalMessage(errorMessage);
            }
        } catch (error: unknown) {
            
            let errorMessage = t('ContactForm.Modal.Failure.Message.1') + " " + settings.ContactForm.fromAddress + " " + t('ContactForm.Modal.Failure.Message.2') + " ";
            if (error instanceof Error) {
                errorMessage += error.message + t('ContactForm.Modal.Failure.Message.3');
            }
            setModalHeader(t('ContactForm.Modal.Failure.Header'));
            setModalMessage(errorMessage);
        }
            
        setModalIsOpen(true);
    };

    return (
        <section id="ContactForm" className="container" >
            <div className="spacer-s" />
            
            <IconTitle titleKey="ContactForm.Title" />
            
            <div className="spacer-s" />
            
            <div className="inter-l-light contact-form-limited">
                {t('ContactForm.Header.1')}{' '}
                {t('ContactForm.Header.2')}{' '}
            </div>

            <div className="spacer-m" />

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-row">
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
                        <label htmlFor="name-input" className="input-label inter-l-light">{t('ContactForm.Fields.Name')}</label>
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
                        <label htmlFor="email-input" className="input-label inter-l-light">{t('ContactForm.Fields.ReplyTo')}</label>
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
                    <label htmlFor="message-input" className="textarea-label inter-l-light">{t('ContactForm.Fields.Message')}</label>
                </div>

                <div className="contact-form-text-row">
                    {t('ContactForm.Required')}
                </div>

                <div className="contact-form-row">
                    <label htmlFor="consent-checkbox" className="contact-form-consent">
                        <input 
                            id="consent-checkbox"
                            type="checkbox" 
                            name="consent" 
                            checked={formData.consent} 
                            onChange={handleChange}
                            required
                            autoComplete='off'                           
                        />
                        {t('ContactForm.Fields.Consent.Start')}{' '}
                        <a href="/privacy" className="contact-form-privacy">
                            <b>{t('ContactForm.Fields.Consent.Privacy')}</b>{' '}
                        </a>
                        {t('ContactForm.Fields.Consent.End')}
                    </label>
                    <button type="submit" className="contact-form-button-submit byrd-m-extra-bold">{t('ContactForm.Submit')}</button>
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
        </section>
    );
};

export default ContactForm;
