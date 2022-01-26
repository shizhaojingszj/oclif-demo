export const fib = (number: number, print: boolean = false): number => {
  let returns
  if(print){
    console.log(`fib(${number}) is called`)
  }
  if(number < 2) {
    returns = 1
    if(print) {
      console.log(`fib(${number})=${returns}`)
    }
    return returns
  } else {
    returns = fib(number - 1, print) + fib(number - 2, print)
    if(print) {
      console.log(`fib(${number})=${returns}`)
    }
    return returns
  }
}