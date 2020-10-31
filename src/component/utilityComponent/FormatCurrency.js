import _ from 'lodash';

export const FormatCurrency = (n, sign = '£', fractionDigits = 2) => (
    _.isNumber(n) && !_.isNaN(n) ? `${sign} ${_.ceil(n, 2).toFixed(fractionDigits)}` : 'NAN'
  );
  