export default function Widget({ children }) {
  return (
    <>
      {children}
      <button
        type="button"
        className="fixed bottom-4 right-4 bg-accent border-2 p-4 font-bold"
      >
        widget
      </button>
    </>
  );
}
