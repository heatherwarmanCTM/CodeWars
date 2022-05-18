describe("Tests", () => {
	it("test 1+2=3", () => {
  Test.assertEquals(calculator(1,2,"+"), 3, "calculate");
	  });
	it("test 3+4=7", () => {
  Test.assertEquals(calculator(3,4,"+"), 7, "calculate");
		  });
	it("test 1-2=-1", () => {
  Test.assertEquals(calculator(1,2,"-"), -1, "calculate");
		  });
	it("test 3*5=15", () => {
  Test.assertEquals(calculator(3,5,"*"), 15, "calculate");
		});
	it("test 6/2=3", () => {
  Test.assertEquals(calculator(6,2,"/"), 3, "calculate");
		});
	
	it("test 6$2=unknown value", () => {
  Test.assertEquals(calculator(6,2,"$"), "unknown value",  "calculate"); 
  Test.assertEquals(calculator(6,"h","*"), "unknown value", "calculate");   
	   
  
	});
  });
  