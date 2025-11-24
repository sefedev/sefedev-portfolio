import { GithubIcon, MailIcon, PhoneIcon, TwitterIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-8 bg-slate-800 flex flex-col md:flex-row gap-8 justify-center p-6'>
      <p className='text-center'>&copy; {new Date().getFullYear()} Sefe Studio. All Rights Reserved</p>

      <ul className=" flex items-center justify-center gap-4 min-w-[10rem]">
        <li className="hover:text-teal-500 hover:scale-125 duration-200 ease-in-out">
          <Link href="mailto:iomosefe2016@gmail.com" target="_blank">
            <MailIcon size={20}/>
          </Link>
        </li>

        <li className="hover:text-teal-500 hover:scale-125 duration-200 ease-in-out">
          <Link href="https://www.github.com/sefedev" target="_blank">
            <GithubIcon size={20}/>
          </Link>
        </li>

        <li className="hover:text-teal-500 hover:scale-125 duration-200 ease-in-out">
          <Link href="https://wa.me/+2348076478054" target="_blank">
            <PhoneIcon size={20}/>
          </Link>
        </li>

        <li className="hover:text-teal-500 hover:scale-125 duration-200 ease-in-out">
          <Link href="https://x.com/sephiano1" target="_blank">
            <TwitterIcon size={20}/>
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
