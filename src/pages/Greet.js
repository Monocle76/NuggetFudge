export default function Greet({ name }) {
  return <h1>Hello, {decodeURIComponent(name)}!</h1>
}