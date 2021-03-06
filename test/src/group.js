import test from 'ava';

import {identity} from '@functional-abstraction/operator';

import {range} from '@iterable-iterator/range';
import {map} from '@iterable-iterator/map';
import {repeat} from '@iterable-iterator/repeat';
import {ncycle} from '@iterable-iterator/cycle';
import {next} from '@iterable-iterator/next';
import {list} from '@iterable-iterator/list';

import {group, groupby} from '../../src/index.js';

test('groupby is group', (t) => {
	t.is(groupby, group);
});

test('group', (t) => {
	const x = (key, iterable, expected) => {
		t.deepEqual(
			list(map(([k, g]) => [k, list(g)], group(key, iterable))),
			expected,
		);
	};

	x(identity, '', []);

	x(identity, 'AAAAAABBBBCCCCAABBCC', [
		['A', ['A', 'A', 'A', 'A', 'A', 'A']],
		['B', ['B', 'B', 'B', 'B']],
		['C', ['C', 'C', 'C', 'C']],
		['A', ['A', 'A']],
		['B', ['B', 'B']],
		['C', ['C', 'C']],
	]);

	x(
		(item) => {
			return item.codePointAt(0) - 65;
		},
		'AAAAAABBBBCCCCAABBCC',
		[
			[0, ['A', 'A', 'A', 'A', 'A', 'A']],
			[1, ['B', 'B', 'B', 'B']],
			[2, ['C', 'C', 'C', 'C']],
			[0, ['A', 'A']],
			[1, ['B', 'B']],
			[2, ['C', 'C']],
		],
	);

	x(
		(item) => {
			return Math.floor((item.codePointAt(0) - 65) / 2);
		},
		'AAAAAABBBBCCCCAABBCC',
		[
			[0, ['A', 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'B', 'B']],
			[1, ['C', 'C', 'C', 'C']],
			[0, ['A', 'A', 'B', 'B']],
			[1, ['C', 'C']],
		],
	);
});

test('group keys', (t) => {
	const x = (key, iterable, expected) => {
		t.deepEqual(list(map(([k, _]) => k, group(key, iterable))), expected);
	};

	x(identity, '', []);

	x(identity, 'AAAAAABBBBCCCCAABBCC', list('ABCABC'));

	x(
		(item) => {
			return item.codePointAt(0) - 65;
		},
		'AAAAAABBBBCCCCAABBCC',
		list(ncycle(range(3), 2)),
	);

	x(
		(item) => {
			return Math.floor((item.codePointAt(0) - 65) / 2);
		},
		'AAAAAABBBBCCCCAABBCC',
		list(ncycle(range(2), 2)),
	);
});

test('group for infinite sequence of something', (t) => {
	const v = Math.random();

	const [k, g] = next(group(identity, repeat(v)));

	t.deepEqual(k, v);

	// eslint-disable-next-line no-unused-vars
	for (const _ of range(1000)) {
		t.deepEqual(next(g), v);
	}
});
