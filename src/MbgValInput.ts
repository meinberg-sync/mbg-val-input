/* eslint-disable import/no-extraneous-dependencies */
import { html, css, LitElement, TemplateResult, nothing } from 'lit';
import { property, query } from 'lit/decorators.js';
import type { MdSwitch } from '@material/web/switch/switch.js';

import '@material/web/textfield/outlined-text-field.js';
import '@material/web/switch/switch.js';

function xmlBoolean(val?: string) {
  return ['true', '1'].includes(val?.toLowerCase().trim()??"false");
}

/** Web Component for inputting IEC61850-6 "Val" values */
export class MbgValInput extends LitElement {
  static styles = css`
  `;

  @property({ type: String }) bType?: string;
  
  // If the DA/BDA is assigned a Val in DataTypeTemplates
  @property({ type: String }) default = "";

  // if bType === "Enum"
  @property({ type: Array }) enumVals: string[] = [];

  @property({type: String}) label = 'Val';

  @query('#input') input?: HTMLInputElement;

  intInput(size: 8 | 16 | 24 | 32 | 64 | 128, signed = true) {
    const min = signed? -(2**(size-1)) : 0;
    const max = signed? 2**(size-1)-1 : 2**(size)-1;

    if (size > 52) {
      return html`<md-outlined-text-field id="input" label="${this.label}" type="number" step="1" value="${this.default??nothing}"></md-outlined-text-field>`;
    }

    return html`<md-outlined-text-field id="input" label="${this.label}" type="number" step="1" min="${min}" max="${max}" value="${this.default??nothing}"></md-outlined-text-field>`;
  }

  get value() {
    if (this.bType === 'BOOLEAN') {
      return (this.input as unknown as MdSwitch).selected? "true" : "false";
    }
    return this.input?.value??"";
  }

  set value(val: string) {
    this.input?.setAttribute('value', val);
  }

  get inputs(): Partial<Record<string, TemplateResult>> {
    return {BOOLEAN: html`<label>${this.label} <md-switch id="input" ?selected=${xmlBoolean(this.default)}></md-switch></label>`,
            INT8: this.intInput(8),
            INT16: this.intInput(16),
            INT24: this.intInput(24),
            INT32: this.intInput(32),
            INT64: this.intInput(64),
            INT128: this.intInput(128),
            INT8U: this.intInput(8, false),
            INT16U: this.intInput(16, false),
            INT24U: this.intInput(24, false),
            INT32U: this.intInput(32, false),};
  }

  render() {
    return this.inputs[this.bType??'']??html`<md-outlined-text-field id="input" label="${this.label}" value="${this.default??nothing}"></md-outlined-text-field>`;
  }
}
