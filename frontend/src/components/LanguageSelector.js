import React from 'react';
import {withTranslation} from 'react-i18next';
import { changeLanguage } from '../api/apiCalls';

const LanguageSelector = (props) => {
    const onChangeLanguage = language => {
        const { i18n } = props;
        i18n.changeLanguage(language);
        changeLanguage(language);
    };

    return (
        <div className="container">
            <img width={24}
                src="https://cdn.countryflags.com/thumbs/turkey/flag-400.png"
                alt="Turkish Flag"
                onClick={() => onChangeLanguage('tr')}
                style={{ cursor: 'pointer' }} />
            <img width={24}
                src="https://cdn3.iconfinder.com/data/icons/all-national-flags-of-the-world-very-high-quality/283/usa-512.png" alt="USA Flag"
                onClick={() => onChangeLanguage('en')}
                style={{ cursor: 'pointer' }}>
            </img>
        </div>
    );
};

export default withTranslation()(LanguageSelector);