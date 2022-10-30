import Polyglot from 'node-polyglot';

// global instance
let polyglot;

export default class LocalizeService {
  static initLocalization(locale, messages) {
    const localeMessages = locale && messages[locale] ? messages[locale] : null;

    if (localeMessages === null) throw new Error(`Missing locale: ${locale}`);

    polyglot = new Polyglot({ locale, phrases: localeMessages });
  }

  static translate(name, params) {
    if (polyglot == null) {
      throw new Error('Locale has not been initialized');
    }

    return polyglot.t(name, params || {});
  }
}
