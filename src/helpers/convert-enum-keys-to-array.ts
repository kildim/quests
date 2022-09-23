export const convertEnumKeysToArray = (sourceEnum: any) =>
  Object.keys(sourceEnum).filter(value => typeof value === 'string');
