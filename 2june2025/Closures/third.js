// Question: How is closure used here to "hide" secret?

function secretHolder(secret) {
  return {
    getSecret: function () {
      return secret;
    },
    setSecret: function (newSecret) {
      secret = newSecret;
    },
  };
}

const holder = secretHolder("abc");
holder.setSecret("xyz");
console.log(holder.getSecret()); // ?
