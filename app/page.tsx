
import Banner from '@/components/customwidgets/banner'
import ScrollProjects from '@/components/customwidgets/scrollprojects'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";

export default function Page() {

  return (
    <section>
      <div className="flex justify-center mb-16 bg-gray-900">
      </div>
      <Banner />
      <p className="mb-8 text-3xl text-gray-200">
        {`I'm Michael Bayouk, a computer maniac. I build my own projects.`}
      </p>
      <Link href="/contact">
        <button className="cursor-pointer group mb-40 flex items-center gap-2 text-xl text-purple-500 transition-all hover:gap-4">
          Connect with me
          <FaArrowRight className="transform group-hover:translate-x-2" />
        </button>
      </Link>
      <div className="mb-4 ">
        <ScrollProjects />
      </div>
    </section>
  )
}
