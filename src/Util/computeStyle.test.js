import computeStyle from './computeStyle';

test('no change when style param is not object', ()=> {
    const expected = {flex:1};
    const actual = computeStyle(expected, 'flex:1');
    expect(actual).toEqual(expected); 
});

test('should merge and overwrite', ()=> {
    const expected = {flex:1};
    const actual = computeStyle({flex:2}, expected);
    expect(actual).toEqual(expected); 
});