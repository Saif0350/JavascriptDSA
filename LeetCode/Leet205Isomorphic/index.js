const isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  const mapST = new Map();
  const mapTS = new Map();

  for (let i = 0; i < s.length; i++) {
    const cs = s[i];
    const ct = t[i];

    // If there's an existing mapping, it must match
    if (mapST.has(cs)) {
      if (mapST.get(cs) !== ct) return false;
    } else {
      mapST.set(cs, ct);
    }

    if (mapTS.has(ct)) {
      if (mapTS.get(ct) !== cs) return false;
    } else {
      mapTS.set(ct, cs);
    }
  }

  return true;
};

console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("foo", "bar")); // false
console.log(isIsomorphic("paper", "title")); // true
console.log(isIsomorphic("abc", "ddd"));
