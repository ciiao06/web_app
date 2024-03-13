import Image from "next/image";
import Marquee from "react-fast-marquee";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


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

const faQuestions = [
  { question: "What's the best thing about Switzerland?", answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat." },
  { question: "How do you make holy water?", answer: "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut tempora vitae odio inventore fuga aliquam nostrum quod porro. Delectus quia facere id sequi expedita natus." },
  { question: "What do you call someone with no body and no nose?", answer: "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem." },
  { question: "Why do you never see elephants hiding in trees?", answer: "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat." },
  { question: "Why can't you hear a pterodactyl go to the bathroom?", answer: "Because the pee is silent. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, quas voluptatibus ex culpa ipsum, aspernatur blanditiis fugiat ullam magnam suscipit deserunt illum natus facilis atque vero consequatur! Quisquam, debitis error." },
  { question: "Why did the invisible man turn down the job offer?", answer: "He couldn't see himself doing it. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet perspiciatis officiis corrupti tenetur. Temporibus ut voluptatibus, perferendis sed unde rerum deserunt eius." },
]

const footerItems = [
  { label: "Solutions", sub: ["Hosting", "Data Services", "Uptime Monitoring", "Enterprise Services"] },
  { label: "Support", sub: ["Pricing", "Documentation", "Guides", "References"] },
  { label: "Company", sub: ["About", "Blog", "Jobs", "Press", "Partners"] },
  { label: "Legal", sub: ["Claim", "Privacy", "Terms"] },
]

export default function Home() {

  return (
    <main className="relative bg-cover bg-white min-h-screen md:min-h-screen z-0 max-w-7xl mx-auto">
      {/* Background */}
      <div className="absolute container bg-cover blur-2xl z-10 md:-top-[25rem] -top-[30rem]">
        <>
          <div className="overflow-hidden">
            <div
              className="relative md:left-[calc(50%-11rem)] left-[50%] aspect-[1155/678] w-[78.125rem] -translate-x-[75%] rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 "
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
              }}
            />
          </div>
        </>
      </div>

      <div className="absolute w-full z-20">
        {/* Navigation Bar */}
        <nav className="flex p-10 items-center justify-between md:gap-x-12 gap-x-7">
          <div className="relative ">
            <a className="" href="#">
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""></img>
            </a>
          </div>

          <div className="relative hidden md:flex gap-16 items-center font-semibold text-sm">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className='text-black hover:transition transform hover:-translate-y-1 after:transition duration-500 ease-0'
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>

          <Sheet>
            <SheetTrigger className="md:hidden block absolute right-12 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </SheetTrigger>
            <SheetContent className="md:w-[75%] w-full">
              <SheetHeader>
                <SheetTitle>
                  <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
                </SheetTitle>
                <SheetDescription>
                  <div className="text-left">
                    <div className="py-6 max-w-md text-left">
                      {navItems.map((item) => (
                        <a key={item.name} className='block mt-1 text-black text-base leading-8 font-semibold py-2 hover:transition transform hover:-translate-y-1 after:transition duration-500 ease-0 hover:bg-desc-50 hover:border border-none rounded-sm'>{item.name}</a>
                      ))}
                    </div>
                    <div className="border-t border-solid border-desc-100 py-6">
                      <p className=" text-black text-base leading-7 px-[0.625rem] py-3 font-semibold hover:bg-desc-50 hover:border hover:border-none hover:rounded-sm">Log In</p>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <div className="md:flex items-center hidden ">
            <a className="relative flex flex-wrap gap-2 items-center content-between font-semibold text-sm "> Log in
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3 hover:translate-x-2 ease-0 duration-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </nav>

        {/* Headers */}
        <div className="flex text-center items-center justify-center mt-24 ">
          <div className="flex flex-col text-wrap max-w-[42rem]">
            <h1 className="md:text-6xl text-4xl font-bold tracking-tight">Deploy to the cloud with confidence</h1>
            <p className="md:line-clamp-2 mt-7 text-desc-600 text-center text-lg font-light leading-8 ">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
          </div>
        </div>

        <div className="container flex justify-center items-center mt-10 font-semibold text-sm content-between gap-6">
          <button className="bg-violet-600 text-white p-3 rounded-lg hover:bg-violet-400">Get started</button>
          <div className="flex items-center gap-1">
            <button className="">Learn more</button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 hover:translate-x-2 ease-0 duration-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </div>

        </div>

        {/* Intro pic */}
        <div className="flex mt-[6rem] items-center justify-center pb-[8rem] px-8">
          <div className="flex rounded-2xl bg-[#1118270d] p-4">
            <img src="https://tailwindui.com/img/component-images/project-app-screenshot.png" className="w-full rounded-2xl shadow-2xl"></img>
          </div>
        </div>
        {/* Services */}
        <Marquee>
          <div className="flex justify-center items-center px-4 max-w-[80rem]">
            <div className="grid items-center grid-cols-4 md:grid-cols-5 gap-y-12 gap-x-24 md:max-w-none max-w-lg mx-auto">
              {objects.map((item) => (
                <img key={item.name} src={item.src} alt={item.name} className={item.name === 'Statamic' ? "col-start-2 col-end-4 md:col-span-1 object-contain" : "md:col-span-1 col-span-2 object-contain w-full h-auto max-h-12 md:max-w-xl align-middle gap-x-6"} />
              ))}
            </div>
          </div>
        </Marquee>
        

        <div className="flex bg-transparent justify-center mt-16 px-8 mx-auto">
          <p className="flex px-4 py-1.5 rounded-3xl text-sm border border-solid border-slate-200 gap-1 hover:border-slate-400">
            <span className="text-slate-600 hidden lg:flex">Transistor saves up to $40,000 per year, per employee by working with us. </span>
            <a className="flex items-center gap-1" href="#">
              <span className="text-violet-600 font-semibold"> Read our case study</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 text-violet-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </p>

        </div>

        {/* Deploy Advantages */}
        {/* Headings */}
        <div className="md:mt-56 mx-4 px-4 text-center mt-32">
          <div className="inline-block max-w-[42rem]">
            <p className="font-semibold leading-7 text-violet-600">Deploy faster</p>
            <h2 className="md:text-4xl text-3xl font-bold mt-2 tracking-tight">Everything you need to deploy your app</h2>
            <p className="text-wrap text-lg leading-8 mt-6 text-desc-600 font-light md:line-clamp-2">Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.</p>
          </div>

          {/* Advantages */}
          <div className="flex justify-center">
            <div className="mt-24 max-w-[56rem]">
              <div className="grid md:grid-cols-2 grid-rows-2 justify-center gap-x-8 md:gap-y-16 gap-y-8">
                <SvgItems />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="md:mt-56 mt-32 m-x-auto md:px-4 max-w-[80rem]">
          <div className="relative px-8 md:px-20 py-24 overflow-hidden md:rounded-3xl bg-[#111827] ">
            <img src="https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80"
              className="absolute object-cover h-full w-full brightness-150 saturate-0 inset-0">
            </img>
            <div className="absolute mix-blend-multiply bg-[#111827e6] inset-0"></div>

            <div className="absolute -top-[14rem] -left-[20rem] blur-3xl" aria-hidden="true">
              <div
                className="opacity-45 bg-gradient-to-r from-[#ff4694] to-[#776fff] w-[68.5625rem] aspect-[1097/845]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                }}
              />
            </div>
            <div className="absolute block md:left-[50rem] md:bottom-16 blur-3xl" aria-hidden="true">
              <div
                className="opacity-25 bg-gradient-to-r from-[#ff4694] to-[#776fff] w-[68.5625rem] aspect-[1097/845]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                }}
              />
            </div>
            <div className="relative mx-0 max-w-[42rem]">
              <img src="https://tailwindui.com/img/logos/workcation-logo-white.svg" className="max-w-full w-auto h-12"></img>
              <figure>
                <blockquote className="md:text-xl text-lg font-semibold text-white leading-8 mt-5">
                  <p>“Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam ultricies habitant malesuada lorem ac.”</p>
                </blockquote>
                <figcaption className="text-md leading-6 mt-6 text-white">
                  <p className="font-semibold">Judith Black</p>
                  <p className="mt-1">CEO of Tuple</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="md:px-24 md:pt-48 pb-24 py-24">
          {/* Headings */}
          <div className="mx-auto px-4 max-w-[80rem] text-center">
            <div className="inline-block max-w-[42rem]">
              <p className="font-semibold leading-7 text-violet-600">Pricing</p>
              <h2 className="text-4xl font-bold mt-2 tracking-tight">Pricing plans for teams of all sizes</h2>
              <p className="text-wrap text-lg leading-8 mt-6 text-desc-600 font-light first-letter:font-light md:line-clamp-2">Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.</p>
            </div>

            {/* Lists */}
            <div className="grid md:grid-cols-3 mt-20 mx-0 gap-y-8 max-w-none text-left justify-center">
              <div className="flex flex-col mt-8 p-8 md:p-10 rounded-3xl md:rounded-r-none border border-solid border-slate-200 justify-between">
                <div className="">
                  <p className="text-lg font-semibold leading-8">Freelancer</p>
                  <p className="text-sm leading-6 mt-4 text-desc-600 font-light">The essentials to provide your best work for clients.</p>
                  <p className="flex gap-x-1 mt-6 items-baseline">
                    <span className="tracking-tight font-bold text-4xl">$24</span>
                    <span className="text-sm font-semibold text-desc-600 leading-6">/month</span>
                  </p>
                  <ul className="mt-8">
                    <li className="flex flex-none gap-x-3 text-sm leading-6 text-desc-600 font-light">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-violet-600">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      5 products
                    </li>
                    <li className="flex flex-none gap-x-3 text-sm leading-6 text-desc-600 font-light">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-violet-600">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      Up to 1,000 subscribers
                    </li>
                    <li className="flex flex-none gap-x-3 text-sm leading-6 text-desc-600 font-light">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-violet-600">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      Basic analytics
                    </li>
                    <li className="flex flex-none gap-x-3 text-sm leading-6 text-desc-600 font-light">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-violet-600">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      48-hour support response time
                    </li>
                  </ul>
                </div>
                <button className="w-full px-3 py-2 rounded-md text-center font-semibold leading-6 border border-solid border-violet-200 text-violet-600 inset-0 mt-8 text-sm hover:border-violet-300">Buy plan</button>
              </div>
              <div className="flex flex-col p-10 rounded-3xl md:rounded-b-none border border-solid-[#e5e7eb] justify-between">
                <div className="">
                  <div className="flex items-center justify-between gap-x-4">
                    <p className="text-lg font-semibold leading-8 text-violet-600">Startup</p>
                    <p className="text-xs text-violet-600 rounded-2xl bg-violet-100 font-semibold px-[0.625rem] py-1 leading-5">Most popular</p>
                  </div>

                  <p className="text-sm leading-6 mt-4 text-desc-600 font-light">A plan that scales with your rapidly growing business.</p>
                  <p className="flex gap-x-1 mt-6 items-baseline">
                    <span className="tracking-tight font-bold text-4xl">$32</span>
                    <span className="text-sm font-semibold text-desc-600 leading-6">/month</span>
                  </p>
                  <ul className="mt-8">
                    <li className="flex flex-none gap-x-3 text-sm leading-6 text-desc-600 font-light">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-violet-600">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      25 products
                    </li>
                    <li className="flex flex-none gap-x-3 text-sm leading-6 text-desc-600 font-light">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-violet-600">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      Up to 10,000 subscribers
                    </li>
                    <li className="flex flex-none gap-x-3 text-sm leading-6 text-desc-600 font-light">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-violet-600">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      Advanced analytics
                    </li>
                    <li className="flex flex-none gap-x-3 text-sm leading-6 text-desc-600 font-light">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-violet-600">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      24-hour support response time
                    </li>
                    <li className="flex flex-none gap-x-3 text-sm leading-6 text-desc-600 font-light">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-violet-600">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      Marketing automations
                    </li>
                  </ul>
                </div>
                <button className="w-full px-3 py-2 rounded-md text-center font-semibold leading-6 bg-violet-600 inset-0 mt-8 text-sm text-white hover:bg-violet-500">Buy plan</button>
              </div>
              <div className="flex flex-col md:mt-8 p-8 md:p-10 rounded-3xl md:rounded-l-none border border-solid-[#e5e7eb] justify-between">
                <div className="">
                  <p className="text-lg font-semibold leading-8">Enterprise</p>
                  <p className="text-sm leading-6 mt-4 text-desc-600 font-light">Dedicated support and infrastructure for your company.</p>
                  <p className="flex gap-x-1 mt-6 items-baseline">
                    <span className="tracking-tight font-bold text-4xl">$48</span>
                    <span className="text-sm font-semibold text-desc-600 leading-6">/month</span>
                  </p>
                  <ul className="mt-8">
                    <li className="flex flex-none gap-x-3 text-sm leading-6 text-desc-600 font-light">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-violet-600">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      Unlimited products
                    </li>
                    <li className="flex flex-none gap-x-3 text-sm leading-6 text-desc-600 font-light">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-violet-600">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      Unlimited subscribers
                    </li>
                    <li className="flex flex-none gap-x-3 text-sm leading-6 text-desc-600 font-light">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-violet-600">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      Advanced analytics
                    </li>
                    <li className="flex flex-none gap-x-3 text-sm leading-6 text-desc-600 font-light">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-violet-600">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      1-hour, dedicated support response time
                    </li>
                    <li className="flex flex-none gap-x-3 text-sm leading-6 text-desc-600 font-light">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-violet-600">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      Marketing automations
                    </li>
                  </ul>
                </div>
                <button className="w-full px-3 py-2 rounded-md text-center font-semibold leading-6 border border-solid border-violet-200 text-violet-600 inset-0 mt-8 text-sm hover:border-violet-300">Buy plan</button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mx-auto max-w-[80rem] px-8 pt-12 pb-32">
          <p className="font-bold tracking-tight leading-10 text-2xl">Frequently asked questions</p>
          <div className="text-left mt-10 ">
            {faQuestions.map((ques) => (
              <div key={ques.question} className="grid md:grid-cols-5 md:grid-flow-col md:gap-20 pt-8 mb-8 font-light  border-t border-solid border-desc-100">
                <p className="font-semibold text-base leading-7 md:col-span-2">{ques.question}</p>
                <p className="text-desc-600 text-base leading-7 md:col-span-3 mt-4">{ques.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Heading-2*/}
        {/* Background */}
        <div className="flex md:mt-32 md:px-8 px-6 justify-center">
          <div className="overflow-hidden relative blur-2xl max-h-72">
            <div
              className="relative md:left-[calc(50%-11rem)] left-[50%] aspect-[1155/678] w-[50.125rem] md:w-[78.125rem] -translate-x-[65%] md:-translate-x-[50%] rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:-translate-y-40 md:-translate-y-[50%]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
              }}
            />
          </div>
          <div className="absolute flex flex-col text-wrap max-w-[42rem] mx-auto text-center">
            <h1 className="md:text-4xl text-3xl font-bold tracking-tight">Boost your productivity. <br />Start using our app today.</h1>
            <p className="md:line-clamp-2 text-gray-500 text-center text-lg font-light leading-8 max-w-[36rem] mx-auto mt-6">Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.</p>
            <div className="container flex justify-center items-center mt-10 font-semibold text-sm content-between gap-6">
              <button className="bg-violet-600 text-white p-3 rounded-lg hover:bg-violet-400">Get started</button>
              <div className="flex items-center gap-1">
                <button className="">Learn more</button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 hover:translate-x-2 ease-0 duration-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="md:px-10 px-6 mx-auto mt-32 max-w-[80rem] ">
          <footer className="relative py-32 md:mt-[14rem] border-t border-solid border-desc-100">
            <div className="md:grid md:grid-cols-3 ">
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""></img>
              <div className="grid md:col-span-2 pt-16 md:pt-0">
                <div className="md:inline-flex md:gap-28 grid grid-cols-2 grid-rows-2">
                  {footerItems.map((item) => (
                    <div key={item.label} className="text-left  ">
                      <p className="text-sm font-semibold">{item.label}</p>
                      <ul className="mt-6">
                        {item.sub.map((sub) => (
                          <li key={sub} className="text-desc-600 text-sm py-3 font-light">
                            <a href="#">{sub}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </footer>
        </div>

      </div>

    </main>
  );
}

const itemDetails = [
  {
    label: "Push to deploy",
    desc: "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: () =>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
      </svg>
  },

  {
    label: "SSL certificates",
    desc: "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: () =>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
  },

  {
    label: "Simple queues",
    desc: "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: () =>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
  },

  {
    label: "Advanced security",
    desc: "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: () =>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
      </svg>
  },
]

// const pricingDetails = [
//   {
//     status: "Freelancer",
//     desc: "The essentials to provide your best work for clients.",
//     price: "24",
//     properties: ["5 products", "Up tp 1,000 subscribers", "Basic analytics", "48-hour support response time"]
//   },
//   {
//     status: "Startup",
//     desc: "A plan that scales with your rapidly growing business.",
//     price: "32",
//     properties: ["25 products", "Up tp 10,000 subscribers", "Advanced analytics", "24-hour support response time", "Marketing automations"]
//   },
//   {
//     status: "Enterprise",
//     desc: "Dedicated support and infrastructure for your company.",
//     price: "48",
//     properties: ["Unlimited products", "Unlimited subscribers", "Advanced analytics", "1-hour, dedicated support response time", "Marketing automations"]
//   }
// ]

// export function priceGrid() {
//   return (
//     pricingDetails.map((items) => (
//       <div key={items.status} className="flex flex-col md:mt-8 p-10 rounded-3xl border border-solid border-slate-200 justify-between">
//         <div className="">
//           <p className="text-lg font-semibold leading-8">{items.status}</p>
//           <p className="text-sm leading-6 mt-4 text-desc-600 font-light">{items.desc}</p>
//           <p className="flex gap-x-1 mt-6 items-baseline">
//             <span className="tracking-tight font-bold text-4xl">${items.price}</span>
//             <span className="text-sm font-semibold text-desc-600 leading-6">/month</span>
//           </p>
//           <ul className="mt-8">
//             {items.properties.map(list => (
//               <li className="flex flex-none gap-x-3 text-sm leading-6 ">
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-violet-600">
//                   <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
//                 </svg>
//                 {list}
//               </li>
//             ))}
//           </ul>
//           <button className="w-full px-3 py-2 rounded-md text-center font-semibold leading-6 border border-solid border-violet-300 text-violet-600 inset-0 mt-8 text-sm">Buy plan</button>
//         </div>
//       </div>
//     ))
//   )
// }

function SvgItems() {
  return (
    itemDetails.map(({ icon: Icon, ...items }:any) => {
      return (
        <div className="flex" key={items.label} >
          <div className="inline-flex bg-violet-600 rounded-lg float-left w-10 h-10 items-center justify-center">
            <Icon />
          </div>
          <div className="float-right text-left pl-6 w-[90%]">
            <p className="text-base font-semibold leading-7">{items.label}</p>
            <p className="text-base text-desc-600 leading-7 mt-2 font-light">{items.desc}</p>
          </div>

        </div>
      )
    })
  )
}
