function fibonacci(num) {
// your code here
	if(num===1 || num==0){
		return num;
	}
	else{
		let num1 = 0;
		let num1 = 1;

		let fib =0;
		for(let i=0;i<num;i++){
			fib += num1+num2;
			num1=num2;
			num2=fib;
		}
		
	}
}

module.exports = fibonacci;
