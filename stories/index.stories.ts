import { html, TemplateResult } from 'lit';
import '../src/mbg-val-input.js';

export default {
  title: 'MbgValInput',
  component: 'mbg-val-input',
  argTypes: {
    bType: { control: 'text' },
    defaultVal: { control: 'text' },
    enumVals: { control: 'array' },
    label: { control: 'text' },
    value: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  bType?: string;
  defaultVal?: string;
  enumVals?: string[];
  label?: string;
  value?: string;
}

const Template: Story<ArgTypes> = ({
  bType,
  defaultVal,
  enumVals,
  label,
  value,
}: ArgTypes) => html`
  <mbg-val-input
    .bType=${bType}
    .default=${defaultVal}
    .enumVals=${enumVals}
    .label=${label}
    .value=${value}
  >
  </mbg-val-input>
`;

export const Regular = Template.bind({});
Regular.args = {
  label: 'Value',
};

export const Boolean = Template.bind({});
Boolean.args = {
  bType: 'BOOLEAN',
  label: 'Boolean',
};

export const BooleanWithDefault = Template.bind({});
BooleanWithDefault.args = {
  bType: 'BOOLEAN',
  defaultVal: 'true',
  label: 'Boolean (Default: true)',
};

export const Int32U = Template.bind({});
Int32U.args = {
  bType: 'INT32U',
  label: 'INT32U',
};

export const Int32 = Template.bind({});
Int32.args = {
  bType: 'INT32',
  label: 'INT32',
};

export const Int64WithDefault = Template.bind({});
Int64WithDefault.args = {
  bType: 'INT64',
  defaultVal: '-42',
  label: 'INT64 (Default: -42)',
};

export const Float32 = Template.bind({});
Float32.args = {
  bType: 'FLOAT32',
  label: 'FLOAT32',
};

export const Float32WithDefault = Template.bind({});
Float32WithDefault.args = {
  bType: 'FLOAT32',
  defaultVal: '3.14',
  label: 'FLOAT32 (Default: 3.14)',
};

export const Float64 = Template.bind({});
Float64.args = {
  bType: 'FLOAT64',
  label: 'FLOAT64',
};

export const Octet6 = Template.bind({});
Octet6.args = {
  bType: 'Octet6',
  defaultVal: '0123456789AB',
  label: 'Octet6',
};

export const Octet16 = Template.bind({});
Octet16.args = {
  bType: 'Octet16',
  defaultVal: '0123456789ABCDEF0123456789ABCDEF',
  label: 'Octet16',
};

export const VisString32 = Template.bind({});
VisString32.args = {
  bType: 'VisString32',
  defaultVal: 'Hello World',
  label: 'VisString32',
};

export const VisString255 = Template.bind({});
VisString255.args = {
  bType: 'VisString255',
  label: 'VisString255',
};
