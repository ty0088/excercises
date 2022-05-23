import {
    capitilise,
} from './script'

test('Capitalise example 1', () => {
    expect(capitilise('tom')).toBe('Tom');
});

test('Capitalise example 1', () => {
    expect(capitilise('d124')).toBe('D124');
});