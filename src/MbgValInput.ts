/* eslint-disable import/no-extraneous-dependencies */
import { html, css, LitElement, TemplateResult, nothing } from 'lit';
import { property, query } from 'lit/decorators.js';
import type { MdSwitch } from '@material/web/switch/switch.js';

import '@material/web/textfield/outlined-text-field.js';
import '@material/web/switch/switch.js';

function xmlBoolean(val?: string) {
  return ['true', '1'].includes(val?.toLowerCase().trim() ?? 'false');
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

/** Web Component for inputting IEC61850-6 "Val" values */
export class MbgValInput extends LitElement {
  static styles = css``;

  @property({ type: String }) bType?: string;

  // If the DA/BDA is assigned a Val in DataTypeTemplates
  @property({ type: String }) default = '';

  // if bType === "Enum"
  @property({ type: Array }) enumVals: string[] = [];

  @property({ type: String }) label = 'Val';

  @query('#input') input?: HTMLInputElement;

  intInput(size: 8 | 16 | 24 | 32 | 64 | 128, signed = true) {
    const min = signed ? -(2 ** (size - 1)) : 0;
    const max = signed ? 2 ** (size - 1) - 1 : 2 ** size - 1;

    if (size > 52) {
      return html`<md-outlined-text-field
        id="input"
        label="${this.label}"
        type="number"
        step="1"
        value="${this.default ?? nothing}"
      ></md-outlined-text-field>`;
    }

    return html`<md-outlined-text-field
      id="input"
      label="${this.label}"
      type="number"
      step="1"
      min="${min}"
      max="${max}"
      value="${this.default ?? nothing}"
    ></md-outlined-text-field>`;
  }

  private sanitizeFloat(value: string) {
    let sanitized = '';

    if (value === 'e') {
      // account for Euler's number
      sanitized = '2.7182818284590452354';
    } else {
      // remove leading zeros and invalid characters
      sanitized = value.replace(/[^0-9.-]/g, '').replace(/^0+(?=\d)/, '');
      if (sanitized === '') {
        sanitized = this.default ?? '0';
      }
    }

    return sanitized;
  }

  private handleFloatInput(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    const sanitizedInput = this.sanitizeFloat(input);
    const parsedValue = parseFloat(sanitizedInput);

    if (
      !Number.isNaN(parsedValue) &&
      isValidFloat(parsedValue, this.bType === 'FLOAT32' ? 32 : 64)
    ) {
      this.value = sanitizedInput;
      // eslint-disable-next-line no-param-reassign
      (event.target as HTMLInputElement).value = sanitizedInput;
    } else {
      this.value = this.default ?? '0';
      // eslint-disable-next-line no-param-reassign
      (event.target as HTMLInputElement).value = this.default ?? '0';
    }
  }

  floatInput() {
    return html`
      <md-outlined-text-field
        id="$input"
        label="${this.label}"
        type="text"
        value="${this.default ?? nothing}"
        @input="${this.handleFloatInput}"
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
