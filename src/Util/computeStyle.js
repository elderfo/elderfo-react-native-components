import merge from 'lodash.merge';

export default function computeStyle(defaultStyle, newStyle) {
    if (typeof (newStyle) !== 'object') {
        return merge({}, defaultStyle);
    }
    return merge({}, defaultStyle, newStyle);
}