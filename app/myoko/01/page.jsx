"use client";

import { useEffect, useState } from 'react'
import { sendInquiryEmail } from '../../actions'

// Custom High-Fidelity SVG Partner Logos
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

export default function App() {
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
      const text = `Hello Touch The Sky Japan! I would like to inquire about the program.

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
    "/images/program_schedule_snow_1776918381907.png",
    "/images/program_snow_boots_1776918939615.png",
    "/images/program_ski_lesson.png"
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

      <header className="hero">
        <div className="hero-content">
          <p className="collection animate-up" style={{transitionDelay: '0.3s'}}>Myoko Collection #01</p>
          <h1 className="animate-up" style={{transitionDelay: '0.5s'}}>MYOKO Snow <br className="mobile-break"/>Learning Program<span>Touch the Snow, <br className="mobile-break"/>Reach the Sky</span></h1>
          <div className="hero-schedule-badge animate-up" style={{transitionDelay: '0.6s'}}>
            <span>March 2027</span>
          </div>
          <p className="subcopy animate-up" style={{transitionDelay: '0.7s'}}>Where First Snow Opens New Horizons</p>
        </div>
      </header>

      <section className="concept">
        <div className="concept-text">
          <h2 className="animate-up"><span>The Concept</span>More Than a Holiday.<br/>A Journey of Growth.</h2>
          <p className="animate-up" style={{transitionDelay: '0.1s'}}>For many families from the tropics, snow is an unknown environment. Our program transforms this first encounter into a profound educational experience.</p>
          <p className="animate-up" style={{transitionDelay: '0.2s'}}>This is not merely about learning to ski. By adapting to the cold, overcoming challenges, and mastering a new environment, children develop deep self-efficacy and non-cognitive skills that will guide them for a lifetime.</p>
        </div>
        <div className="concept-image animate-up" style={{transitionDelay: '0.3s'}}>
          <img src="/images/concept_kids_snow_1776904754418.png" alt="A child experiencing snow for the first time in Myoko" />
        </div>
      </section>

      <section className="program">
        <div className="program-container">
          <h2 className="animate-up">Program Framework</h2>
          <div className="program-flex">
            <div className="program-image animate-up" style={{transitionDelay: '0.2s'}}>
              <Slideshow images={programImages} />
            </div>
            <div className="timeline">
              <div className="timeline-item animate-up" style={{transitionDelay: '0.3s'}}>
                <h3>Day 1: Encounter</h3>
                <h4>Lowering the Psychological Barrier</h4>
                <p>We begin not on the slopes, but by simply touching and feeling the snow. Through gentle play in a safe environment, children learn that snow is a friend, setting a positive foundation for the days ahead.</p>
              </div>
              <div className="timeline-item animate-up" style={{transitionDelay: '0.4s'}}>
                <h3>Day 2-4: Adaptation</h3>
                <h4>Building Success Step-by-Step</h4>
                <p>Short, concentrated 2-to-3 hour sessions ensure children remain engaged without exhaustion. They learn balance, movement, and the joy of gliding. Every small fall is an opportunity to stand up stronger, turning challenges into triumphant success stories.</p>
              </div>
              <div className="timeline-item animate-up" style={{transitionDelay: '0.5s'}}>
                <h3>Day 5: Achievement</h3>
                <h4>Reaching the Sky</h4>
                <p>The final day culminates in independent gliding. A sense of immense pride washes over the children as they receive their Myoko Snow Learning Program Certificate. They leave not just as skiers, but as more resilient individuals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="venue">
        <div className="venue-text">
          <h2 className="animate-up" style={{transitionDelay: '0.1s'}}><span>The Venue</span>Lotte Arai Resort</h2>
          <p className="animate-up" style={{transitionDelay: '0.2s'}}>Located at the foot of Mt. Okenashi, Lotte Arai Resort offers an expansive, private mountain atmosphere directly connected to some of the world's finest powder snow. As Asia's premier luxury mountain resort, it boasts world-class hospitality, ensuring exceptional comfort for your family.</p>
          <p className="animate-up" style={{transitionDelay: '0.3s'}}>From ski-in/ski-out convenience to premium dining and serene spa facilities, this resort serves as the luxurious, stress-free basecamp for your child's educational journey. Highlighting our luxury guest rooms designed to provide premium comfort and rest.</p>
        </div>
        <div className="venue-gallery animate-up">
          <div className="gallery-main">
            <img src="/images/lotte_arai_interior.png" alt="Lotte Arai Resort Luxury Guest Room" />
            <div className="gallery-label">Luxury Guest Room</div>
          </div>
          <div className="gallery-sub">
            <div className="gallery-item">
              <img src="/images/lotte_arai_exterior.png" alt="Lotte Arai Resort Winter Exterior" />
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
          <p className="animate-up" style={{transitionDelay: '0.2s'}}>Situated within a majestic National Park in Niigata, Myoko is more than just a destination globally renowned for its exceptional, deep powder snow. It is an authentic, historic onsen (hot spring) sanctuary, offering deeply restorative moments after a long day in the cold.</p>
          <p className="animate-up" style={{transitionDelay: '0.3s'}}>This pristine environment also serves as a premier training ground for world-class athletes across snow sports and track and field. Surrounded by untamed nature and the spirit of champions, Myoko provides the perfect, tranquil backdrop for profound personal growth and unforgettable family memories.</p>
        </div>
      </section>

      <section className="activities">
        <div className="activities-header">
          <h2 className="animate-up">Exclusive Winter Activities</h2>
          <p className="animate-up" style={{transitionDelay: '0.1s'}}>Beyond skiing, discover curated experiences designed for the entire family.</p>
        </div>
        <div className="activities-grid">
          <div className="activity-card animate-up" style={{transitionDelay: '0.2s'}}>
            <div className="activity-badge">For Families</div>
            <h3>Family Snow Adventures</h3>
            <p className="activity-sub">Create unforgettable memories together in a winter wonderland.</p>
            <ul className="activity-list">
              <li>
                <strong>Snow Rafting & Tubing:</strong> Thrilling rides behind a snowmobile and custom sledding runs in the resort's adventure park.
              </li>
              <li>
                <strong>Snowshoe Forest Explorations:</strong> A gentle, guided winter nature walk to discover forest secrets and enjoy hot chocolate in the snow.
              </li>
            </ul>
          </div>
          <div className="activity-card animate-up" style={{transitionDelay: '0.3s'}}>
            <div className="activity-badge">For Parents</div>
            <h3>Adult Relaxation & Culture</h3>
            <p className="activity-sub">Indulge in sophisticated local activities while children are in their private lessons.</p>
            <ul className="activity-list">
              <li>
                <strong>Onsen & Mountain Spa:</strong> Deep relaxation in Lotte Arai’s natural, open-air hot spring baths followed by premium wellness treatments.
              </li>
              <li>
                <strong>Soba Making & Gastronomy:</strong> Learn the ancient craft of making handmade buckwheat noodles from local masters, paired with seasonal delicacies.
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
          <h2 className="animate-up">Exclusive Program Package</h2>
          <p className="animate-up" style={{transitionDelay: '0.1s'}}>An exclusive winter educational journey for your family.</p>
        </div>
        <div className="pricing-content">
          <div className="pricing-card animate-up" style={{transitionDelay: '0.2s'}}>
            <div className="package-schedule">
              <span className="schedule-badge">Next Session</span>
              <h3>March 2027</h3>
            </div>
            <p className="price-desc">Comprehensive Family Inclusions</p>
            <ul className="pricing-includes">
              <li>5-Day Exclusive Snow Education Program</li>
              <li>Daily Private Coaching by Elite Instructors</li>
              <li>Mentorship & Interaction Sessions with Instructors</li>
              <li>Dedicated Bilingual Interpreter & Personal Concierge Support</li>
              <li>Premium Snow Gear & Ski Equipment Rental</li>
              <li>Myoko Snow Learning Program Official Certificate</li>
              <li>Local Ground Transport & Joetsu-Myoko Station Pickup Support</li>
            </ul>
            <p className="pricing-note">* Room accommodations at Lotte Arai Resort and flight tickets are arranged separately to suit your family's unique preferences.</p>
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
            <p className="access-intro">Located in Niigata Prefecture, Lotte Arai Resort is highly accessible from Japan's major international hubs via the Hokuriku Shinkansen (Bullet Train).</p>
            
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
        <h2 className="animate-up">Inquire Now</h2>
        <p className="animate-up" style={{transitionDelay: '0.1s'}}>Take the first step towards a transformative snow experience for your family.</p>
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
              placeholder="Message / Preferred Dates" 
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
