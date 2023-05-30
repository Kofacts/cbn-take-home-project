const crypto = require("crypto");

const deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  let candidate = determineCandidate(event);

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = hashCandidate(candidate);
  }

  return candidate;
};

const determineCandidate = (event) => {
  if (event && event.partitionKey) {
    return event.partitionKey.toString();
  } else if (event) {
    return getHashedData(event);
  } else {
    return TRIVIAL_PARTITION_KEY;
  }
};

const getHashedData = (data) => {
  const hashedData = crypto.createHash("sha3-512").update(JSON.stringify(data)).digest("hex");
  return hashedData;
};

const hashCandidate = (candidate) => {
  const hashedCandidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  return hashedCandidate;
};

module.exports = {
  deterministicPartitionKey,
  determineCandidate,
  getHashedData,
  hashCandidate
};
