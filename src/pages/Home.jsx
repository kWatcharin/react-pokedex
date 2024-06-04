export default function Home() {
  return (
    <>
      <section className="py-4">
        <div className="container-xl lg:container bg-red-500 m-auto">
          <div className="w-auto grid">
            <div className="h-10 bg-cyan-100 justify-self-start">
              item 1
            </div>
            <div className="h-10 bg-gray-100">
              item 2
            </div>
            <div className="h-10 bg-red-300 justify-self-center">
              item 3
            </div>
            <div className="h-10 bg-rose-100">
              item 4
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
