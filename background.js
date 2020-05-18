chrome.commands.onCommand.addListener(function (command) {
  // alert(command)
  // console.log(command)
  console.log("------------");
  Array.prototype.slice
    .call(document.getElementsByTagName("input"))
    .forEach((e) => (e.value = "1"));

  const code = `(function getUrls(){
        const forkUrl = document.querySelector('meta[name="octolytics-dimension-repository_parent_nwo"]') 
          ? document.querySelector('meta[name="octolytics-dimension-repository_parent_nwo"]').content
          : undefined;
        const url = document.querySelector('meta[name="go-import"]') 
          ? document.querySelector('meta[name="go-import"]').content.split(' ')[0]
          : undefined;
        const href = window.location.href;
        return { forkUrl, url, href };
      })()`;
  chrome.tabs.executeScript(undefined, { code }, function (result) {
    // alert(document);
    console.log('--------', document)

//     const { forkUrl, url, href } = result[0];
//     if (forkUrl) {
//       document.getElementById("url").innerText = `
//             git remote add upstream https://github.com/${forkUrl}
//             git fetch upstream
//             git branch --set-upstream-to=upstream/master master`;
//     } else if (url) {
//       document.getElementById("url").innerText = `
//             git remote add upstream https://${url}
//             git fetch upstream
//             git branch --set-upstream-to=upstream/master master`;
//     } else {
//       document.getElementById("url").innerText = `
//             git remote add upstream ${href}
//             git fetch upstream
//             git branch --set-upstream-to=upstream/master master`;
//     }
  });
});
