export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-24 py-12">
      <div className="bg-primary p-8 border-2 text-center mb-4">
        <h1 className="text-2xl font-bold">Widget Test</h1>
        <h3>and some animation, of course</h3>
      </div>
      <div className="bg-secondary p-8 border-2 mb-4">
        <h1 className="text-xl font-bold">please!</h1>
        <h3 className="text-base">check it out</h3>
      </div>
      <div>
        <h1 className="font-bold">👀 look, it's floating waiting for you</h1>
      </div>
    </main>
  );
}
