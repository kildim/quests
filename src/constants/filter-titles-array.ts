import {convertEnumValuesToArray} from '../helpers/convert-enum-values-to-array';
import {Filters} from './filters';

export const filterTitlesArray = convertEnumValuesToArray(Filters) as string[];
