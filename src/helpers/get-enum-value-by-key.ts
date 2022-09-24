export const getEnumValueByKey = (sourceEnum: any, key: string)  => <string>Object.values(sourceEnum)[Object.keys(sourceEnum).indexOf(key)];
