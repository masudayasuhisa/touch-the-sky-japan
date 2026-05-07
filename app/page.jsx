"use client";

import { useEffect, useState } from 'react'

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4500); // 4.5 seconds per slide
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

  const programImages = [
    "/images/program_schedule_snow_1776918381907.png",
    "/images/program_snow_boots_1776918939615.png",
    "/images/program_snow_trail_1776918954245.png"
  ];

  const myokoImages = [
    "/images/myoko_village_snow_1776918084759.png",
    "/images/myoko_onsen_1776918970636.png",
    "/images/myoko_dining_1776918987702.png"
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

      <header className="hero">
        <div className="hero-content">
          <p className="collection animate-up" style={{transitionDelay: '0.3s'}}>Myoko Collection #01</p>
          <h1 className="animate-up" style={{transitionDelay: '0.5s'}}>MYOKO Snow Learning Program<br/><span>Touch the Snow, Reach the Sky</span></h1>
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
          <p className="animate-up" style={{transitionDelay: '0.3s'}}>From ski-in/ski-out convenience to premium dining and serene spa facilities, this resort serves as the luxurious, stress-free basecamp for your child's educational journey.</p>
        </div>
        <div className="venue-image animate-up">
          <img src="/images/venue_lotte_arai_resort_1776920185431.png" alt="Lotte Arai Resort in winter" />
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

      <section className="olympians">
        <div className="olympians-header">
          <h2 className="animate-up">Learn from the World's Best</h2>
          <p className="animate-up" style={{transitionDelay: '0.1s'}}>We believe in providing the absolute highest standard of experience. That is why we collaborate with elite Olympic athletes to inspire the next generation.</p>
        </div>

        <div className="olympian-card">
          <div className="olympian-image animate-up">
            <img src="/images/olympian_snowboarder_1776904772015.png" alt="Professional Snowboarder in action" />
          </div>
          <div className="olympian-info">
            <h3 className="animate-up" style={{transitionDelay: '0.1s'}}>Ryusei Yamada</h3>
            <h4 className="animate-up" style={{transitionDelay: '0.2s'}}>Beijing 2022 Olympian</h4>
            <p className="animate-up" style={{transitionDelay: '0.3s'}}>A leading figure in the new generation of professional snowboarders. His presence brings an unparalleled level of expertise. Hearing firsthand the mindset of a top athlete—how they face fear, adapt to the mountain, and push limits—offers invaluable life lessons far beyond the snow.</p>
          </div>
        </div>

        <div className="olympian-card">
          <div className="olympian-image animate-up">
            <img src="/images/hero_snow_mountain_1776904736000.png" alt="Sena Tomita Background" />
          </div>
          <div className="olympian-info">
            <h3 className="animate-up" style={{transitionDelay: '0.1s'}}>Sena Tomita</h3>
            <h4 className="animate-up" style={{transitionDelay: '0.2s'}}>Beijing 2022 Olympic Bronze Medalist</h4>
            <p className="animate-up" style={{transitionDelay: '0.3s'}}>A world-class athlete who has reached the pinnacle of her sport. Sena's journey of perseverance and global success serves as a profound inspiration. Her involvement elevates the program from a simple lesson to an extraordinary encounter with excellence.</p>
          </div>
        </div>
      </section>

      <section className="partners">
        <div className="partners-header">
          <h2 className="animate-up">In Partnership With</h2>
        </div>
        <div className="partners-grid animate-up" style={{transitionDelay: '0.1s'}}>
          <div className="partner-logo">
            <img src="/images/partner_logo_1_1776920346692.png" alt="Snow Gear Partner" />
          </div>
          <div className="partner-logo">
            <img src="/images/partner_logo_2_1776920357975.png" alt="Hospitality Partner" />
          </div>
          <div className="partner-logo">
            <img src="/images/partner_logo_3_1776920369803.png" alt="Travel Partner" />
          </div>
          <div className="partner-logo">
            <img src="/images/partner_logo_4_1776920381921.png" alt="Concierge Partner" />
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="pricing-header">
          <h2 className="animate-up">Program Investment</h2>
          <p className="animate-up" style={{transitionDelay: '0.1s'}}>An exclusively tailored 5-day educational journey for your family.</p>
        </div>
        <div className="pricing-content">
          <div className="pricing-card animate-up" style={{transitionDelay: '0.2s'}}>
            <h3 className="price">Starting from <br className="mobile-break"/><span>¥600,000</span></h3>
            <p className="price-desc">Per family (up to 4 members)</p>
            <ul className="pricing-includes">
              <li>4 Nights / 5 Days tailored snow education program</li>
              <li>Private, elite instruction & coaching</li>
              <li>Exclusive session with Olympic athletes</li>
              <li>Dedicated premium interpreter & concierge</li>
              <li>Premium snow gear & equipment management</li>
            </ul>
            <p className="pricing-note">* Accommodation and flights are arranged separately to suit your bespoke travel preferences.</p>
          </div>
        </div>
      </section>

      <section className="cta" id="inquiry">
        <h2 className="animate-up">Inquire Now</h2>
        <p className="animate-up" style={{transitionDelay: '0.1s'}}>Take the first step towards a transformative snow experience for your family.</p>
        <div className="form-container animate-up" style={{transitionDelay: '0.2s'}}>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <textarea placeholder="Message / Preferred Dates" rows="4" required></textarea>
            <button type="submit" className="btn-primary">Submit Inquiry</button>
          </form>
        </div>
      </section>

      <footer className="animate-up">
        <p>&copy; 2026 Touch the Sky JAPAN. Re-imagining Inbound Travel. Produced by DOUGHNUTSBROADCAST, INC.</p>
      </footer>

      <button 
        className={`scroll-to-top ${isScrolled ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
      </button>
    </>
  )
}
