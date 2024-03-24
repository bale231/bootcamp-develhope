export function MouseClicker() {
  function handleClick(e) {
    console.log(e.currentTarget.name);
  }

  return <button name="first-button" onClick={handleClick}>Click me to print Name!</button>;
}
