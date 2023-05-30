const { deterministicPartitionKey, determineCandidate, getHashedData, hashCandidate } = require('./your-refactored-code');

describe('deterministicPartitionKey', () => {
  test('returns the correct partition key when event has a partitionKey property', () => {
    const event = { partitionKey: '123' };
    const result = deterministicPartitionKey(event);
    expect(result).toBe('123');
  });

  test('returns the correct partition key when event is defined', () => {
    const event = { key: 'value' };
    const result = deterministicPartitionKey(event);
    expect(result).toBe(getHashedData(event));
  });

  test('returns the trivial partition key when event is not defined', () => {
    const result = deterministicPartitionKey(null);
    expect(result).toBe('0');
  });

  test('returns the hashed partition key when candidate length exceeds MAX_PARTITION_KEY_LENGTH', () => {
    const longCandidate = 'a'.repeat(300);
    const result = deterministicPartitionKey(longCandidate);
    expect(result).toBe(hashCandidate(longCandidate));
  });
});

describe('determineCandidate', () => {
  test('returns the partitionKey as a string when it is defined', () => {
    const event = { partitionKey: 123 };
    const result = determineCandidate(event);
    expect(result).toBe('123');
  });

  test('returns the hashed data when event is defined', () => {
    const event = { key: 'value' };
    const result = determineCandidate(event);
    expect(result).toBe(getHashedData(event));
  });

  test('returns the trivial partition key when event is not defined', () => {
    const result = determineCandidate(null);
    expect(result).toBe('0');
  });
});

describe('getHashedData', () => {
  test('returns the hashed data of the input', () => {
    const data = { key: 'value' };
    const result = getHashedData(data);
    expect(result).toBe(crypto.createHash('sha3-512').update(JSON.stringify(data)).digest('hex'));
  });
});

describe('hashCandidate', () => {
  test('returns the hashed candidate', () => {
    const candidate = 'test';
    const result = hashCandidate(candidate);
    expect(result).toBe(crypto.createHash('sha3-512').update(candidate).digest('hex'));
  });
});
