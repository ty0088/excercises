import {
    capitilise,
    reverseStr,
    calculator,
    caesarCipher,
    analyseArray
} from './script'

test('Capitalise example 1', () => {
    expect(capitilise('tom')).toBe('Tom');
});

test('Capitalise example 2', () => {
    expect(capitilise('d124')).toBe('D124');
});

test('Reverse String example 1', () => {
    expect(reverseStr('123')).toBe('321');
});

test('Reverse String example 2', () => {
    expect(reverseStr('cba')).toBe('abc');
});

test('Reverse String example 3', () => {
    expect(reverseStr('Hello there!')).toBe('!ereht olleH');
});

test('Calculator add example 1', () => {
    expect(calculator.add(1,1)).toBe(2);
});

test('Calculator add example 2', () => {
    expect(calculator.add(0,5)).toBe(5);
});

test('Calculator subtract example 1', () => {
    expect(calculator.subtract(1,1)).toBe(0);
});

test('Calculator subtract example 2', () => {
    expect(calculator.subtract(5,10)).toBe(-5);
});

test('Calculator divide example 1', () => {
    expect(calculator.divide(10,5)).toBe(2);
});

test('Calculator divide example 2', () => {
    expect(calculator.divide(0,2)).toBe(0);
});

test('Calculator multiply example 1', () => {
    expect(calculator.multiply(1,1)).toBe(1);
});

test('Calculator multiply example 2', () => {
    expect(calculator.multiply(5,-5)).toBe(-25);
});

test('Cipher example 1', () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 1)).toBe('bcdefghijklmnopqrstuvwxyza');
});

test('Cipher example 2', () => {
    expect(caesarCipher('Hello, how are you?', 1)).toBe('Ifmmp, ipx bsf zpv?');
});

test('Cipher example 3', () => {
    expect(caesarCipher('AbC ZXy 123 <>#:`', 5)).toBe('FgH ECd 123 <>#:`');
});

test('Cipher example 4', () => {
    expect(caesarCipher('abcXYZ', -3)).toBe('xyzUVW');
});

test('Cipher example 5', () => {
    expect(caesarCipher('aA', -26)).toBe('aA');
});

test('Wraps from z to a', () => {
    expect(caesarCipher('Z', 2)).toEqual('B');
  });
  
  test('Works with different cases', () => {
    expect(caesarCipher('mooniiDev', 5)).toEqual('rttsnnIja');
  });
  
  test('Works with punctuation', () => {
    expect(caesarCipher('Hello, World!', 5)).toEqual('Mjqqt, Btwqi!');
  });

test('Analyse Array example 1', () => {
    expect(analyseArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      })
});

test('Analyse Array example 1', () => {
    expect(analyseArray([0,1,2,3])).toEqual({
        average: 1.5,
        min: 0,
        max: 3,
        length: 4
      })
});

