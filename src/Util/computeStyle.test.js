import computeStyle from './computeStyle';

test('no change when style param is not object', () => {
    const expected = { flex: 1 };
    const actual = computeStyle(expected, 'flex:1');
    expect(actual).toEqual(expected);
});

test('should merge and overwrite', () => {
    const expected = { flex: 1 };
    const actual = computeStyle({ flex: 2 }, expected);
    expect(actual).toEqual(expected);
});

test('should merge and overwrite single level of nesting', () => {
    const expected = {
        container: {
            flex: 1
        }
    };

    const defaultStyle = {
        container: {
            flex: 2
        }
    };

    const actual = computeStyle(defaultStyle, expected);
    expect(actual).toEqual(expected);
});

test('should use default when nested style is undefined', () => {
    const expected = {
        container: undefined
    };

    const defaultStyle = {
        container: {
            flex: 1
        }
    };

    const actual = computeStyle(defaultStyle, expected);
    expect(actual).toEqual(defaultStyle);
});

test('should ignore when prop values are undefined', () => {
    const expected = {
        container: {
            flex: undefined
        }
    };

    const defaultStyle = {
        container: {
            flex: 1
        }
    };

    const actual = computeStyle(defaultStyle, expected);
    expect(actual).toEqual(defaultStyle);
});