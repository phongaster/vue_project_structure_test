import Vue from 'vue'

export default function test() {
  console.log('src vue path resolve:', require.resolve('vue'))
  this.go = (component) => {
    // refer 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
    console.log('component instanceof Vue: ', component instanceof Vue)
    // new way to check if an object is vue object
    console.log('component._isVue', component._isVue)
    if (component instanceof Vue)
      return true
    return false
  }
}