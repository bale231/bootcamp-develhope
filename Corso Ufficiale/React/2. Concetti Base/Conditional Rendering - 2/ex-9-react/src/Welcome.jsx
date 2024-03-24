import { Age } from "./Age";

export function Welcome({ name }) {
  return (
    <>
      <p>Welcome {name}!</p>
      <p>
        <Age age={23} />
      </p>
    </>
  );
}
