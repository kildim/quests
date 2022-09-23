export const convertEnumValuesToArray = (sourceEnum: any) =>
  Object.values(sourceEnum).filter(value => typeof value === 'string');
