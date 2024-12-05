import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { MbgValInput } from '../src/MbgValInput.js';
import '../src/mbg-val-input.js';

describe('MbgValInput', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<MbgValInput>(html`<mbg-val-input></mbg-val-input>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
