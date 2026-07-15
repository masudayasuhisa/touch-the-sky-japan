"use client";

import { useState, useEffect } from 'react'

export default function ContactTab({ isDetailPage = false }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY
      
      if (isDetailPage) {
        // Show after scrolling down a bit on detail page
        setVisible(scrollPos > 200)
      } else {
        // Main page: show after 400px and hide when inside the inquiry section
        const inquirySection = document.getElementById('inquiry')
        let isInsideInquiry = false

        if (inquirySection) {
          const rect = inquirySection.getBoundingClientRect()
          isInsideInquiry = rect.top < window.innerHeight - 100
        }

        setVisible(scrollPos > 400 && !isInsideInquiry)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDetailPage])

  const targetUrl = 'https://wa.me/819022171597'

  return (
    <a 
      href={targetUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`contact-tab ${visible ? 'visible' : ''}`}
    >
      INQUIRY
    </a>
  )
}
