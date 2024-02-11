function sayHelloName(name) {
  console.log("Hello");

  let timer = setTimeout(() => {
    console.log(name);
  }, 1000);
  return timer;
}

sayHelloName("Luigi");