import _ from 'lodash';

export const changeIntiativeOrder = function (array) {
    const currentInitiative = _.cloneDeep(array);

    currentInitiative.push(currentInitiative.shift());

    return currentInitiative;
}