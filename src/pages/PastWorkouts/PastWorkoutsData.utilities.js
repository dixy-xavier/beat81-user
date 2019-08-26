export const getValue = (data, path) => {
  if (path.length === 0) return data;
  else return getValue(data[path[0]], path.slice(1, path.length));
};
