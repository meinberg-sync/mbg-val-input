/* eslint-disable import/no-extraneous-dependencies */
import { html, css, LitElement, TemplateResult, nothing } from 'lit';
import { property, query } from 'lit/decorators.js';
import type { MdSwitch } from '@material/web/switch/switch.js';
import { currencyInput } from './currency-input.js';

import '@material/web/textfield/outlined-text-field.js';
import '@material/web/select/filled-select.js';
import '@material/web/select/select-option.js';
import '@material/web/switch/switch.js';

function xmlBoolean(val?: string) {
  return ['true', '1'].includes(val?.toLowerCase().trim() ?? 'false');
}

function isValidInt(value: number, size: number, signed: boolean): boolean {
  const min = signed ? -(2 ** (size - 1)) : 0;
  const max = signed ? 2 ** (size - 1) - 1 : 2 ** size - 1;
  return value >= min && value <= max;
}

function isValidBigInt(value: bigint, size: 64 | 128): boolean {
  if (size === 64) {
    return value >= -9223372036854775808n && value <= 9223372036854775807n;
  }
  if (size === 128) {
    return (
      value >= -170141183460469231731687303715884105728n &&
      value <= 170141183460469231731687303715884105727n
    );
  }
  return false;
}

function sanitizeAndValidateInt(
  value: string,
  size: number,
  isUserInput: boolean,
  isSigned = true,
) {
  // allow leading negative sign
  const signed = value[0] === '-' ? '-' : '';
  const negative = signed === '-';

  // remove leading zeros and invalid characters
  let sanitized = value.replace(/[^0-9]/g, '').replace(/^0+(?=\d)/, '');

  // handle special cases
  if (negative && !sanitized.startsWith('-')) {
    sanitized = signed + sanitized;
  }
  if (sanitized === '-0') {
    sanitized = '0';
  }

  // ensure input was properly sanitized
  const intRegex = /^-?\d*$/;
  if (!intRegex.test(sanitized)) {
    return '';
  }

  // allow leading negative sign only if it is from user input
  if (sanitized === '') {
    if (isUserInput) {
      return sanitized;
    }
    return '';
  }

  // parse and validate
  if (sanitized !== '') {
    if (size === 64 || size === 128) {
      const parsedValue = BigInt(sanitized);
      if (Number.isNaN(parsedValue) || !isValidBigInt(parsedValue, size)) {
        return '';
      }
    } else {
      const parsedValue = Number(sanitized);
      if (
        Number.isNaN(parsedValue) ||
        !isValidInt(parsedValue, size, isSigned)
      ) {
        return '';
      }
    }
  }

  return sanitized;
}

function isValidFloat(value: number, size: 32 | 64): boolean {
  if (size === 32) {
    return value >= -3.4028235e38 && value <= 3.4028235e38;
  }
  if (size === 64) {
    return value >= -1.7976931348623157e308 && value <= 1.7976931348623157e308;
  }
  return false;
}

/** Removes invalid characters and validates the float value input */
function sanitizeAndValidateFloat(
  value: string,
  isUserInput: boolean,
  size: 32 | 64,
) {
  let sanitized = '';

  // allow leading negative sign
  const signed = value[0] === '-' ? '-' : '';
  const negative = signed === '-';

  // account for Euler's number
  if (value === 'e' || value === '-e') {
    sanitized = '2.7182818284590452354';
    return signed + sanitized;
  }

  // remove leading zeros and invalid characters
  sanitized = value
    .replace(/[^0-9eE.+-]/g, '')
    .replace(/(?<![eE])\+|(?<![eE])-/, '');

  // handle multiple exponents
  const numExponents = sanitized.split(/[eE]/).length - 1;
  if (numExponents > 1) {
    sanitized = sanitized.replace(/[eE].*?[eE]/g, 'E0');
  }
  if (sanitized.endsWith('e') || sanitized.endsWith('E')) {
    sanitized += '0';
  }

  // handle multiple decimal points
  const numDecimalPoints = sanitized.split('.').length - 1;
  if (numDecimalPoints > 1) {
    sanitized = sanitized.replace(/\.(?=.*\.)/g, '');
  }

  // remove leading zeros
  sanitized = sanitized.replace(/^0+(?=\d)/, '');
  sanitized = sanitized.replace(/^-0+(?=\d)/, '-');

  // handle special cases
  if (sanitized === '0e' || sanitized === '-0e') {
    return '0';
  }
  if (negative && !sanitized.startsWith('-')) {
    sanitized = signed + sanitized;
  }
  if (sanitized === '.') {
    sanitized = '0.';
  }

  // ensure input was properly sanitized
  const floatRegex = /^-?\d*(\.\d*)?([eE][-+]?\d*)?$/;
  if (!floatRegex.test(sanitized)) {
    return '';
  }

  // allow leading negative sign only if it is from user input
  if (sanitized === '-') {
    if (isUserInput) {
      return sanitized;
    }
    return '';
  }

  // parse into float and validate
  if (sanitized !== '') {
    const parsedValue = parseFloat(sanitized);
    if (Number.isNaN(parsedValue) || !isValidFloat(parsedValue, size)) {
      return '';
    }
  }

  return sanitized;
}

function sanitizeOctet(value: string) {
  return value.replace(/[^0-9a-fA-F]/g, '');
}

function sanitizeObjRef(value: string) {
  return value.replace(/[^A-Za-z0-9_/$]/g, '');
}

function sanitizeBitString(value: string) {
  return value.replace(/[^01]/g, '');
}

function formatTimestamp(input: string) {
  const digits = input.replace(/\D/g, '');

  // Extract parts
  const year = digits.slice(0, 4);
  const month = digits.slice(4, 6);
  const day = digits.slice(6, 8);
  const hour = digits.slice(8, 10);
  const minute = digits.slice(10, 12);
  const second = digits.slice(12, 14);
  const millisecond = digits.slice(14, 17); // Optional milliseconds

  let formatted = `${year}`;
  if (month) formatted += `-${month}`;
  if (day) formatted += `-${day}`;
  if (hour) formatted += `T${hour}`;
  if (minute) formatted += `:${minute}`;
  if (second) formatted += `:${second}`;
  if (millisecond) formatted += `.${millisecond}`;

  return formatted;
}

/** Web Component for inputting IEC61850-6 "Val" values */
export class MbgValInput extends LitElement {
  static styles = css`
    md-outlined-text-field.Timestamp {
      min-width: 250px;
      max-width: 100%;
      width: auto;
    }
  `;

  @property({ type: String }) bType?: string;

  // If the DA/BDA is assigned a Val in DataTypeTemplates
  @property({ type: String }) default = '';

  // if bType === "Enum" - ordinal values
  @property({ type: Array }) enumOrdinals: string[] = [];

  // if bType === "Enum" - string labels
  @property({ type: Array }) enumLabels: string[] = [];

  @property({ type: String }) label = 'Val';

  @query('#input') input?: HTMLInputElement;

  private updateValue(event: Event, userValue: string) {
    this.value = userValue;
    // eslint-disable-next-line no-param-reassign
    (event.target as HTMLInputElement).value = userValue;
  }

  private parseBTypeSize() {
    const match = this.bType?.match(/INT(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
  }

  private handleBigIntInput(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    const validatedInput = sanitizeAndValidateInt(
      input,
      this.parseBTypeSize(),
      true,
    );
    const validatedDefault = sanitizeAndValidateInt(
      this.default,
      this.parseBTypeSize(),
      false,
    );

    if (validatedInput === '') {
      this.updateValue(event, validatedDefault ?? '0');
      return;
    }

    this.updateValue(event, validatedInput);
  }

  private handleIntInput(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    const signed = !(this.bType?.endsWith('U') || this.bType === 'Check');
    const size = this.bType === 'Check' ? 8 : this.parseBTypeSize();

    const validatedDefault = sanitizeAndValidateInt(
      this.default,
      size,
      false,
      signed,
    );

    // set default if input is empty
    if (input === '') {
      this.updateValue(event, validatedDefault ?? 0);
    }
  }

  intInput(size: 8 | 16 | 24 | 32 | 64 | 128, signed = true) {
    const min = signed ? -(2 ** (size - 1)) : 0;
    const max = signed ? 2 ** (size - 1) - 1 : 2 ** size - 1;

    const validatedDefault = sanitizeAndValidateInt(
      this.default,
      size,
      false,
      signed,
    );

    if (size > 52) {
      return html`<md-outlined-text-field
        id="input"
        label="${this.label}"
        type="text"
        value="${validatedDefault ?? nothing}"
        @input="${this.handleBigIntInput}"
      ></md-outlined-text-field>`;
    }

    return html`<md-outlined-text-field
      id="input"
      label="${this.label}"
      type="number"
      step="1"
      min="${min}"
      max="${max}"
      value="${validatedDefault ?? nothing}"
      @input="${this.handleIntInput}"
    ></md-outlined-text-field>`;
  }

  private handleFloatInput(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    const validatedInput = sanitizeAndValidateFloat(
      input,
      true,
      this.bType === 'FLOAT32' ? 32 : 64,
    );
    const validatedDefault = sanitizeAndValidateFloat(
      this.default,
      false,
      this.bType === 'FLOAT32' ? 32 : 64,
    );

    if (validatedInput === '') {
      this.updateValue(event, validatedDefault ?? '0');
      return;
    }

    this.updateValue(event, validatedInput);
  }

  floatInput() {
    const validatedDefault = sanitizeAndValidateFloat(
      this.default,
      false,
      this.bType === 'FLOAT32' ? 32 : 64,
    );
    return html`
      <md-outlined-text-field
        id="$input"
        label="${this.label}"
        type="text"
        value="${validatedDefault ?? nothing}"
        @input="${this.handleFloatInput}"
      ></md-outlined-text-field>
    `;
  }

  private handleOctetInput(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    let sanitizedInput = sanitizeOctet(input);
    if (sanitizedInput === '') {
      sanitizedInput = sanitizeOctet(this.default) ?? '';
    }
    this.updateValue(event, sanitizedInput);
  }

  octetInput(size: 6 | 8 | 16 | 64) {
    return html`
      <md-outlined-text-field
        id="input"
        label="${this.label}"
        value="${sanitizeOctet(this.default) ?? nothing}"
        maxlength="${size * 2}"
        @input="${this.handleOctetInput}"
      ></md-outlined-text-field>
    `;
  }

  private handleStringInput(event: Event) {
    let input = (event.target as HTMLInputElement).value;
    if (input === '') {
      input = this.default ?? '';
    }
    this.updateValue(event, input);
  }

  stringInput(size: 32 | 64 | 65 | 129 | 255) {
    return html`
      <md-outlined-text-field
        id="input"
        label="${this.label}"
        value="${this.default ?? nothing}"
        maxlength="${size}"
        @input="${this.handleStringInput}"
      ></md-outlined-text-field>
    `;
  }

  enumInput() {
    let ordinals: string[] = [];
    let labels: string[] = [];

    if (typeof this.enumOrdinals === 'string') {
      ordinals = JSON.parse(this.enumOrdinals) as string[];
    }
    if (typeof this.enumLabels === 'string') {
      labels = JSON.parse(this.enumLabels) as string[];
    }

    return html`
      <md-filled-select id="input" label="${this.label}">
        ${ordinals.map(
          (ordinal, index) => html`
            <md-select-option
              value="${labels[index]}"
              ?selected=${this.default === labels[index] ||
              this.default === ordinal}
            >
              <div slot="headline">${ordinal} - ${labels[index]}</div>
            </md-select-option>
          `,
        )}
      </md-filled-select>
    `;
  }

  private handleTimestampInput(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    const validatedInput = formatTimestamp(input);

    if (validatedInput === '') {
      const validatedDefault = formatTimestamp(this.default);
      this.updateValue(event, validatedDefault ?? '');
      return;
    }

    this.updateValue(event, validatedInput);
  }

  timestampInput() {
    const validatedDefault = formatTimestamp(this.default);
    return html`
      <md-outlined-text-field
        class="Timestamp"
        id="input"
        placeholder="YYYY-MM-DDTHH:MM:SS.sss"
        label="${this.label}"
        value="${validatedDefault ?? nothing}"
        @input="${this.handleTimestampInput}"
      ></md-outlined-text-field>
    `;
  }

  private handleObjRefInput(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    let sanitizedInput = sanitizeObjRef(input);
    if (sanitizedInput === '') {
      sanitizedInput = sanitizeObjRef(this.default) ?? '';
    }
    this.updateValue(event, sanitizedInput);
  }

  objrefInput() {
    return html`
      <md-outlined-text-field
        id="input"
        label="${this.label}"
        value="${sanitizeObjRef(this.default) ?? nothing}"
        maxlength="255"
        @input="${this.handleObjRefInput}"
      ></md-outlined-text-field>
    `;
  }

  dbposInput() {
    return html`
      <md-filled-select id="input" label="${this.label}">
        <md-select-option value="0" ?selected=${this.default === '0'}>
          <div slot="headline">0 - intermediate-state</div>
        </md-select-option>
        <md-select-option value="1" ?selected=${this.default === '1'}>
          <div slot="headline">1 - off</div>
        </md-select-option>
        </md-select-option>
        <md-select-option value="2" ?selected=${this.default === '2'}>
          <div slot="headline">2 - on</div>
        </md-select-option>
        </md-select-option>
        <md-select-option value="3" ?selected=${this.default === '3'}>
          <div slot="headline">3 - bad-state</div>
        </md-select-option>
      </md-filled-select>
    `;
  }

  tcmdInput() {
    return html`
      <md-filled-select id="input" label="${this.label}">
        <md-select-option value="0" ?selected=${this.default === '0'}>
          <div slot="headline">0 - neutral</div>
        </md-select-option>
        <md-select-option value="1" ?selected=${this.default === '1'}>
          <div slot="headline">1 - lower</div>
        </md-select-option>
        </md-select-option>
        <md-select-option value="2" ?selected=${this.default === '2'}>
          <div slot="headline">2 - higher</div>
        </md-select-option>
        </md-select-option>
        <md-select-option value="3" ?selected=${this.default === '3'}>
          <div slot="headline">3 - reserved</div>
        </md-select-option>
      </md-filled-select>
    `;
  }

  private handleBitStringInput(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    let sanitizedInput = sanitizeBitString(input);
    if (sanitizedInput === '') {
      sanitizedInput = sanitizeBitString(this.default) ?? '';
    }
    this.updateValue(event, sanitizedInput);
  }

  bitstringInput(size: 5 | 6 | 10 | 14) {
    return html`
      <md-outlined-text-field
        id="input"
        label="${this.label}"
        value="${sanitizeBitString(this.default) ?? nothing}"
        maxlength="${size}"
        @input="${this.handleBitStringInput}"
      ></md-outlined-text-field>
    `;
  }

  get value() {
    if (this.bType === 'BOOLEAN') {
      return (this.input as unknown as MdSwitch).selected ? 'true' : 'false';
    }
    return this.input?.value ?? '';
  }

  set value(val: string) {
    this.input?.setAttribute('value', val);
  }

  get inputs(): Partial<Record<string, TemplateResult>> {
    return {
      BOOLEAN: html`<label
        >${this.label}
        <md-switch id="input" ?selected=${xmlBoolean(this.default)}></md-switch
      ></label>`,
      INT8: this.intInput(8),
      INT16: this.intInput(16),
      INT24: this.intInput(24),
      INT32: this.intInput(32),
      INT64: this.intInput(64),
      INT128: this.intInput(128),
      INT8U: this.intInput(8, false),
      INT16U: this.intInput(16, false),
      INT24U: this.intInput(24, false),
      INT32U: this.intInput(32, false),
      FLOAT32: this.floatInput(),
      FLOAT64: this.floatInput(),
      Octet6: this.octetInput(6),
      Octet16: this.octetInput(16),
      Octet64: this.octetInput(64),
      VisString32: this.stringInput(32),
      VisString64: this.stringInput(64),
      VisString65: this.stringInput(65),
      VisString129: this.stringInput(129),
      VisString255: this.stringInput(255),
      Unicode255: this.stringInput(255),
      Quality: this.bitstringInput(14),
      Currency: currencyInput(this.label, this.default),
      Enum: this.enumInput(),
      Timestamp: this.timestampInput(),
      ObjRef: this.objrefInput(),
      Dbpos: this.dbposInput(),
      Tcmd: this.tcmdInput(),
      EntryTime: this.octetInput(6),
      Check: this.intInput(8, false),
      TrgOps: this.bitstringInput(6),
      OptFlds: this.bitstringInput(10),
      SvOptFlds: this.bitstringInput(6),
      LogOptFlds: this.bitstringInput(5),
      EntryID: this.octetInput(8),
    };
  }

  render() {
    return (
      this.inputs[this.bType ?? ''] ??
      html`<md-outlined-text-field
        id="input"
        label="${this.label}"
        value="${this.default ?? nothing}"
      ></md-outlined-text-field>`
    );
  }
}
