'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    Tawk_API: any;
    Tawk_LoadStart: Date;
  }
}

export default function TawkToChat() {
  useEffect(() => {
    // Initialize Tawk_API
    window.Tawk_API = window.Tawk_API || {}
    window.Tawk_LoadStart = new Date()

    // Create and inject the script
    const s1 = document.createElement('script')
    const s0 = document.getElementsByTagName('script')[0]
    
    s1.async = true
    s1.src = 'https://embed.tawk.to/678cd1bd825083258e0773e8/1ihv16jgv'
    s1.charset = 'UTF-8'
    s1.setAttribute('crossorigin', '*')
    
    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0)
    } else {
      document.head.appendChild(s1)
    }

    // Cleanup function
    return () => {
      // Remove the script when component unmounts
      s1.remove()
    }
  }, [])

  // The chat widget will be injected into the page automatically
  return null
}

