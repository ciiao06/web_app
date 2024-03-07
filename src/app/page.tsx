import Image from "next/image";


const navItems = [
  { name: "Product", href: "#", current: "true" },
  { name: "Feature", href: "#", current: "false" },
  { name: "Marketplace", href: "#", current: "false" },
  { name: "Company", href: "#", current: "false" },
]

const objects = [
  { name: "Transistor", src: "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg" },
  { name: "Reform", src: "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg" },
  { name: "Tuple", src: "https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg" },
  { name: "Savvycal", src: "https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg" },
  { name: "Statamic", src: "https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg" }
]

// function classNames(classes) {
//   return classes.filter(Boolean).join(' ')
// }

export default function Home() {
  return (
    <header className="relative bg-cover bg-white md:min-h-screen z-0 max-w-screen-xl mx-auto">
      <div className="absolute container bg-cover blur-2xl z-10 -top-[55rem]">
        <>
          <div className="">
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[150.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
              }}
            />
          </div>
        </>

      </div>
      <div className="absolute w-full z-20">
        <nav className="flex p-10 ">
          <div className="mr-80">
            <a className="md:fr" href="#">
              <img className="h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""></img>
            </a>
          </div>

          <div className="relative flex gap-16 items-center ml-80 mr-80 ps-80 pe-80 text-base">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className='text-black hover:transition transform hover:-translate-y-1 after:transition duration-500 ease-0'
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center">
            <a className="flex flex-wrap gap-2 text-base items-center content-between ml-60"> Log in
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 hover:translate-x-2 ease-0 duration-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </nav>

        <div className="flex text-center items-center justify-center mt-24 ">
          <div className="flex flex-col text-wrap max-w-[42rem]">
            <h1 className="text-6xl font-bold tracking-tight">Deploy to the cloud with confidence</h1>
            <p className="md:line-clamp-2 mt-7 text-gray-500 md:text-center text-lg font-light leading-8">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
          </div>
        </div>

        <div className="container flex justify-center items-center mt-10 font-semibold text-sm content-between gap-6">
          <button className="bg-default text-white p-3 rounded-lg hover:bg-[#4f46e5ba]">Get started</button>
          <div className="flex items-center gap-1">
            <button className="">Learn more</button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 hover:translate-x-2 ease-0 duration-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </div>

        </div>

        <div className="md:flex mt-[6rem] items-center justify-center pb-[8rem] md:px-8">
          <div className="md:flex rounded-2xl bg-[#1118270d] p-4">
            <img src="https://tailwindui.com/img/component-images/project-app-screenshot.png" className="w-full rounded-2xl shadow-2xl"></img>
          </div>
        </div>

        <div className="md:flex justify-center items-center mx-4 px-4 pb-[8rem]">
          <div className="inline-grid grid-cols-5 items-center justify-center gap-x-10">
            {objects.map((item) => (
              <img key={item.name} src={item.src} alt={item.name} className="flex object-contain w-full" />
            ))}
          </div>
        </div>

        <div className="md:flex bg-transparent justify-center">
          <p className="md:flex md:px-4 md:py-1.5 rounded-3xl text-sm border border-solid border-slate-200 gap-1">
            <span className="text-slate-600">Transistor saves up to $40,000 per year, per employee by working with us. </span>
            <a className="flex items-center gap-1" href="#">
              <span className="text-default font-semibold"> Read our case study</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 text-default">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </p>

        </div>

        <section className="mt-[14rem] mx-4 px-4 text-center">
          <div className="md:inline-block max-w-[42rem]">
            <p className="text-default font-semibold leading-7">Deploy faster</p>
            <h2 className="text-4xl font-bold mt-2 tracking-tight">Everything you need to deploy your app</h2>
            <p className="text-wrap text-lg leading-8 mt-6 text-slate-500 font-light md:line-clamp-2">Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.</p>
          </div>

          <div className="md:mt-24 md:max-w-[56rem]">
            <div className="md:grid grid-cols-2 grid-rows-2 justify-center "></div>
          </div>
        </section>


      </div>




    </header>
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
    //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    //       Get started by editing&nbsp;
    //       <code className="font-mono font-bold">src/app/page.tsx</code>
    //     </p>
    //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
    //       <a
    //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{" "}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className="dark:invert"
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
    //     <Image
    //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Docs{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Learn{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Learn about Next.js in an interactive course with&nbsp;quizzes!
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Templates{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Explore starter templates for Next.js.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Deploy{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
  );
}
