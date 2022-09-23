import {convertEnumKeysToArray} from '../helpers/convert-enum-keys-to-array';
import {Filters as sourceEnum} from './filters';

export const filterValuesArray = convertEnumKeysToArray(sourceEnum) as string[];
