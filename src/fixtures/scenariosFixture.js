const build = (attributes, i) => {
  const index = i !== null && i !== undefined ? i : 1;
  return {
    id: `scenario-${index}`,
    name: `name-${index}`,
    ...attributes,
  };
};

const buildList = (amount, attributes) => {
  let parsedAttributes = attributes || {};
  const list = [];
  for (var i = 0; i < amount; i++) {
    list.push(build(parsedAttributes, i));
  }
  return list;
};

export default { build, buildList };
