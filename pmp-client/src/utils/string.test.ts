import { describe, expect, test } from 'vitest';

import { capitaliseFirstLetter } from './string';

describe('String utility functions', () => {
    test('capitaliseFirstLetter', () => {
        expect(capitaliseFirstLetter('hello')).toBe('Hello');
        expect(capitaliseFirstLetter('Hello')).toBe('Hello');
        expect(capitaliseFirstLetter('h')).toBe('H');
        expect(capitaliseFirstLetter('')).toBe('');
    });
});
