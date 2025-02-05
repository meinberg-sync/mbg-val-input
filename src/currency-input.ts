import { html } from 'lit';

import '@material/web/select/filled-select.js';
import '@material/web/select/select-option.js';

export function currencyInput(label: string, defaultVal: string) {
  return html`
    <md-filled-select id="input" label="${label}">
      <md-select-option value="AED" ?selected=${defaultVal === 'AED'}>
        <div slot="headline">AED (UAE Dirham)</div>
      </md-select-option>
      <md-select-option value="AFN" ?selected=${defaultVal === 'AFN'}>
        <div slot="headline">AFN (Afghan Afghani)</div>
      </md-select-option>
      <md-select-option value="ALL" ?selected=${defaultVal === 'ALL'}>
        <div slot="headline">ALL (Albanian Lek)</div>
      </md-select-option>
      <md-select-option value="AMD" ?selected=${defaultVal === 'AMD'}>
        <div slot="headline">AMD (Armenian Dram)</div>
      </md-select-option>
      <md-select-option value="ANG" ?selected=${defaultVal === 'ANG'}>
        <div slot="headline">ANG (Netherlands Antillean Guilder)</div>
      </md-select-option>
      <md-select-option value="AOA" ?selected=${defaultVal === 'AOA'}>
        <div slot="headline">AOA (Angolan Kwanza)</div>
      </md-select-option>
      <md-select-option value="ARS" ?selected=${defaultVal === 'ARS'}>
        <div slot="headline">ARS (Argentine Peso)</div>
      </md-select-option>
      <md-select-option value="AUD" ?selected=${defaultVal === 'AUD'}>
        <div slot="headline">AUD (Australian Dollar)</div>
      </md-select-option>
      <md-select-option value="AWG" ?selected=${defaultVal === 'AWG'}>
        <div slot="headline">AWG (Aruban Florin)</div>
      </md-select-option>
      <md-select-option value="AZN" ?selected=${defaultVal === 'AZN'}>
        <div slot="headline">AZN (Azerbaijani Manat)</div>
      </md-select-option>
      <md-select-option value="BAM" ?selected=${defaultVal === 'BAM'}>
        <div slot="headline">BAM (Bosnia and Herzegovina Convertible Mark)</div>
      </md-select-option>
      <md-select-option value="BBD" ?selected=${defaultVal === 'BBD'}>
        <div slot="headline">BBD (Barbadian Dollar)</div>
      </md-select-option>
      <md-select-option value="BDT" ?selected=${defaultVal === 'BDT'}>
        <div slot="headline">BDT (Bangladeshi Taka)</div>
      </md-select-option>
      <md-select-option value="BGN" ?selected=${defaultVal === 'BGN'}>
        <div slot="headline">BGN (Bulgarian Lev)</div>
      </md-select-option>
      <md-select-option value="BHD" ?selected=${defaultVal === 'BHD'}>
        <div slot="headline">BHD (Bahraini Dinar)</div>
      </md-select-option>
      <md-select-option value="BIF" ?selected=${defaultVal === 'BIF'}>
        <div slot="headline">BIF (Burundian Franc)</div>
      </md-select-option>
      <md-select-option value="BMD" ?selected=${defaultVal === 'BMD'}>
        <div slot="headline">BMD (Bermudian Dollar)</div>
      </md-select-option>
      <md-select-option value="BND" ?selected=${defaultVal === 'BND'}>
        <div slot="headline">BND (Brunei Dollar)</div>
      </md-select-option>
      <md-select-option value="BOB" ?selected=${defaultVal === 'BOB'}>
        <div slot="headline">BOB (Bolivian Boliviano)</div>
      </md-select-option>
      <md-select-option value="BOV" ?selected=${defaultVal === 'BOV'}>
        <div slot="headline">BOV (Bolivian Mvdol)</div>
      </md-select-option>
      <md-select-option value="BRL" ?selected=${defaultVal === 'BRL'}>
        <div slot="headline">BRL (Brazilian Real)</div>
      </md-select-option>
      <md-select-option value="BSD" ?selected=${defaultVal === 'BSD'}>
        <div slot="headline">BSD (Bahamian Dollar)</div>
      </md-select-option>
      <md-select-option value="BTN" ?selected=${defaultVal === 'BTN'}>
        <div slot="headline">BTN (Bhutanese Ngultrum)</div>
      </md-select-option>
      <md-select-option value="BWP" ?selected=${defaultVal === 'BWP'}>
        <div slot="headline">BWP (Botswana Pula)</div>
      </md-select-option>
      <md-select-option value="BYN" ?selected=${defaultVal === 'BYN'}>
        <div slot="headline">BYN (Belarusian Ruble)</div>
      </md-select-option>
      <md-select-option value="BZD" ?selected=${defaultVal === 'BZD'}>
        <div slot="headline">BZD (Belize Dollar)</div>
      </md-select-option>
      <md-select-option value="CAD" ?selected=${defaultVal === 'CAD'}>
        <div slot="headline">CAD (Canadian Dollar)</div>
      </md-select-option>
      <md-select-option value="CDF" ?selected=${defaultVal === 'CDF'}>
        <div slot="headline">CDF (Congolese Franc)</div>
      </md-select-option>
      <md-select-option value="CHE" ?selected=${defaultVal === 'CHE'}>
        <div slot="headline">CHE (WIR Euro)</div>
      </md-select-option>
      <md-select-option value="CHF" ?selected=${defaultVal === 'CHF'}>
        <div slot="headline">CHF (Swiss Franc)</div>
      </md-select-option>
      <md-select-option value="CHW" ?selected=${defaultVal === 'CHW'}>
        <div slot="headline">CHW (WIR Franc)</div>
      </md-select-option>
      <md-select-option value="CLF" ?selected=${defaultVal === 'CLF'}>
        <div slot="headline">CLF (Chilean Unit of Account)</div>
      </md-select-option>
      <md-select-option value="CLP" ?selected=${defaultVal === 'CLP'}>
        <div slot="headline">CLP (Chilean Peso)</div>
      </md-select-option>
      <md-select-option value="CNY" ?selected=${defaultVal === 'CNY'}>
        <div slot="headline">CNY (Chinese Yuan)</div>
      </md-select-option>
      <md-select-option value="COP" ?selected=${defaultVal === 'COP'}>
        <div slot="headline">COP (Colombian Peso)</div>
      </md-select-option>
      <md-select-option value="COU" ?selected=${defaultVal === 'COU'}>
        <div slot="headline">COU (Unidad de Valor Real)</div>
      </md-select-option>
      <md-select-option value="CRC" ?selected=${defaultVal === 'CRC'}>
        <div slot="headline">CRC (Costa Rican Colon)</div>
      </md-select-option>
      <md-select-option value="CUP" ?selected=${defaultVal === 'CUP'}>
        <div slot="headline">CUP (Cuban Peso)</div>
      </md-select-option>
      <md-select-option value="CVE" ?selected=${defaultVal === 'CVE'}>
        <div slot="headline">CVE (Cape Verdean Escudo)</div>
      </md-select-option>
      <md-select-option value="CZK" ?selected=${defaultVal === 'CZK'}>
        <div slot="headline">CZK (Czech Koruna)</div>
      </md-select-option>
      <md-select-option value="DJF" ?selected=${defaultVal === 'DJF'}>
        <div slot="headline">DJF (Djiboutian Franc)</div>
      </md-select-option>
      <md-select-option value="DKK" ?selected=${defaultVal === 'DKK'}>
        <div slot="headline">DKK (Danish Krone)</div>
      </md-select-option>
      <md-select-option value="DOP" ?selected=${defaultVal === 'DOP'}>
        <div slot="headline">DOP (Dominican Peso)</div>
      </md-select-option>
      <md-select-option value="DZD" ?selected=${defaultVal === 'DZD'}>
        <div slot="headline">DZD (Algerian Dinar)</div>
      </md-select-option>
      <md-select-option value="EGP" ?selected=${defaultVal === 'EGP'}>
        <div slot="headline">EGP (Egyptian Pound)</div>
      </md-select-option>
      <md-select-option value="ERN" ?selected=${defaultVal === 'ERN'}>
        <div slot="headline">ERN (Eritrean Nakfa)</div>
      </md-select-option>
      <md-select-option value="ETB" ?selected=${defaultVal === 'ETB'}>
        <div slot="headline">ETB (Ethiopian Birr)</div>
      </md-select-option>
      <md-select-option value="EUR" ?selected=${defaultVal === 'EUR'}>
        <div slot="headline">EUR (Euro)</div>
      </md-select-option>
      <md-select-option value="FJD" ?selected=${defaultVal === 'FJD'}>
        <div slot="headline">FJD (Fijian Dollar)</div>
      </md-select-option>
      <md-select-option value="FKP" ?selected=${defaultVal === 'FKP'}>
        <div slot="headline">FKP (Falkland Islands Pound)</div>
      </md-select-option>
      <md-select-option value="GBP" ?selected=${defaultVal === 'GBP'}>
        <div slot="headline">GBP (Pound Sterling)</div>
      </md-select-option>
      <md-select-option value="GEL" ?selected=${defaultVal === 'GEL'}>
        <div slot="headline">GEL (Georgian Lari)</div>
      </md-select-option>
      <md-select-option value="GHS" ?selected=${defaultVal === 'GHS'}>
        <div slot="headline">GHS (Ghanaian Cedi)</div>
      </md-select-option>
      <md-select-option value="GIP" ?selected=${defaultVal === 'GIP'}>
        <div slot="headline">GIP (Gibraltar Pound)</div>
      </md-select-option>
      <md-select-option value="GMD" ?selected=${defaultVal === 'GMD'}>
        <div slot="headline">GMD (Gambian Dalasi)</div>
      </md-select-option>
      <md-select-option value="GNF" ?selected=${defaultVal === 'GNF'}>
        <div slot="headline">GNF (Guinean Franc)</div>
      </md-select-option>
      <md-select-option value="GTQ" ?selected=${defaultVal === 'GTQ'}>
        <div slot="headline">GTQ (Guatemalan Quetzal)</div>
      </md-select-option>
      <md-select-option value="GYD" ?selected=${defaultVal === 'GYD'}>
        <div slot="headline">GYD (Guyanese Dollar)</div>
      </md-select-option>
      <md-select-option value="HKD" ?selected=${defaultVal === 'HKD'}>
        <div slot="headline">HKD (Hong Kong Dollar)</div>
      </md-select-option>
      <md-select-option value="HNL" ?selected=${defaultVal === 'HNL'}>
        <div slot="headline">HNL (Honduran Lempira)</div>
      </md-select-option>
      <md-select-option value="HTG" ?selected=${defaultVal === 'HTG'}>
        <div slot="headline">HTG (Haitian Gourde)</div>
      </md-select-option>
      <md-select-option value="HUF" ?selected=${defaultVal === 'HUF'}>
        <div slot="headline">HUF (Hungarian Forint)</div>
      </md-select-option>
      <md-select-option value="IDR" ?selected=${defaultVal === 'IDR'}>
        <div slot="headline">IDR (Indonesian Rupiah)</div>
      </md-select-option>
      <md-select-option value="ILS" ?selected=${defaultVal === 'ILS'}>
        <div slot="headline">ILS (Israeli New Sheqel)</div>
      </md-select-option>
      <md-select-option value="INR" ?selected=${defaultVal === 'INR'}>
        <div slot="headline">INR (Indian Rupee)</div>
      </md-select-option>
      <md-select-option value="IQD" ?selected=${defaultVal === 'IQD'}>
        <div slot="headline">IQD (Iraqi Dinar)</div>
      </md-select-option>
      <md-select-option value="IRR" ?selected=${defaultVal === 'IRR'}>
        <div slot="headline">IRR (Iranian Rial)</div>
      </md-select-option>
      <md-select-option value="ISK" ?selected=${defaultVal === 'ISK'}>
        <div slot="headline">ISK (Icelandic Krona)</div>
      </md-select-option>
      <md-select-option value="JMD" ?selected=${defaultVal === 'JMD'}>
        <div slot="headline">JMD (Jamaican Dollar)</div>
      </md-select-option>
      <md-select-option value="JOD" ?selected=${defaultVal === 'JOD'}>
        <div slot="headline">JOD (Jordanian Dinar)</div>
      </md-select-option>
      <md-select-option value="JPY" ?selected=${defaultVal === 'JPY'}>
        <div slot="headline">JPY (Japanese Yen)</div>
      </md-select-option>
      <md-select-option value="KES" ?selected=${defaultVal === 'KES'}>
        <div slot="headline">KES (Kenyan Shilling)</div>
      </md-select-option>
      <md-select-option value="KGS" ?selected=${defaultVal === 'KGS'}>
        <div slot="headline">KGS (Kyrgyzstani Som)</div>
      </md-select-option>
      <md-select-option value="KHR" ?selected=${defaultVal === 'KHR'}>
        <div slot="headline">KHR (Cambodian Riel)</div>
      </md-select-option>
      <md-select-option value="KMF" ?selected=${defaultVal === 'KMF'}>
        <div slot="headline">KMF (Comorian Franc)</div>
      </md-select-option>
      <md-select-option value="KPW" ?selected=${defaultVal === 'KPW'}>
        <div slot="headline">KPW (North Korean Won)</div>
      </md-select-option>
      <md-select-option value="KRW" ?selected=${defaultVal === 'KRW'}>
        <div slot="headline">KRW (South Korean Won)</div>
      </md-select-option>
      <md-select-option value="KWD" ?selected=${defaultVal === 'KWD'}>
        <div slot="headline">KWD (Kuwaiti Dinar)</div>
      </md-select-option>
      <md-select-option value="KYD" ?selected=${defaultVal === 'KYD'}>
        <div slot="headline">KYD (Cayman Islands Dollar)</div>
      </md-select-option>
      <md-select-option value="KZT" ?selected=${defaultVal === 'KZT'}>
        <div slot="headline">KZT (Kazakhstani Tenge)</div>
      </md-select-option>
      <md-select-option value="LAK" ?selected=${defaultVal === 'LAK'}>
        <div slot="headline">LAK (Laotian Kip)</div>
      </md-select-option>
      <md-select-option value="LBP" ?selected=${defaultVal === 'LBP'}>
        <div slot="headline">LBP (Lebanese Pound)</div>
      </md-select-option>
      <md-select-option value="LKR" ?selected=${defaultVal === 'LKR'}>
        <div slot="headline">LKR (Sri Lankan Rupee)</div>
      </md-select-option>
      <md-select-option value="LRD" ?selected=${defaultVal === 'LRD'}>
        <div slot="headline">LRD (Liberian Dollar)</div>
      </md-select-option>
      <md-select-option value="LSL" ?selected=${defaultVal === 'LSL'}>
        <div slot="headline">LSL (Lesotho Loti)</div>
      </md-select-option>
      <md-select-option value="LYD" ?selected=${defaultVal === 'LYD'}>
        <div slot="headline">LYD (Libyan Dinar)</div>
      </md-select-option>
      <md-select-option value="MAD" ?selected=${defaultVal === 'MAD'}>
        <div slot="headline">MAD (Moroccan Dirham)</div>
      </md-select-option>
      <md-select-option value="MDL" ?selected=${defaultVal === 'MDL'}>
        <div slot="headline">MDL (Moldovan Leu)</div>
      </md-select-option>
      <md-select-option value="MGA" ?selected=${defaultVal === 'MGA'}>
        <div slot="headline">MGA (Malagasy Ariary)</div>
      </md-select-option>
      <md-select-option value="MKD" ?selected=${defaultVal === 'MKD'}>
        <div slot="headline">MKD (Macedonian Denar)</div>
      </md-select-option>
      <md-select-option value="MMK" ?selected=${defaultVal === 'MMK'}>
        <div slot="headline">MMK (Myanmar Kyat)</div>
      </md-select-option>
      <md-select-option value="MNT" ?selected=${defaultVal === 'MNT'}>
        <div slot="headline">MNT (Mongolian Tugrik)</div>
      </md-select-option>
      <md-select-option value="MOP" ?selected=${defaultVal === 'MOP'}>
        <div slot="headline">MOP (Macanese Pataca)</div>
      </md-select-option>
      <md-select-option value="MRU" ?selected=${defaultVal === 'MRU'}>
        <div slot="headline">MRU (Mauritanian Ouguiya)</div>
      </md-select-option>
      <md-select-option value="MUR" ?selected=${defaultVal === 'MUR'}>
        <div slot="headline">MUR (Mauritian Rupee)</div>
      </md-select-option>
      <md-select-option value="MVR" ?selected=${defaultVal === 'MVR'}>
        <div slot="headline">MVR (Maldivian Rufiyaa)</div>
      </md-select-option>
      <md-select-option value="MWK" ?selected=${defaultVal === 'MWK'}>
        <div slot="headline">MWK (Malawian Kwacha)</div>
      </md-select-option>
      <md-select-option value="MXN" ?selected=${defaultVal === 'MXN'}>
        <div slot="headline">MXN (Mexican Peso)</div>
      </md-select-option>
      <md-select-option value="MXV" ?selected=${defaultVal === 'MXV'}>
        <div slot="headline">MXV (Mexican Unidad de Inversion (UDI))</div>
      </md-select-option>
      <md-select-option value="MYR" ?selected=${defaultVal === 'MYR'}>
        <div slot="headline">MYR (Malaysian Ringgit)</div>
      </md-select-option>
      <md-select-option value="MZN" ?selected=${defaultVal === 'MZN'}>
        <div slot="headline">MZN (Mozambican Metical)</div>
      </md-select-option>
      <md-select-option value="NAD" ?selected=${defaultVal === 'NAD'}>
        <div slot="headline">NAD (Namibian Dollar)</div>
      </md-select-option>
      <md-select-option value="NGN" ?selected=${defaultVal === 'NGN'}>
        <div slot="headline">NGN (Nigerian Naira)</div>
      </md-select-option>
      <md-select-option value="NIO" ?selected=${defaultVal === 'NIO'}>
        <div slot="headline">NIO (Nicaraguan Cordoba)</div>
      </md-select-option>
      <md-select-option value="NOK" ?selected=${defaultVal === 'NOK'}>
        <div slot="headline">NOK (Norwegian Krone)</div>
      </md-select-option>
      <md-select-option value="NPR" ?selected=${defaultVal === 'NPR'}>
        <div slot="headline">NPR (Nepalese Rupee)</div>
      </md-select-option>
      <md-select-option value="NZD" ?selected=${defaultVal === 'NZD'}>
        <div slot="headline">NZD (New Zealand Dollar)</div>
      </md-select-option>
      <md-select-option value="OMR" ?selected=${defaultVal === 'OMR'}>
        <div slot="headline">OMR (Omani Rial)</div>
      </md-select-option>
      <md-select-option value="PAB" ?selected=${defaultVal === 'PAB'}>
        <div slot="headline">PAB (Panamanian Balboa)</div>
      </md-select-option>
      <md-select-option value="PEN" ?selected=${defaultVal === 'PEN'}>
        <div slot="headline">PEN (Peruvian Nuevo Sol)</div>
      </md-select-option>
      <md-select-option value="PGK" ?selected=${defaultVal === 'PGK'}>
        <div slot="headline">PGK (Papua New Guinean Kina)</div>
      </md-select-option>
      <md-select-option value="PHP" ?selected=${defaultVal === 'PHP'}>
        <div slot="headline">PHP (Philippine Peso)</div>
      </md-select-option>
      <md-select-option value="PKR" ?selected=${defaultVal === 'PKR'}>
        <div slot="headline">PKR (Pakistani Rupee)</div>
      </md-select-option>
      <md-select-option value="PLN" ?selected=${defaultVal === 'PLN'}>
        <div slot="headline">PLN (Polish Zloty)</div>
      </md-select-option>
      <md-select-option value="PYG" ?selected=${defaultVal === 'PYG'}>
        <div slot="headline">PYG (Paraguayan Guarani)</div>
      </md-select-option>
      <md-select-option value="QAR" ?selected=${defaultVal === 'QAR'}>
        <div slot="headline">QAR (Qatari Rial)</div>
      </md-select-option>
      <md-select-option value="RON" ?selected=${defaultVal === 'RON'}>
        <div slot="headline">RON (Romanian Leu)</div>
      </md-select-option>
      <md-select-option value="RUB" ?selected=${defaultVal === 'RUB'}>
        <div slot="headline">RUB (Russian Ruble)</div>
      </md-select-option>
      <md-select-option value="RWF" ?selected=${defaultVal === 'RWF'}>
        <div slot="headline">RWF (Rwandan Franc)</div>
      </md-select-option>
      <md-select-option value="SAR" ?selected=${defaultVal === 'SAR'}>
        <div slot="headline">SAR (Saudi Riyal)</div>
      </md-select-option>
      <md-select-option value="SBD" ?selected=${defaultVal === 'SBD'}>
        <div slot="headline">SBD (Solomon Islands Dollar)</div>
      </md-select-option>
      <md-select-option value="SCR" ?selected=${defaultVal === 'SCR'}>
        <div slot="headline">SCR (Seychelles Rupee)</div>
      </md-select-option>
      <md-select-option value="SDG" ?selected=${defaultVal === 'SDG'}>
        <div slot="headline">SDG (Sudanese Pound)</div>
      </md-select-option>
      <md-select-option value="SEK" ?selected=${defaultVal === 'SEK'}>
        <div slot="headline">SEK (Swedish Krona)</div>
      </md-select-option>
      <md-select-option value="SGD" ?selected=${defaultVal === 'SGD'}>
        <div slot="headline">SGD (Singapore Dollar)</div>
      </md-select-option>
      <md-select-option value="SHP" ?selected=${defaultVal === 'SHP'}>
        <div slot="headline">SHP (Saint Helena Pound)</div>
      </md-select-option>
      <md-select-option value="SLE" ?selected=${defaultVal === 'SLE'}>
        <div slot="headline">SLE (Sierra Leonean Leone)</div>
      </md-select-option>
      <md-select-option value="SOS" ?selected=${defaultVal === 'SOS'}>
        <div slot="headline">SOS (Somali Shilling)</div>
      </md-select-option>
      <md-select-option value="SRD" ?selected=${defaultVal === 'SRD'}>
        <div slot="headline">SRD (Surinamese Dollar)</div>
      </md-select-option>
      <md-select-option value="SSP" ?selected=${defaultVal === 'SSP'}>
        <div slot="headline">SSP (South Sudanese Pound)</div>
      </md-select-option>
      <md-select-option value="STN" ?selected=${defaultVal === 'STN'}>
        <div slot="headline">STN (São Tomé and Príncipe Dobra)</div>
      </md-select-option>
      <md-select-option value="SVC" ?selected=${defaultVal === 'SVC'}>
        <div slot="headline">SVC (Salvadoran Colón)</div>
      </md-select-option>
      <md-select-option value="SYP" ?selected=${defaultVal === 'SYP'}>
        <div slot="headline">SYP (Syrian Pound)</div>
      </md-select-option>
      <md-select-option value="SZL" ?selected=${defaultVal === 'SZL'}>
        <div slot="headline">SZL (Swazi Lilangeni)</div>
      </md-select-option>
      <md-select-option value="THB" ?selected=${defaultVal === 'THB'}>
        <div slot="headline">THB (Thai Baht)</div>
      </md-select-option>
      <md-select-option value="TJS" ?selected=${defaultVal === 'TJS'}>
        <div slot="headline">TJS (Tajikistani Somoni)</div>
      </md-select-option>
      <md-select-option value="TMT" ?selected=${defaultVal === 'TMT'}>
        <div slot="headline">TMT (Turkmenistani Manat)</div>
      </md-select-option>
      <md-select-option value="TND" ?selected=${defaultVal === 'TND'}>
        <div slot="headline">TND (Tunisian Dinar)</div>
      </md-select-option>
      <md-select-option value="TOP" ?selected=${defaultVal === 'TOP'}>
        <div slot="headline">TOP (Tongan Paʻanga)</div>
      </md-select-option>
      <md-select-option value="TRY" ?selected=${defaultVal === 'TRY'}>
        <div slot="headline">TRY (Turkish Lira)</div>
      </md-select-option>
      <md-select-option value="TTD" ?selected=${defaultVal === 'TTD'}>
        <div slot="headline">TTD (Trinidad and Tobago Dollar)</div>
      </md-select-option>
      <md-select-option value="TWD" ?selected=${defaultVal === 'TWD'}>
        <div slot="headline">TWD (New Taiwan Dollar)</div>
      </md-select-option>
      <md-select-option value="TZS" ?selected=${defaultVal === 'TZS'}>
        <div slot="headline">TZS (Tanzanian Shilling)</div>
      </md-select-option>
      <md-select-option value="UAH" ?selected=${defaultVal === 'UAH'}>
        <div slot="headline">UAH (Ukrainian Hryvnia)</div>
      </md-select-option>
      <md-select-option value="UGX" ?selected=${defaultVal === 'UGX'}>
        <div slot="headline">UGX (Ugandan Shilling)</div>
      </md-select-option>
      <md-select-option value="USD" ?selected=${defaultVal === 'USD'}>
        <div slot="headline">USD (United States Dollar)</div>
      </md-select-option>
      <md-select-option value="UYU" ?selected=${defaultVal === 'UYU'}>
        <div slot="headline">UYU (Uruguayan Peso)</div>
      </md-select-option>
      <md-select-option value="UZS" ?selected=${defaultVal === 'UZS'}>
        <div slot="headline">UZS (Uzbekistan Som)</div>
      </md-select-option>
      <md-select-option value="VED" ?selected=${defaultVal === 'VED'}>
        <div slot="headline">VED (Venezuelan Digital Bolívar)</div>
      </md-select-option>
      <md-select-option value="VES" ?selected=${defaultVal === 'VES'}>
        <div slot="headline">VES (Venezuelan Sovereign Bolívar)</div>
      </md-select-option>
      <md-select-option value="VND" ?selected=${defaultVal === 'VND'}>
        <div slot="headline">VND (Vietnamese Dong)</div>
      </md-select-option>
      <md-select-option value="VUV" ?selected=${defaultVal === 'VUV'}>
        <div slot="headline">VUV (Vanuatu Vatu)</div>
      </md-select-option>
      <md-select-option value="WST" ?selected=${defaultVal === 'WST'}>
        <div slot="headline">WST (Samoan Tala)</div>
      </md-select-option>
      <md-select-option value="XAF" ?selected=${defaultVal === 'XAF'}>
        <div slot="headline">XAF (Central African Cfa Franc)</div>
      </md-select-option>
      <md-select-option value="XCD" ?selected=${defaultVal === 'XCD'}>
        <div slot="headline">XCD (East Caribbean Dollar)</div>
      </md-select-option>
      <md-select-option value="XOF" ?selected=${defaultVal === 'XOF'}>
        <div slot="headline">XOF (West African CFA Franc)</div>
      </md-select-option>
      <md-select-option value="XPF" ?selected=${defaultVal === 'XPF'}>
        <div slot="headline">XPF (CFP Franc)</div>
      </md-select-option>
      <md-select-option value="XXX" ?selected=${defaultVal === 'XXX'}>
        <div slot="headline">XXX (No Currency)</div>
      </md-select-option>
      <md-select-option value="YER" ?selected=${defaultVal === 'YER'}>
        <div slot="headline">YER (Yemen Rial)</div>
      </md-select-option>
      <md-select-option value="ZAR" ?selected=${defaultVal === 'ZAR'}>
        <div slot="headline">ZAR (South African Rand)</div>
      </md-select-option>
      <md-select-option value="ZMW" ?selected=${defaultVal === 'ZMW'}>
        <div slot="headline">ZMW (Zambian Kwacha)</div>
      </md-select-option>
      <md-select-option value="ZWG" ?selected=${defaultVal === 'ZWG'}>
        <div slot="headline">ZWG (Zimbabwe Gold)</div>
      </md-select-option>
    </md-filled-select>
  `;
}
