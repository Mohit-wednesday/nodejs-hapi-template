import { isArray, snakeCase } from 'lodash';
import mapKeysDeep from 'map-keys-deep';

export const convertDbResponseToRawResponse = dbResponse => {
    console.log(
        dbResponse.get({
            plain: true,
            raw: true
        })
    );
    return dbResponse.get({
        plain: true,
        raw: true
    });
};

/**
 * A funtion that takes an sequelize database array response and converts
 * each object in a raw object & the keys to be snake_case
 * @param {Object} arr
 */
export const transformDbArrayResponseToRawResponse = arr => {
    console.log(arr);
    if (!isArray(arr)) {
        throw new Error('The required type should be an object(array)');
    } else {
        return arr.map(resource =>
            mapKeysDeep(convertDbResponseToRawResponse(resource), keys =>
                snakeCase(keys)
            )
        );
    }
};
