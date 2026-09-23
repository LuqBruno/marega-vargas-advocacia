// Next remounts this template when moving between the office and profile routes.
// The header stays still while the new page enters beneath it.
export default function PageTemplate({ children }: { children: React.ReactNode }) {
  return <div className="page-entry">{children}</div>;
}
