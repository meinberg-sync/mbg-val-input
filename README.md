# \<mbg-val-input>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Theming](#theming)
- [Supported basic types (bTypes)](#supported-basic-types-btypes)
  - [Boolean](#boolean)
  - [Integers](#integers)
  - [Floats](#floats)
  - [Octet strings](#octet-strings)
  - [Visible and Unicode strings](#visible-and-unicode-strings)
  - [Bit strings](#bit-strings)
  - [Enumerations](#enumerations)
  - [Other](#other)
- [Development Workflow](#development-workflow)
  - [Linting and formatting](#linting-and-formatting)
  - [Testing with Web Test Runner](#testing-with-web-test-runner)
  - [Demoing with Storybook](#demoing-with-storybook)
  - [Tooling configs](#tooling-configs)
  - [Local Demo with web-dev-server](#local-demo-with-web-dev-server)

## Installation

```bash
npm i mbg-val-input
```

## Usage

```html
<script type="module">
  import 'mbg-val-input/mbg-val-input.js';
</script>

<mbg-val-input></mbg-val-input>
```

## Theming

`<mbg-val-input>` exposes CSS custom properties (design tokens) so you can adjust its appearance without overriding internal styles. The default values are based on what is defined in the Material Web toolkit.

| Token | Default | Description |
| --- | --- | --- |
| `--mbg-val-input-shape` | `4px` | Border radius of the input container |
| `--mbg-val-input-space` | `16px` | Top and bottom padding inside the field |
| `--mbg-val-input-height` | `56px` | Height of the component |
| `--mbg-val-input-width` | `auto` | Width of the component |
| `--mbg-val-input-min-width` | `100px` | Minimum width |
| `--mbg-val-input-max-width` | `100%` | Maximum width |

Set any of these on the element or a parent selector:

```css
mbg-val-input {
  --mbg-val-input-shape: 8px;
  --mbg-val-input-height: 48px;
  --mbg-val-input-width: 320px;
}
```

## Supported basic types (bTypes)

`<mbg-val-input>` supports the following basic types, as defined in the IEC 61850 standard. Pass the type via the `bType` attribute.

### Boolean

| bType | Input | Notes |
| --- | --- | --- |
| `BOOLEAN` | Toggle switch | Accepts `true`/`1` or `false`/`0` as default value |

### Integers

| bType | Input | Range |
| --- | --- | --- |
| `INT8` | Number field | -128 to 127 |
| `INT16` | Number field | -32,768 to 32,767 |
| `INT24` | Number field | -8,388,608 to 8,388,607 |
| `INT32` | Number field | -2,147,483,648 to 2,147,483,647 |
| `INT64` | Text field | 64-bit signed (parsed as BigInt) |
| `INT128` | Text field | 128-bit signed (parsed as BigInt) |
| `INT8U` | Number field | 0 to 255 |
| `INT16U` | Number field | 0 to 65,535 |
| `INT24U` | Number field | 0 to 16,777,215 |
| `INT32U` | Number field | 0 to 4,294,967,295 |
| `Check` | Number field | 8-bit unsigned (0 to 255) |

### Floats

| bType | Input | Range |
| --- | --- | --- |
| `FLOAT32` | Text field | IEEE 754 single precision |
| `FLOAT64` | Text field | IEEE 754 double precision |

### Octet strings

Accepts hexadecimal characters only. Max length is `size × 2` hex characters.

| bType | Input | Max length |
| --- | --- | --- |
| `Octet6` | Text field | 12 hex chars |
| `Octet16` | Text field | 32 hex chars |
| `Octet64` | Text field | 128 hex chars |
| `EntryID` | Text field | 16 hex chars |
| `EntryTime` | Text field | 12 hex chars |

### Visible and Unicode strings

| bType | Input | Max length |
| --- | --- | --- |
| `VisString32` | Text field | 32 |
| `VisString64` | Text field | 64 |
| `VisString65` | Text field | 65 |
| `VisString129` | Text field | 129 |
| `VisString255` | Text field | 255 |
| `Unicode255` | Text field | 255 |

### Bit strings

Accepts only `0` and `1` characters.

| bType | Input | Length |
| --- | --- | --- |
| `Quality` | Text field | 14 bits |
| `TrgOps` | Text field | 6 bits |
| `OptFlds` | Text field | 10 bits |
| `SvOptFlds` | Text field | 6 bits |
| `LogOptFlds` | Text field | 5 bits |

### Enumerations

| bType | Input | Notes |
| --- | --- | --- |
| `Enum` | Dropdown | Options driven by `enumOrdinals` and `enumLabels` properties |
| `Dbpos` | Dropdown | Fixed: `0` intermediate-state, `1` off, `2` on, `3` bad-state |
| `Tcmd` | Dropdown | Fixed: `0` neutral, `1` lower, `2` higher, `3` reserved |

### Other

| bType | Input | Notes |
| --- | --- | --- |
| `Timestamp` | Text field | Format: `YYYY-MM-DDTHH:MM:SS.sss` |
| `ObjRef` | Text field | Alphanumeric and `_`, `/`, `$`; max 255 chars |
| `Currency` | Currency field | Custom currency input |

## Development Workflow

### Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

### Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```

### Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
npm run storybook
```

To build a production version of Storybook, run

```bash
npm run storybook:build
```

### Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

### Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
