exports.doFetch = async (url, options = {}) => {
  const signal = AbortSignal.timeout(100);
  const res = await fetch(url, { ...options, signal });
  const json = await res.json();
  return json;
};
