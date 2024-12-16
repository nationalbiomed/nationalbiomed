'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { User, Menu, X, ChevronDown } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const MENU_ITEMS = [
  {
    title: 'Products & Solutions',
    megaMenu: [
      { title: 'Product A', href: '/products/a' },
      { title: 'Product B', href: '/products/b' },
      { title: 'Solutions', href: '/solutions' },
    ]
  },
  {
    title: 'Innovations',
    megaMenu: [
      { title: 'Research', href: '/innovations/research' },
      { title: 'Development', href: '/innovations/development' },
    ]
  },
  { title: 'Services', href: '/services' },
  { title: 'ESG', href: '/esg' },
  { title: 'Career', href: '/career' },
  { title: 'About Us', href: '/about' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '-100px 0px 0px 0px',
  })

  useEffect(() => {
    setIsSticky(!inView)
  }, [inView])

  return (
    <>
      <div ref={ref} className="h-1 absolute top-0 left-0 right-0" />
      <header 
        className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isSticky ? '' : 'bg-transparent'
        }`}
      >
        <TopNav isSticky={isSticky} />
        <NavBar 
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          isSticky={isSticky}
        />
      </header>
    </>
  )
}

function TopNav({ isSticky }) {
  return (
    <div className={`w-full border-b  hidden sm:block transition-all duration-300 ${
      isSticky ? 'border-gray-200' : 'border-transparent'
    }`}>
      <div className="container max-w-7xl mx-auto flex justify-end">
        <div className="text-xs px-3 py-3">
          <ul className="flex space-x-3">
            <li className="border-r border-gray-300 pr-3">
              <Link href="/media" className={`hover:text-primary transition-colors ${
                isSticky ? 'text-white' : 'text-white'
              }`}>Media Center</Link>
            </li>
            <li className="border-r border-gray-300 pr-3">
              <Link href="/investors" className={`hover:text-primary transition-colors ${
                isSticky ? 'text-white' : 'text-white'
              }`}>Investor Relations</Link>
            </li>
            <li>
              <Link href="/contact" className={`hover:text-primary transition-colors ${
                isSticky ? 'text-white' : 'text-white'
              }`}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function NavBar({ mobileMenuOpen, setMobileMenuOpen, isSticky }) {
  const [activeDropdown, setActiveDropdown] = useState(null)

  const toggleDropdown = (title) => {
    setActiveDropdown(activeDropdown === title ? null : title)
  }

  return (
    <nav className="w-full">
      <div className="container max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <div className="w-16 h-16">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={64} height={64} className="w-full h-auto object-contain" />
          </Link>
        </div>
        
        <div className="hidden md:block ">
          <ul className="flex space-x-6 text-sm">
            {MENU_ITEMS.map((item) => (
              <li key={item.title} className="relative group">
                {item.megaMenu ? (
                  <>
                    <button className={`flex items-center hover:text-primary transition-colors py-2 ${
                      isSticky ? 'text-white' : 'text-white'
                    }`}>
                      {item.title}
                      <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${activeDropdown === item.title ? 'rotate-180' : ''}`} />
                    </button>
                    {/* Mega Menu */}
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                      {item.megaMenu.map((subItem) => (
                        <Link 
                          key={subItem.title} 
                          href={subItem.href} 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link href={item.href} className={`hover:text-primary transition-colors py-2 block ${
                    isSticky ? 'text-white' : 'text-white'
                  }`}>
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link href="/account" className={`hover:text-primary transition-colors ${
            isSticky ? 'text-white' : 'text-white'
          }`}>
            <User className="w-6 h-6" />
          </Link>
          <button 
            className={`md:hidden hover:text-primary transition-colors ${
              isSticky ? 'text-gray-800' : 'text-white'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'} overflow-hidden`}>
        <ul className="flex flex-col space-y-2 px-4 py-2 bg-gray-50">
          {MENU_ITEMS.map((item) => (
            <li key={item.title}>
              {item.megaMenu ? (
                <div>
                  <button 
                    className="flex items-center justify-between w-full py-2 hover:text-primary transition-colors"
                    onClick={() => toggleDropdown(item.title)}
                    aria-expanded={activeDropdown === item.title}
                  >
                    {item.title}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.title ? 'rotate-180' : ''}`} />
                  </button>
                  <ul className={`pl-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${activeDropdown === item.title ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    {item.megaMenu.map((subItem) => (
                      <li key={subItem.title}>
                        <Link 
                          href={subItem.href} 
                          className="block py-1 hover:text-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link 
                  href={item.href} 
                  className="block py-2 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

