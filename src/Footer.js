
import React from 'react'

export const Footer = () => {
  return (
    <div>
         <section>
            <hr/>
            <div className="flex flex-col pt-4 items-center space-y-4 md:justify-between
             text-lg bg-darkbg text-white md:flex-row md:py-6 px-16 ">

                <p>2025 &copy; All Right Reserved</p>
                <p>Build with passion 💡 by <a className="underline"
                 href="https://github.com/DefcValentino">Valentino</a></p>
                <a className="underline" href="https://wa.me/2348168617798">Have a Chat with me</a>
            </div>
        </section>
    </div>
  )
}
