export default function Home() {
  return (
    <main>
      <div className="items-center md:items-start text-center md:text-left pt-40 xl:pt-0 min-h-screen w-5/6 max-w-5xl flex flex-col justify-center gap-6 md:gap-12 mx-auto p-6">
        <h1 className="text-2xl md:text-6xl font-bold dark:text-gray-300 text-gray-500">
          Hi! My name is Jonah Wagner.
        </h1>
        <h2 className="text-2xl md:text-6xl font-bold dark:text-gray-400 text-gray-700">
          I{"'"}m a Software Engineer based out of Sacramento, CA.
        </h2>
        <p className="text-lg md:text-xl font-light max-w-2xl">
          I utilize a wide range of tools to build unique and accessible digital
          experiences with a focus on frontend development. I have experience
          building fullstack and backend solutions with a variety of tech stacks
          as well.
        </p>
        <button className="border-2 border-gray-400 border-dashed rounded p-3 max-w-fit hover:bg-gray-400">
          Check out my resume!
        </button>
      </div>
    </main>
  );
}
