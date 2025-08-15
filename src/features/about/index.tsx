export default function About() {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      {[...Array(50)].map((_, i) => (
        <p key={i}>This is line {i + 1}</p>
      ))}
    </div>
  );
}
