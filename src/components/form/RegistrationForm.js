import React, { useEffect, useContext } from 'react';
import GenderDropdown from '../../GenderDropdown';
import CountryDropdown from '../../CountryDropdown';
import MonthDropdown from '../../MonthDropdown';
import YearDropdown from '../../YearDropdown';
import { AppContext } from '../../context';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { t } from '../app/App';
import LanguagePicker from '../app/LanguagePicker';

const RegistrationForm = () => {
  const {
    count,
    setCount,
    showTerms,
    setShowTerms,
    formValues,
    formErrors,
    isSubmit,
    handleChange,
    handleSubmit,
    loadingStep,
    setLoadingStep,
    formLoader,
    setFormLoader,
  } = useContext(AppContext);

  useEffect(() => {
    setLoadingStep(true);
    let timeOut = setTimeout(() => {
      setLoadingStep(false);
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [count]);

  useEffect(() => {
    setFormLoader(true);
    let timeOut = setTimeout(() => {
      setFormLoader(false);
    }, 7000);
    return () => clearTimeout(timeOut);
  }, [isSubmit]);

  return (
    <>
      {formLoader && Object.keys(formErrors).length === 0 && isSubmit && (
        <div className="registration-complete">
          {t('FORM.REGISTRATION_COMPLETE')}
        </div>
      )}
      <LanguagePicker />

      <div className="app">
        <div className="progressBar-container">
          <div className="progress-container">
            <div
              className={`current-progress ${
                count >= 1 && 'current-progress-step1'
              } ${count >= 2 && 'current-progress-step2'} ${
                count >= 3 && 'current-progress-step3'
              } ${count >= 4 && 'current-progress-step4'}`}
            ></div>
            <div className={`circle-passive ${count >= 1 && 'circle-active'}`}>
              1
            </div>
            <div className={`circle-passive ${count >= 2 && 'circle-active'}`}>
              2
            </div>
            <div className={`circle-passive ${count >= 3 && 'circle-active'}`}>
              3
            </div>
            <div className={`circle-passive ${count >= 4 && 'circle-active'}`}>
              4
            </div>
          </div>
        </div>
        <form className="col-15 form" onSubmit={handleSubmit}>
          {count === 1 ? (
            <>
              {loadingStep ? (
                <PropagateLoader
                  className="loader-step1"
                  size={30}
                  color={'#002D62'}
                  loading={loadingStep}
                />
              ) : (
                <div>
                  <div className="form-group">
                    <label className="form-label">
                      {t('FORM.FIRST_NAME_FIELD_TITLE')}
                    </label>
                    <input
                      placeholder="Sofia"
                      type="text"
                      className="form-control"
                      name="firstName"
                      onChange={handleChange}
                      value={formValues.firstName}
                    />
                  </div>
                  {/* <p className="error-message">{formErrors.firstName}</p> */}
                  <div className="form-group">
                    <label className="form-label">
                      {t('FORM.LAST_NAME_FIELD_TITLE')}
                    </label>
                    <input
                      placeholder="Vergara"
                      type="text"
                      className="form-control input-control"
                      name="lastName"
                      //errorMessage="Last Name should contain the text only and range from 2-16 characters"
                      onChange={handleChange}
                      value={formValues.lastName}
                    />
                  </div>
                  {/* <p className="error-message">{formErrors.lastName}</p> */}
                  <div className="form-group">
                    <GenderDropdown />
                    {/*!selectedGender && isSubmit ? (
                      <p className="error-message">
                        Pick a gender
                        {english ? 'Pick a gender' : 'Elige un género'}
                      </p>
                    ) : null*/}
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      {t('FORM.BIRTH_DATE_FIELD_TITLE')}
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="date"
                      placeholder="10/07/1972"
                      onChange={handleChange}
                      value={formValues.date}
                    />
                  </div>
                  <p className="error-message">{formErrors.date}</p>
                  <div className="form-group">
                    <label className="form-label">
                      {t('FORM.TELEPHONE_FIELD_TITLE')}
                    </label>
                    <input
                      placeholder="00385955191714"
                      type="tel"
                      className="form-control"
                      name="phone"
                      //errorMessage=""
                      onChange={handleChange}
                      value={formValues.phone}
                    />
                  </div>
                  {/* <p className="error-message">{formErrors.phone}</p> */}
                  <CountryDropdown />
                  {/*!selectedCountry && isSubmit ? (
                    <p className="error-message">
                      {english ? 'Pick a country' : 'Elige un país'}
                    </p>
                  ) : null*/}
                </div>
              )}
            </>
          ) : null}
          {count === 2 ? (
            <>
              {loadingStep ? (
                <PropagateLoader
                  className="loader-step1"
                  size={30}
                  color={'#002D62'}
                  loading={loadingStep}
                />
              ) : (
                <div>
                  <div className="form-group form-transition">
                    <label className="form-label">
                      {t('FORM.USERNAME_FIELD_TITLE')}
                    </label>
                    <input
                      placeholder="sofia_v_222"
                      type="text"
                      className="form-control"
                      name="username"
                      //errorMessage=""
                      onChange={handleChange}
                      value={formValues.username}
                    />
                  </div>
                  {/* <p className="error-message">{formErrors.username}</p> */}
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                      placeholder="sofia.vergara@gmail.com"
                      type="email"
                      className="form-control"
                      name="email"
                      //errorMessage="It should be a valid email address!"
                      onChange={handleChange}
                      value={formValues.email}
                    />
                  </div>
                  <p className="error-message">{formErrors.email}</p>
                  <div className="form-group">
                    <label className="form-label">
                      {t('FORM.PASSWORD_FIELD_TITLE')}
                    </label>
                    <input
                      placeholder="Sofia!7111993"
                      type="password"
                      className="form-control"
                      name="password"
                      //errorMessage="Password should be 8-12 characters and it should include at least 1 letter 1 number and 1 special character!"
                      onChange={handleChange}
                      value={formValues.password}
                    />
                  </div>
                  {/* <p className="error-message">{formErrors.password}</p> */}
                  <div className="form-group">
                    <label className="form-label">
                      {t('FORM.CONFIRM_PASSWORD_FIELD_TITLE')}
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="confirmPassword"
                      //errorMessage="Passwords do not match!"
                      onChange={handleChange}
                      value={formValues.confirmPassword}
                    />
                  </div>
                  {/* <p className="error-message">{formErrors.confirmPassword}</p> */}
                </div>
              )}
            </>
          ) : null}
          {count === 3 ? (
            <>
              {loadingStep ? (
                <PropagateLoader
                  className="loader-step1"
                  size={30}
                  color={'#002D62'}
                  loading={loadingStep}
                />
              ) : (
                <div>
                  <div className="form-group">
                    <label className="form-label">
                      {t('FORM.CREDIT_CARD_FIELD_TITLE')}
                    </label>
                    <input
                      type="tel"
                      inputmode="numeric"
                      placeholder="375987654321001"
                      className="form-control"
                      name="creditCard"
                      onChange={handleChange}
                      value={formValues.creditCard}
                    />
                  </div>
                  {/* <p className="error-message">{formErrors.creditCard}</p> */}
                  <div className="mm-yy-dropdown-container">
                    <MonthDropdown />
                    {/*!selectedMonth && isSubmit ? (
                      <p className="error-message error-message-margin">
                        {english ? 'Pick a month' : 'Elige un mes'}
                      </p>
                    ) : null*/}
                    <YearDropdown />
                    {/*!selectedYear && isSubmit ? (
                      <p className="error-message error-message-margin">
                        {english ? 'Pick a month' : 'Elige un año'}
                      </p>
                    ) : null*/}
                  </div>
                  <div className="form-group">
                    <label className="form-label">CVV</label>
                    <input
                      placeholder="6178"
                      type="text"
                      className="form-control"
                      name="cvn"
                      onChange={handleChange}
                      value={formValues.cvn}
                    />
                  </div>
                  {/* <p className="error-message">{formErrors.cvn}</p> */}
                </div>
              )}
            </>
          ) : null}
          {count === 4 ? (
            <>
              {loadingStep ? (
                <PropagateLoader
                  className="loader-step1"
                  size={30}
                  color={'#002D62'}
                  loading={loadingStep}
                />
              ) : (
                <div className="terms-body">
                  <div className="terms-box">
                    <div className="terms-text">
                      <h2>{t('TOS.TITLE')}</h2>
                      <p>{t('TOS.LAST_EDIT_LABEL', { date: '07/26/2022' })}</p>
                      <p>{t('TOS.GREETING_LABEL')}</p>
                      {/* Purify after rethinking the whole form */}
                      <div
                        dangerouslySetInnerHTML={{
                          __html: t('TOS.CONTENT_HTML'),
                        }}
                      />
                    </div>
                    <h3>
                      {t('TOS.FOOTER_LABEL_1')}
                      <span>{t('TOS.FOOTER_LABEL_2')}</span>
                      {t('TOS.FOOTER_LABEL_3')}
                    </h3>
                    <div className="terms-buttons">
                      {showTerms && count === 4 && (
                        <button type="submit" className="submit-btn">
                          {t('COMMON.ACTION_SUBMIT')}
                        </button>
                      )}
                      <button
                        className="btn-accept red-btn"
                        onClick={() => setShowTerms(true)}
                      >
                        {t('COMMON.ACTION_ACCEPT')}
                      </button>
                      <button
                        className="btn-decline gray-btn"
                        onClick={() => setShowTerms(false)}
                      >
                        {t('COMMON.ACTION_DECLINE')}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : null}
          {count === 4 ? (
            <button
              className="btn btn-dark btn-margin btn-prev"
              type="button"
              onClick={() => setCount(count - 1)}
              disabled={count < 2}
            >
              {t('COMMON.ACTION_BACK')}
            </button>
          ) : null}
        </form>
        {count > 1 && count < 4 ? (
          <button
            className="btn btn-dark btn-prev"
            type="button"
            onClick={() => setCount(count - 1)}
            disabled={count < 2}
          >
            {t('COMMON.ACTION_BACK')}
          </button>
        ) : null}
        {count < 4 ? (
          <button
            className="btn btn-light btn-next"
            type="button"
            onClick={() => setCount(count + 1)}
            disabled={count > 4}
          >
            {t('COMMON.ACTION_NEXT')}
          </button>
        ) : null}
      </div>
    </>
  );
};

export default RegistrationForm;
