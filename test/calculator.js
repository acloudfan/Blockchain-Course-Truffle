contract ("Calculator", function(accounts){
    // Accounts are available in the TestRPC simulator
    var account_0 = accounts[0];
    var from = {from:account_0}


     // Accounts are available in the TestRPC simulator
    var account_0 = accounts[0];
    var from = { from: account_0 }



    // Ensure the initialized contract has a result=10
    it("should have a result=10 after the initialization", function () {
        // Deploys a new contract instance to TestRPC and initializes the abstraction
        var calculator = Calculator.deployed();

        // This a call to get the result
        calculator.getResult.call().then(function (result) {
            assert.equal(result.valueOf(), 10, "Contract initialized with value NOT equal to 10!!!")
        });
    });


    // Suite of tests - multiple test cases run as a unit
    // Calls the contract functions to carry out mathematical operations
    // describe("should add & substract correctly", function(){

    // Test case#1 Checks if calls to add/subtract for ((Initial_Value + 10) - 10) = 10
    it("should add 10 and then substract 10 to get a result=10", function () {
        // Transaction
        var calculator = Calculator.deployed();

        calculator.addToNumber(10, from).then(function () {
            return calculator.getResult.call();
        }).then(function (result) {
            assert.equal(result.toNumber(), 20, "Result after adding 10 should be 20");
            // Now substract 10
            calculator.substractNumber(10, from);
            return calculator.getResult.call();
        }).then(function (result) {
            assert.equal(result.toNumber(), 10, "Result after subtracting 10 should be 10");
        });
    });

    // Tests the Multiple & Divide functions
    it("should multiply 10 and divide by 10 to get a result=10",function(){
        
        var calculator = Calculator.deployed();

        Calculator.new().then(function(instance){
            calculator = instance
            // Multiple by 10 
            return calculator.multiplyWithNumber(10, from).then(function(){
                return calculator.getResult.call();
            })
        }).then(function(){
            return calculator.getResult.call();
        }).then(function(result){
            // Check if the result = 100
            assert.equal(result.toNumber(),100,"Result after multiplying with 10 should be 100");
            // Now divide by 10
            return calculator.divideByNumber(10,from);
        }).then(function(){
            return calculator.getResult.call();
        }).then(function(result){
            assert.equal(result.toNumber(),10,"Result after dividing with 10 should be 10");
        });
    });
});