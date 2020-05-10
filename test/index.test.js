import Vue from 'vue';
import test from "lib";

const localVue = new Vue();
console.log('test vue path resolve: ', require.resolve('vue'));
console.log('localVue instanceof Vue: ', localVue instanceof Vue)
describe("Test", () => {
  //  Inspect the raw component options
  it("must be success", () => {
    let testInstance = new test();
    let result = testInstance.go(localVue);
    expect(result).toBe(true);
  });
});
