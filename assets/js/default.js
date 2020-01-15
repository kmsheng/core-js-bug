import 'core-js/stable' // import core-js in client script

// result should be t,t
// but it's t,e,s,t in IE11
const res = 'test'.split(/es/)

console.log(res)
document.body.textContent = "'test'.split(/es/) = " + JSON.stringify(res)
