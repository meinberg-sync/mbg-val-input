import { css } from 'lit';

export const designTokens = css`
  :host {
    /* public design tokens */
    --mbg-val-input-shape: 4px;
    --mbg-val-input-space: 16px;
    --mbg-val-input-height: 56px;
    --mbg-val-input-width: auto;
    --mbg-val-input-min-width: 100px;
    --mbg-val-input-max-width: 100%;

    /* assign values specific to the text field */
    --md-outlined-text-field-container-shape: var(--mbg-val-input-shape, 4px);
    --md-outlined-text-field-top-space: var(--mbg-val-input-space, 16px);
    --md-outlined-text-field-bottom-space: var(--mbg-val-input-space, 16px);

    /* assign values specific to the select field */
    --md-outlined-select-text-field-container-shape: var(
      --mbg-val-input-shape,
      4px
    );
    --md-outlined-field-top-space: var(--mbg-val-input-space, 16px);
    --md-outlined-field-bottom-space: var(--mbg-val-input-space, 16px);

    /* assign universal values */
    height: var(--mbg-val-input-height, 56px);
    width: var(--mbg-val-input-width, auto);
    min-width: var(--mbg-val-input-min-width, 100px);
    max-width: var(--mbg-val-input-max-width, 100%);
  }
`;
