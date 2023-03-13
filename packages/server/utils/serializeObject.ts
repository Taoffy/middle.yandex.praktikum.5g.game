import serialize from 'serialize-javascript';

function serializeObject(data: unknown) {
  serialize(data).replace(/</g, '\\\u003c');
}

export { serializeObject };
