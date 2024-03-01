:people_holding_hands: [@iterable-iterator/group](https://iterable-iterator.github.io/group)
==

Iterable items grouping for JavaScript.
See [docs](https://iterable-iterator.github.io/group/index.html).

> :warning: Depending on your environment, the code may require
> `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
import {group} from '@iterable-iterator/group';
import {identity} from '@functional-abstraction/operator';
group( identity , "AAAABBBCCAABB" ) ; // [ A AAAA ] [ B BBB ] [ C CC ] [ A AA ] [ B BB ]
```

[![License](https://img.shields.io/github/license/iterable-iterator/group.svg)](https://raw.githubusercontent.com/iterable-iterator/group/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@iterable-iterator/group.svg)](https://www.npmjs.org/package/@iterable-iterator/group)
[![Tests](https://img.shields.io/github/actions/workflow/status/iterable-iterator/group/ci.yml?branch=main&event=push&label=tests)](https://github.com/iterable-iterator/group/actions/workflows/ci.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/iterable-iterator/group.svg)](https://github.com/iterable-iterator/group/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/iterable-iterator/group.svg)](https://github.com/iterable-iterator/group/issues)
[![Downloads](https://img.shields.io/npm/dm/@iterable-iterator/group.svg)](https://www.npmjs.org/package/@iterable-iterator/group)

[![Code issues](https://img.shields.io/codeclimate/issues/iterable-iterator/group.svg)](https://codeclimate.com/github/iterable-iterator/group/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/iterable-iterator/group.svg)](https://codeclimate.com/github/iterable-iterator/group/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/iterable-iterator/group/main.svg)](https://codecov.io/gh/iterable-iterator/group)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/iterable-iterator/group.svg)](https://codeclimate.com/github/iterable-iterator/group/trends/technical_debt)
[![Documentation](https://iterable-iterator.github.io/group/badge.svg)](https://iterable-iterator.github.io/group/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@iterable-iterator/group)](https://bundlephobia.com/result?p=@iterable-iterator/group)
