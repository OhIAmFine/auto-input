chrome.runtime.onMessage.addListener(function (message) {
  if (message.type === "set-random-value") {
    Array.prototype.slice
      .call(document.getElementsByTagName("input"))
      .forEach((e) => {
        if (e.disabled || e.type === "password") return;
        const maxLen = 10;
        const randomLen = Math.floor(Math.random() * maxLen + 1);

        if (e.type === "number") {
          e.value = new Array(randomLen)
            .fill(0)
            .map(() =>
              String.fromCharCode(48 + Math.floor(Math.random() * 8 + 1))
            )
            .join("");
          return;
        }
        const randomStr = new Array(randomLen)
          .fill(0)
          .map(() => {
            let randomNum = 48 + Math.floor(Math.random() * 73 + 1);
            while (
              (randomNum > 90 && randomNum < 97) ||
              (randomNum > 57 && randomNum < 65)
            ) {
              randomNum = 48 + Math.floor(Math.random() * 73 + 1);
            }
            return String.fromCharCode(randomNum);
          })
          .join("");

        e.value = randomStr;
      });
  }
});
