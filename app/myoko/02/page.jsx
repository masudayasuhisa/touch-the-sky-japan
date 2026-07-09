"use client";

import { useEffect, useState } from 'react'
import ContactTab from '../../components/ContactTab'

// Custom High-Fidelity SVG Partner Logos (Same as 01 for brand alignment)
const APAHotelLogo = () => (
  <svg className="svg-logo" viewBox="0 0 220 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="19" y="14" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
    <text x="35" y="36" fontFamily="var(--font-serif)" fontSize="18" fontWeight="bold" fill="currentColor" textAnchor="middle">A</text>
    <text x="68" y="28" fontFamily="var(--font-serif)" fontSize="13" letterSpacing="0.08em" fill="currentColor" fontWeight="600">APA HOTEL &amp; RESORT</text>
    <text x="68" y="42" fontFamily="var(--font-sans)" fontSize="8.5" letterSpacing="0.05em" fill="currentColor">アパホテル＆リゾート〈上越妙高〉</text>
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

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect();
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
          <h1 className="animate-up" style={{transitionDelay: '0.5s'}}>From Hiking <br className="mobile-break"/>to Trail Running<span>Expand Your Mountain Experience</span></h1>
          <div className="hero-schedule-badge animate-up" style={{transitionDelay: '0.6s'}}>
            <span>Sept 16–22, 2026</span>
          </div>
          <p className="subcopy animate-up" style={{transitionDelay: '0.7s'}}>A premium trail running journey through Myoko’s mountains, forests, hot springs, and local culture.</p>
        </div>
      </header>

      <section className="concept">
        <div className="concept-text">
          <h2 className="animate-up"><span>Beyond Hiking</span>Into the Flow.</h2>
          <p className="animate-up" style={{transitionDelay: '0.1s'}}>For those who already love the mountains, trail running opens a new door. This journey is designed for hikers and outdoor lovers who want to experience the mountains more deeply - not only by walking through them, but by moving with their terrain, rhythm, and flow.</p>
          <p className="animate-up" style={{transitionDelay: '0.2s'}}>In Myoko, you will enter the world of trail running in a safe, enjoyable, and sustainable way. You will run at an easy pace, walk when needed, climb, descend, recover, soak in hot springs, and connect with the local mountain culture. This is not about speed. It is about expanding the way you experience the mountains.</p>
          <p className="animate-up" style={{transitionDelay: '0.3s', fontStyle: 'italic', color: 'var(--color-accent)' }}>From hiking to trail running. From scenery to sensation. From visiting the mountains to moving with them.</p>
        </div>
        <div className="concept-image animate-up" style={{transitionDelay: '0.4s'}}>
          <img src="/images/concept_trail_running.png" alt="Adult trail runners experiencing the lush forests of Myoko" />
        </div>
      </section>

      <section className="program">
        <div className="program-container">
          <h2 className="animate-up">Program Architecture</h2>
          <div className="program-flex">
            <div className="program-image animate-up" style={{transitionDelay: '0.2s'}}>
              <Slideshow images={programImages} />
            </div>
            <div className="timeline">
              <div className="timeline-item animate-up" style={{transitionDelay: '0.3s'}}>
                <h3>Day 1 (Sept 16): Opening the Door</h3>
                <h4>Preparation & Connection</h4>
                <p>Arrive in Myoko via the Shinkansen and transfer to the scenic APA Hotel & Resort Joetsu Myoko from Joetsu-Myoko Station. We gather for an evening orientation, gear-check, dynamic mobility prep, and a welcome dinner showcasing seasonal local ingredients.</p>
              </div>
              <div className="timeline-item animate-up" style={{transitionDelay: '0.4s'}}>
                <h3>Day 2–3 (Sept 17–18): Trail Running Basics & Flow</h3>
                <h4>From Hiking to Running</h4>
                <p>Learn the foundations of trail running—uphill power hiking, downhill technique, pacing, and safety. Enjoy easy-paced runs/walks through Myoko's lush forests and foothills. Spend afternoons recovering with post-run mountain yoga, open-air hot springs, coffee roasting, and traditional Sasa-dango sweet crafting.</p>
              </div>
              <div className="timeline-item animate-up" style={{transitionDelay: '0.5s'}}>
                <h3>Day 4–5 (Sept 19–20): Challenge & Highlight</h3>
                <h4>Testing Your Flow</h4>
                <p>Put your new skills to the test in the Golden Trail National Series Japan associated event. Choose the race category that fits your level, and run/walk through the stunning scenery. Enjoy the vibrant event atmosphere, global outdoor brand expos, and local food stalls.</p>
              </div>
              <div className="timeline-item animate-up" style={{transitionDelay: '0.6s'}}>
                <h3>Day 6–7 (Sept 21–22): Integration & Departure</h3>
                <h4>Carrying the Flow Home</h4>
                <p>Day 6 is dedicated to peaceful restoration. Enjoy a recovery yoga session, a walk to Naena Falls, or relax at the resort spa. On Day 7, checkout and take the hotel shuttle (reservation required) or local transport to Joetsu-Myoko Station, carrying home a certificate and a completely expanded way of enjoying the mountains.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="venue">
        <div className="venue-text">
          <h2 className="animate-up" style={{transitionDelay: '0.1s'}}><span>The Basecamp</span>APA Hotel & Resort Joetsu Myoko</h2>
          <p className="animate-up" style={{transitionDelay: '0.2s'}}>Nestled high in the Myoko hills, APA Hotel & Resort Joetsu Myoko offers breathtaking panoramic views of the majestic Myoko mountain range. Surrounded by lush nature and rolling green hills, it stands as an exceptional mountain basecamp, providing comfortable accommodations, premium hospitality, and the perfect atmosphere to rest after your trail adventures.</p>
          <p className="animate-up" style={{transitionDelay: '0.3s'}}>From its scenic location close to pristine forest trails to delicious local dining options and soothing natural open-air hot spring baths (onsen), the resort ensures a peaceful, stress-free basecamp for your training and physical recovery.</p>
        </div>
        <div className="venue-gallery animate-up">
          <div className="gallery-main">
            <img src="/images/apa_myoko_room.jpg" alt="APA Hotel & Resort Joetsu Myoko Guest Room" />
            <div className="gallery-label">Guest Room</div>
          </div>
          <div className="gallery-sub">
            <div className="gallery-item">
              <img src="/images/apa_myoko_exterior.jpg" alt="APA Hotel & Resort Joetsu Myoko Exterior" />
              <div className="gallery-label">Resort Exterior</div>
            </div>
            <div className="gallery-item">
              <img src="/images/apa_myoko_onsen.jpg" alt="APA Hotel & Resort Joetsu Myoko Outdoor Onsen" />
              <div className="gallery-label">Outdoor Onsen</div>
            </div>
          </div>
          <p className="image-credit" style={{ fontSize: '0.65rem', opacity: 0.5, textAlign: 'right', marginTop: '0.5rem', width: '100%', fontStyle: 'italic', color: 'var(--color-text-dark)' }}>
            *Images from the official website
          </p>
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
            <div className="activity-badge">Transition to Flow</div>
            <h3>Local Trail Coaching</h3>
            <p className="activity-sub">Learn to navigate steep technical trails with confidence.</p>
            <ul className="activity-list">
              <li>
                <strong>Bi-lingual Mountain Guide:</strong> Gentle instruction in English covering uphill pacing, downhill balance, and breathing tactics.
              </li>
              <li>
                <strong>Diverse Mountain Trails:</strong> Run and walk the scenic paths of <strong>Sasagamine Plateau</strong>, the calming woods of <strong>Okazawa Forest</strong>, or the historic ridges of <strong>Mt. Myoko</strong> (exact routes are custom-tailored daily based on weather and trail conditions).
              </li>
              <li>
                <strong>Mountain & Recovery Yoga:</strong> Integrated pre-run stretching and post-run recovery yoga sessions to release muscle tension, improve lung capacity, and realign your body.
              </li>
              <li>
                <strong>Course Strategy:</strong> Group orientation and course maps to prepare you for the unique elevation profile of the Golden Trail National Series race.
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

      <section className="pricing">
        <div className="pricing-header">
          <h2 className="animate-up">Exclusive Package Details</h2>
          <p className="animate-up" style={{transitionDelay: '0.1s'}}>A fully supported alpine endurance journey for active trail runners and nature enthusiasts.</p>
        </div>
        <div className="pricing-content">
          <div className="pricing-card animate-up" style={{transitionDelay: '0.2s'}}>
            <div className="package-schedule">
              <span className="schedule-badge">Special Edition</span>
              <h3>Sept 16–22, 2026</h3>
            </div>

            <div className="price-display" style={{ marginBottom: '2.5rem', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '2rem' }}>
              <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-accent)', margin: '0 0 0.5rem 0', fontWeight: 'bold' }}>Tour Price</p>
              <h4 className="serif" style={{ fontSize: '2rem', color: 'var(--color-bg-dark)', fontWeight: '400', margin: '0 0 0.5rem 0', lineHeight: '1.2' }}>
                JPY 367,700 – JPY 379,800 <span style={{ fontSize: '1rem', color: '#666', fontStyle: 'italic' }}>(including tax)</span>
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>
                Base Tour Price is JPY 360,000 including tax. The race entry fee will be added depending on the race category selected.
              </p>
            </div>

            <p className="price-desc" style={{ fontWeight: 'bold', color: 'var(--color-accent)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Designed for hikers, hiker-to-run beginners, and outdoor lovers. (Prerequisite: Comfortably walk/lightly jog 5–10km in nature)
            </p>
            <p className="price-desc">Package Inclusions</p>
            <ul className="pricing-includes">
              <li>2-Day Guided Training Camp with English-speaking local coach</li>
              <li>6 Nights Premium Accommodations at APA Hotel & Resort Joetsu Myoko</li>
              <li>Welcome Dinner included on Day 1</li>
              <li>Post-run recovery yoga sessions</li>
              <li>Local English-speaking coordinator support during stay</li>
              <li>Guided cultural activities (Soba making, coffee roasting, Sasa-dango craft)</li>
              <li>Official training materials and course maps</li>
            </ul>
            <p className="pricing-note" style={{ marginTop: '1.5rem', fontWeight: 'bold' }}>* Exclusions & Details:</p>
            <ul className="pricing-includes" style={{ opacity: 0.85 }}>
              <li>Flights and international/domestic transportation to/from Joetsu-Myoko Station</li>
              <li>Daily meals (except the Day 1 Welcome Dinner) and personal sightseeing expenses</li>
              <li>
                <strong>Race Registration & Transfers:</strong> Race registration is handled separately to allow participants to choose their preferred category. We will provide guidance and support for the registration process. Shuttles to the starting line are managed via independent local services.
              </li>
            </ul>
            <p className="pricing-note" style={{ color: 'var(--color-accent)', fontWeight: '500', marginTop: '1.5rem' }}>
              ⚠️ Important Note: Race registration capacity is limited. Early booking is highly recommended. Registration closes August 3, 2026 (or when capacity is reached).
            </p>

            <div style={{ marginTop: '2.5rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2rem', textAlign: 'center' }}>
              <a href="/myoko/02/travel-info" style={{
                display: 'inline-block',
                padding: '0.8rem 2rem',
                backgroundColor: 'var(--color-accent)',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                borderRadius: '2px'
              }} onMouseOver={(e) => e.target.style.backgroundColor = '#a88147'} onMouseOut={(e) => e.target.style.backgroundColor = 'var(--color-accent)'}>
                View Tour Price Details &amp; Travel Terms
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="access">
        <div className="access-container">
          <div className="access-map animate-up">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3202.999999999999!2d138.2514134!3d36.9022134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff617b3f0a49617%3A0x57e2a4270dcada0b!2z44Ki44OR44Ob44OG44Or77yG44Oq44K-44O844OI44CA5LiK6LaK5am56auY!5e0!3m2!1sja!2sjp!4v1720512345678!5m2!1sja!2sjp"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '4px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="APA Hotel & Resort Joetsu Myoko Google Map"
            ></iframe>
          </div>
          <div className="access-info animate-up">
            <h2><span>Location & Access</span>Getting to APA Hotel & Resort Joetsu Myoko</h2>
            <p className="access-intro">Located in Niigata Prefecture, APA Hotel & Resort Joetsu Myoko is highly accessible from Tokyo's international hubs via the Hokuriku Shinkansen (Bullet Train).</p>
            
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
                    <p>Take the bullet train from Tokyo Station to Joetsu-Myoko Station (approx. 1h 50m).</p>
                  </div>
                </li>
                <li>
                  <span className="step-badge">Step 3</span>
                  <div>
                    <strong>Hotel Shuttle Bus or Taxi</strong>
                    <p>Enjoy the hotel shuttle bus (approx. 25 mins, reservation required) or a private taxi straight to the resort.</p>
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
                    <p>Take the bullet train from Tokyo/Ueno Station to Joetsu-Myoko Station (approx. 1h 50m).</p>
                  </div>
                </li>
                <li>
                  <span className="step-badge">Step 3</span>
                  <div>
                    <strong>Hotel Shuttle Bus or Taxi</strong>
                    <p>Enjoy the hotel shuttle bus directly to the lobby (approx. 25 mins, reservation required) or a private taxi.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta" id="inquiry">
        <h2 className="animate-up">Connect With Us</h2>
        <p className="animate-up" style={{transitionDelay: '0.1s'}}>Take the first step towards a premium endurance experience in Myoko.<br /><span style={{ fontSize: '0.9rem', opacity: 0.8, display: 'inline-block', marginTop: '0.5rem' }}>(Limited seats / Inquiry first / No obligation)</span></p>
        <div className="animate-up" style={{transitionDelay: '0.2s', marginTop: '2.5rem', textAlign: 'center'}}>
          <a 
            href="https://wa.me/819063309143" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
            style={{
              display: 'inline-block',
              textDecoration: 'none',
              padding: '1.2rem 3rem',
              fontSize: '1rem',
              fontWeight: '500',
              borderRadius: '4px'
            }}
          >
            Inquire via WhatsApp
          </a>
        </div>
      </section>

      <footer>
        <div style={{ marginBottom: '1rem' }}>
          <a href="/myoko/02/travel-info" style={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'underline', fontSize: '0.85rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#C39D63'} onMouseOut={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}>
            Tour Price &amp; Important Travel Information
          </a>
        </div>
        <p>&copy; 2026 Touch the Sky JAPAN. Re-imagining Inbound Travel. Produced by DOUGHNUTSBROADCAST, INC.</p>
      </footer>

      <button 
        className={`scroll-to-top ${isScrolled ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
      </button>

      <ContactTab />
    </>
  )
}
