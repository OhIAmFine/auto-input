chrome.commands.onCommand.addListener(function(command) {
    // alert(command)
    // console.log(command)
    console.log('------------') 
    alert(window.document.getElementsByTagName("input").length)
    Array.prototype.slice.call(document.getElementsByTagName("input")).forEach(e=>e.value='1')
})
