// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

//syntax
//  describe('nameOfFunctionthatsBeingTested', function () {
//  it("should - describe what you are specifically testing", function (){
//  expect(something from the function ).jasmineMethod("actual" + expecte output her)
//   })
//})

//unit test double
// describe('double', function () {
//     it('should return a number', function (){
//         expect(typeof double()).toBe("number");
//     });
// });


//describe('double', function () {
//    it('should be a function', function (){
//        expect(typeof double).toBe("function");
//    });
//});


/** Exercise #1 Take your first "Test Drive" by writing your first test!*/

describe('someGreeting', function() {
    it('should be a function', function (){
        expect('sayHello').toBe('sayHello');
    });
    it('should return a string when called'), function () {
        expect('sayHello').toBe('sayHello');
    }
})

