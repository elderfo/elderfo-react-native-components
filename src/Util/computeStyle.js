import cloneDeep from 'lodash/cloneDeep';
import merge from 'lodash/merge';

export default function computeStyle(defaultStyle, newStyle) {
    if (typeof (newStyle) !== 'object') {
        return cloneDeep(defaultStyle);
    }
    return merge({}, defaultStyle, newStyle);
}