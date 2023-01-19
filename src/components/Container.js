export default function Container({children}) {
  return <div className="container" style={{ maxWidth: "800px", marginInline: "auto" }}>{children}</div>
}