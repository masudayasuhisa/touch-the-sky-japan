"use client";

import { useEffect, useState } from 'react'
import { sendInquiryEmail } from '../../actions'

// Custom High-Fidelity SVG Partner Logos (Same as 01 for brand alignment)
const LotteAraiLogo = () => (
  <svg className="svg-logo" viewBox="0 0 220 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 42 L35 20 L45 32 L60 10 L75 42 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M35 42 L45 34 L52 42 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="currentColor" opacity="0.3" />
    <text x="88" y="28" fontFamily="var(--font-serif)" fontSize="14" letterSpacing="0.1em" fill="currentColor" fontWeight="600">LOTTE ARAI</text>
    <text x="88" y="42" fontFamily="var(--font-sans)" fontSize="9" letterSpacing="0.25em" fill="currentColor">RESORT</text>
  </svg>
);

const NiigataPrefectureLogo = () => (
  <svg className="svg-logo" viewBox="0 0 220 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="35" cy="30" r="16" stroke="currentColor" strokeWidth="2" />
    <circle cx="35" cy="30" r="10" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
    <path d="M35 14 L35 46 M19 30 L51 30" stroke="currentColor" strokeWidth="1.5" />
    <path d="M24 19 L46 41 M24 41 L46 19" stroke="currentColor" strokeWidth="1" />
    <text x="68" y="28" fontFamily="var(--font-serif)" fontSize="13" letterSpacing="0.08em" fill="currentColor" fontWeight="600">NIIGATA PREF.</text>
    <text x="68" y="42" fontFamily="var(--font-sans)" fontSize="9" letterSpacing="0.1em" fill="currentColor">新潟県公式パートナー</text>
  </svg>
);

const MyokoCityLogo = () => (
  <svg className="svg-logo" viewBox="0 0 220 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="35" cy="30" r="16" stroke="currentColor" strokeWidth="2" />
    <path d="M35 16 L23 38 H47 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M35 22 L28 34 H42 Z" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.3" />
    <text x="68" y="28" fontFamily="var(--font-serif)" fontSize="13" letterSpacing="0.08em" fill="currentColor" fontWeight="600">MYOKO CITY</text>
    <text x="68" y="42" fontFamily="var(--font-sans)" fontSize="9" letterSpacing="0.1em" fill="currentColor">妙高市公式パートナー</text>
  </svg>
);

const TourismAssociationLogo = () => (
  <svg className="svg-logo" viewBox="0 0 220 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M35 14 L35 46 M19 30 L51 30 M24 19 L46 41 M24 41 L46 19" stroke="currentColor" strokeWidth="2" />
    <circle cx="35" cy="30" r="6" stroke="currentColor" strokeWidth="1.5" fill="var(--color-bg-light)" />
    <path d="M35 18 L33 22 H37 Z M35 42 L33 38 H37 Z M43 30 L39 28 V32 Z M27 30 L31 28 V32 Z" fill="currentColor" />
    <text x="68" y="28" fontFamily="var(--font-serif)" fontSize="12" letterSpacing="0.05em" fill="currentColor" fontWeight="600">MYOKO TOURISM</text>
    <text x="68" y="42" fontFamily="var(--font-sans)" fontSize="9" letterSpacing="0.05em" fill="currentColor">地元観光協会加盟</text>
  </svg>
);

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="slideshow">
      <div className="slideshow-images">
        {images.map((src, index) => (
          <img 
            key={index} 
            src={src} 
            alt={`Slide ${index + 1}`} 
            className={index === currentIndex ? 'active' : ''}
          />
        ))}
      </div>
      <div className="slideshow-dots">
        {images.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default function TrailRunningApp() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isInquiryVisible, setIsInquiryVisible] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('message', formData.message);
      
      await sendInquiryEmail(data);

      const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '819012345678';
      const text = `Hello Touch The Sky Japan! I am inquiring about the Trail Running Program (Collection #02).

Name: ${formData.name}
Email: ${formData.email}
Message:
${formData.message}`;

      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/${waNumber}?text=${encodedText}`;
      
      window.open(whatsappUrl, '_blank');
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      console.error("Error submitting form", error);
      alert("An error occurred. Please try again or contact us directly on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const programImages = [
    "/images/program_trail_camp.png",
    "/images/concept_trail_running.png",
    "/images/hero_trail_running.png"
  ];

  const myokoImages = [
    "/images/myoko_intro_pond.png",
    "/images/myoko_intro_falls.png",
    "/images/myoko_intro_onsen.png",
    "/images/myoko_intro_dining.png"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('has-animated');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-up').forEach((el) => {
      observer.observe(el);
    });

    const inquiryObserver = new IntersectionObserver((entries) => {
      if (entries[0]) {
        setIsInquiryVisible(entries[0].isIntersecting);
      }
    }, { threshold: 0.1 });

    const inquiryEl = document.getElementById('inquiry');
    if (inquiryEl) {
      inquiryObserver.observe(inquiryEl);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect();
      inquiryObserver.disconnect();
    }
  }, []);

  return (
    <>
      <nav className={isScrolled ? 'scrolled' : ''}>
        <div className="logo animate-up" style={{transitionDelay: '0.1s'}}>Touch the Sky JAPAN</div>
        <a href="#inquiry" className="btn-inquiry animate-up" style={{transitionDelay: '0.2s'}}>Inquire Now</a>
      </nav>

      <header className="hero" style={{ backgroundImage: "url('/images/hero_trail_running.png')" }}>
        <div className="hero-content">
          <p className="collection animate-up" style={{transitionDelay: '0.3s'}}>Myoko Collection #02</p>
          <h1 className="animate-up" style={{transitionDelay: '0.5s'}}>MYOKO Trail &<br className="mobile-break"/> Culture Adventure<span>Golden Trail National Series Special</span></h1>
          <div className="hero-schedule-badge animate-up" style={{transitionDelay: '0.6s'}}>
            <span>Sept 16–22, 2026</span>
          </div>
          <p className="subcopy animate-up" style={{transitionDelay: '0.7s'}}>Run the Wild Volcanic Ridges, Restore in Historic Onsen</p>
        </div>
      </header>

      <section className="concept">
        <div className="concept-text">
          <h2 className="animate-up"><span>The Concept</span>Joy of Running.<br/>A Journey of Connection.</h2>
          <p className="animate-up" style={{transitionDelay: '0.1s'}}>In partnership with X-Trekkers, we present a premium trail running and cultural experience. Designed specifically for entry-to-intermediate runners, this program is not about competing for splits—it is about connecting with nature and community.</p>
          <p className="animate-up" style={{transitionDelay: '0.2s'}}>Step outside the tropics and onto the rugged, volcanic topography of Myoko. Under the guidance of local coaches, you will build endurance, explore breathtaking ridge lines, and immerse yourself in the rich culinary and spiritual traditions of Japan's alpine heritage.</p>
        </div>
        <div className="concept-image animate-up" style={{transitionDelay: '0.3s'}}>
          <img src="/images/concept_trail_running.png" alt="Adult trail runners experiencing the lush forests of Myoko" />
        </div>
      </section>

      <section className="program">
        <div className="program-container">
          <h2 className="animate-up">Itinerary Framework</h2>
          <div className="program-flex">
            <div className="program-image animate-up" style={{transitionDelay: '0.2s'}}>
              <Slideshow images={programImages} />
            </div>
            <div className="timeline">
              <div className="timeline-item animate-up" style={{transitionDelay: '0.3s'}}>
                <h3>Day 1 (Sept 16): Arrival & Welcome</h3>
                <h4>Adapting to the Alpine Air</h4>
                <p>Arrive in Myoko via the Shinkansen. Transfer to the luxury Lotte Arai Resort. We gather for an evening orientation, gear-check, and a welcome dinner featuring seasonal local delicacies.</p>
              </div>
              <div className="timeline-item animate-up" style={{transitionDelay: '0.4s'}}>
                <h3>Day 2–3 (Sept 17–18): Training Camp</h3>
                <h4>Course Familiarization & Coaching</h4>
                <p>Enjoy morning technique runs on sections of the GTWS (Golden Trail World Series) course with our local English-speaking coach. Afternoons are dedicated to recovery in open-air hot springs, local Soba buckwheat noodle-making, and discovering Niigata's historic culture.</p>
              </div>
              <div className="timeline-item animate-up" style={{transitionDelay: '0.5s'}}>
                <h3>Day 4–5 (Sept 19–20): Race Days (GTWS)</h3>
                <h4>Testing Your Limits</h4>
                <p>Participate in your chosen race category (beginner-friendly category on Day 4, intermediate on Day 5). Experience the vibrant, festival-like atmosphere of the event, complete with international outdoor gear expos, local food trucks, and cross-cultural camaraderie.</p>
              </div>
              <div className="timeline-item animate-up" style={{transitionDelay: '0.6s'}}>
                <h3>Day 6–7 (Sept 21–22): Restoration & Departure</h3>
                <h4>Carrying the Ridge Within</h4>
                <p>Day 6 is a peaceful restoration day. Take a recovery walk to Naena Falls or relax at the spa. On Day 7, checkout and take the resort shuttle to Joetsu-Myoko Station for your departure, carrying new friendships and mountain resilience back home.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="venue">
        <div className="venue-text">
          <h2 className="animate-up" style={{transitionDelay: '0.1s'}}><span>The Venue</span>Lotte Arai Resort</h2>
          <p className="animate-up" style={{transitionDelay: '0.2s'}}>Set at the base of Mt. Okenashi, Lotte Arai Resort transitions from a legendary winter powder sanctuary to a vibrant, lush summer and autumn mountain paradise. It stands as Asia's premier luxury mountain basecamp, offering top-tier hospitality and premium rest for your adventure.</p>
          <p className="animate-up" style={{transitionDelay: '0.3s'}}>From direct access to pristine forest trails to exquisite regional dining and soothing natural hot springs (onsen), the resort ensures a perfectly balanced, stress-free basecamp for your high-altitude endurance training and recovery.</p>
        </div>
        <div className="venue-gallery animate-up">
          <div className="gallery-main">
            <img src="/images/lotte_arai_interior.png" alt="Lotte Arai Resort Luxury Guest Room" />
            <div className="gallery-label">Luxury Guest Room</div>
          </div>
          <div className="gallery-sub">
            <div className="gallery-item">
              <img src="/images/lotte_arai_exterior.png" alt="Lotte Arai Resort Summer Exterior" />
              <div className="gallery-label">Resort Exterior</div>
            </div>
            <div className="gallery-item">
              <img src="/images/lotte_arai_lobby.png" alt="Lotte Arai Resort Grand Lobby" />
              <div className="gallery-label">Grand Lobby</div>
            </div>
          </div>
        </div>
      </section>

      <section className="video-section">
        <div className="video-container animate-up">
          <h2><span>Experience the Mountain</span>Official Resort Film</h2>
          <div className="youtube-wrapper">
            <iframe
              src="https://www.youtube.com/embed/6jAElpWf7ZM"
              title="Lotte Arai Resort Official Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="myoko-intro">
        <div className="myoko-image animate-up">
          <Slideshow images={myokoImages} />
        </div>
        <div className="myoko-text">
          <h2 className="animate-up" style={{transitionDelay: '0.1s'}}><span>The Stage</span>Discover Myoko City</h2>
          <p className="animate-up" style={{transitionDelay: '0.2s'}}>Myoko is an authentic, historic mountain sanctuary located within a majestic National Park in Niigata. Known for its towering volcanic peaks, it boasts mineral-rich natural hot springs (onsens) that offer deep physical and mental restoration after a challenging trail run.</p>
          <p className="animate-up" style={{transitionDelay: '0.3s'}}>Surrounded by ancient forests and pristine rivers, Myoko provides an inspiring, natural stage for personal growth and endurance training. It is the perfect, tranquil environment for runners looking to experience Japan's legendary countryside.</p>
        </div>
      </section>

      <section className="activities">
        <div className="activities-header">
          <h2 className="animate-up">Exclusive Culture & Recovery</h2>
          <p className="animate-up" style={{transitionDelay: '0.1s'}}>Balance your trail training with authentic alpine experiences.</p>
        </div>
        <div className="activities-grid">
          <div className="activity-card animate-up" style={{transitionDelay: '0.2s'}}>
            <div className="activity-badge">Endurance & Education</div>
            <h3>Local Trail Coaching</h3>
            <p className="activity-sub">Learn to navigate steep technical trails with confidence.</p>
            <ul className="activity-list">
              <li>
                <strong>Bi-lingual Mountain Guide:</strong> Gentle instruction in English covering uphill pacing, downhill balance, and breathing tactics.
              </li>
              <li>
                <strong>Diverse Mountain Trails:</strong> Run the scenic paths of <strong>Sasagamine Plateau</strong>, the calming woods of <strong>Okazawa Forest</strong>, or the historic ridges of <strong>Mt. Myoko</strong> (exact routes are custom-tailored daily based on weather and trail conditions).
              </li>
              <li>
                <strong>GTWS Course Strategy:</strong> Group orientation and course maps to prepare you for the unique elevation profile of the GTWS race.
              </li>
            </ul>
          </div>
          <div className="activity-card animate-up" style={{transitionDelay: '0.3s'}}>
            <div className="activity-badge">Gastronomy & Culture</div>
            <h3>Local Craft & Recovery</h3>
            <p className="activity-sub">Recharge your body and mind through authentic Japanese culture.</p>
            <ul className="activity-list">
              <li>
                <strong>Soba Buckwheat Noodle Craft:</strong> A private workshop with a local chef to knead and cut your own recovery noodles.
              </li>
              <li>
                <strong>Coffee Roasting & Blending:</strong> Learn the craft of roasting green beans and blending your own custom coffee for your outdoor adventures.
              </li>
              <li>
                <strong>Traditional Sweet Making:</strong> Hands-on experience making <strong>Sasa-dango</strong> (traditional mugwort rice cakes filled with sweet red bean paste and wrapped in bamboo grass).
              </li>
              <li>
                <strong>Hot Spring Recovery:</strong> Learn the custom of Japanese open-air onsen bathing to naturally soothe muscles and joints.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="partners">
        <div className="partners-header">
          <h2 className="animate-up">In Partnership With</h2>
        </div>
        <div className="partners-grid animate-up" style={{transitionDelay: '0.1s'}}>
          <div className="partner-logo">
            <LotteAraiLogo />
          </div>
          <div className="partner-logo">
            <NiigataPrefectureLogo />
          </div>
          <div className="partner-logo">
            <MyokoCityLogo />
          </div>
          <div className="partner-logo">
            <TourismAssociationLogo />
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="pricing-header">
          <h2 className="animate-up">Exclusive Package Details</h2>
          <p className="animate-up" style={{transitionDelay: '0.1s'}}>A fully supported alpine endurance journey for X-Trekkers community members.</p>
        </div>
        <div className="pricing-content">
          <div className="pricing-card animate-up" style={{transitionDelay: '0.2s'}}>
            <div className="package-schedule">
              <span className="schedule-badge">Special Edition</span>
              <h3>Sept 16–22, 2026</h3>
            </div>
            <p className="price-desc">Package Inclusions</p>
            <ul className="pricing-includes">
              <li>2-Day Guided Training Camp with English-speaking local coach</li>
              <li>6 Nights Premium Accommodations at Lotte Arai Resort</li>
              <li>Local English-speaking coordinator support during stay</li>
              <li>Guided cultural activities (Soba making, onsen workshop)</li>
              <li>Official training materials and course maps</li>
            </ul>
            <p className="pricing-note" style={{ marginTop: '1.5rem', fontWeight: 'bold' }}>* Exclusions:</p>
            <ul className="pricing-includes" style={{ opacity: 0.85 }}>
              <li>Flights and transportation to/from Joetsu-Myoko Station</li>
              <li>Daily meals and personal sightseeing expenses</li>
              <li>GTWS Race registration fees and transfers to the start line</li>
            </ul>
            <p className="pricing-note" style={{ color: 'var(--color-accent)', fontWeight: '500', marginTop: '1rem' }}>
              ⚠️ Important Note: GTWS race registration capacity is limited. Early booking is highly recommended. Registration closes August 3, 2026 (or when capacity is reached).
            </p>
          </div>
        </div>
      </section>

      <section className="access">
        <div className="access-container">
          <div className="access-map animate-up">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3202.999999999999!2d138.204683!3d37.038166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff672a95c9fb333%3A0xe54d989f55e5a7ef!2sLotte%20Arai%20Resort!5e0!3m2!1sen!2sjp!4v1700000000000!5m2!1sen!2sjp"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '4px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lotte Arai Resort Google Map"
            ></iframe>
          </div>
          <div className="access-info animate-up">
            <h2><span>Location & Access</span>Getting to Lotte Arai Resort</h2>
            <p className="access-intro">Located in Niigata Prefecture, Lotte Arai Resort is highly accessible from Tokyo's international hubs via the Hokuriku Shinkansen (Bullet Train).</p>
            
            <div className="route-option">
              <h3>From Haneda Airport (HND)</h3>
              <ul className="route-steps">
                <li>
                  <span className="step-badge">Step 1</span>
                  <div>
                    <strong>Tokyo Monorail or Keikyu Line</strong>
                    <p>Travel to Hamamatsucho or Shinagawa Station, then transfer to Tokyo Station (approx. 30 mins).</p>
                  </div>
                </li>
                <li>
                  <span className="step-badge">Step 2</span>
                  <div>
                    <strong>Hokuriku Shinkansen (Bullet Train)</strong>
                    <p>Take the bullet train from Tokyo Station to Joetsumyoko Station (approx. 1h 50m).</p>
                  </div>
                </li>
                <li>
                  <span className="step-badge">Step 3</span>
                  <div>
                    <strong>Resort Shuttle Bus or Taxi</strong>
                    <p>Enjoy our complimentary resort shuttle or private taxi straight to the resort (approx. 30 mins).</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="route-option">
              <h3>From Narita Airport (NRT)</h3>
              <ul className="route-steps">
                <li>
                  <span className="step-badge">Step 1</span>
                  <div>
                    <strong>Narita Express (N'EX) or Skyliner</strong>
                    <p>Take the express train to Tokyo or Ueno Station (approx. 60 mins).</p>
                  </div>
                </li>
                <li>
                  <span className="step-badge">Step 2</span>
                  <div>
                    <strong>Hokuriku Shinkansen (Bullet Train)</strong>
                    <p>Take the bullet train from Tokyo/Ueno Station to Joetsumyoko Station (approx. 1h 50m).</p>
                  </div>
                </li>
                <li>
                  <span className="step-badge">Step 3</span>
                  <div>
                    <strong>Resort Shuttle Bus or Taxi</strong>
                    <p>Complimentary shuttle service directly to Lotte Arai Resort lobby (approx. 30 mins).</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta" id="inquiry">
        <h2 className="animate-up">Connect With Us</h2>
        <p className="animate-up" style={{transitionDelay: '0.1s'}}>Take the first step towards a premium endurance experience in Myoko.</p>
        <div className="form-container animate-up" style={{transitionDelay: '0.2s'}}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleInputChange}
              required 
              disabled={isSubmitting}
            />
            <input 
              type="email" 
              name="email"
              placeholder="Email Address" 
              value={formData.email}
              onChange={handleInputChange}
              required 
              disabled={isSubmitting}
            />
            <textarea 
              name="message"
              placeholder="Message / Describe your running experience" 
              rows="4" 
              value={formData.message}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
            ></textarea>
            <button type="submit" className="btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Processing...' : 'Submit Inquiry & Open WhatsApp'}
            </button>
          </form>
        </div>
      </section>

      <footer>
        <p>&copy; 2026 Touch the Sky JAPAN. Re-imagining Inbound Travel. Produced by DOUGHNUTSBROADCAST, INC.</p>
      </footer>

      <button 
        className={`scroll-to-top ${isScrolled ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
      </button>

      <button 
        className={`floating-cta ${isScrolled && !isInquiryVisible ? 'visible' : ''}`}
        onClick={() => document.getElementById('inquiry').scrollIntoView({ behavior: 'smooth' })}
      >
        Inquire Now
      </button>
    </>
  )
}
