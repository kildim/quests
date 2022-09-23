import {Filters} from '../constants/filters';

export const getFilterByValue = (value: string) => Object.keys(Filters)[Object.values(Filters as any).indexOf(value)];
