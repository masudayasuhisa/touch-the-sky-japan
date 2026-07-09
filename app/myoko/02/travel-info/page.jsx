import React from 'react'
import ScrollToTop from '../../../components/ScrollToTop'
import ContactTab from '../../../components/ContactTab'

export const metadata = {
  title: 'Tour Price & Important Travel Information | Touch the Sky JAPAN',
  description: 'Detailed tour pricing, inclusions, exclusions, and travel conditions for the Myoko Trail Running Program.',
}

export default function TravelInfoPage() {
  return (
    <div style={{
      backgroundColor: '#Faf8f5',
      color: '#2B2B2B',
      minHeight: '100vh',
      fontFamily: 'var(--font-sans), sans-serif',
      lineHeight: '1.7',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Navigation */}
      <nav style={{
        backgroundColor: '#121212',
        padding: '1.2rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div style={{
          fontFamily: 'var(--font-serif), serif',
          color: '#F9F8F6',
          fontSize: '1.3rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase'
        }}>
          Touch the Sky
        </div>
        <a href="/myoko/02" style={{
          padding: '0.6rem 1.5rem',
          border: '1px solid #C39D63',
          color: '#C39D63',
          textDecoration: 'none',
          fontSize: '0.8rem',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          borderRadius: '2px',
          transition: 'all 0.3s ease'
        }}>
          Back to Trail Program
        </a>
      </nav>

      {/* Main Content */}
      <main style={{
        flex: 1,
        maxWidth: '900px',
        width: '100%',
        margin: '0 auto',
        padding: '4rem 2rem'
      }}>
        <header style={{ marginBottom: '3.5rem', borderBottom: '1px solid rgba(18, 26, 22, 0.08)', paddingBottom: '1.5rem' }}>
          <p style={{
            color: '#C39D63',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            fontSize: '0.85rem',
            marginBottom: '0.5rem',
            fontFamily: 'var(--font-sans), sans-serif',
            fontWeight: 500
          }}>
            Myoko Collection #02
          </p>
          <h1 style={{
            fontFamily: 'var(--font-serif), serif',
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            fontWeight: 400,
            lineHeight: 1.2,
            color: '#121212',
            margin: 0
          }}>
            Tour Price &amp; Important Travel Information
          </h1>
        </header>

        {/* Section 1: Tour Price and Inclusions */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{
            fontFamily: 'var(--font-serif), serif',
            fontSize: '1.8rem',
            borderLeft: '2px solid #C39D63',
            paddingLeft: '1rem',
            marginBottom: '1.5rem',
            color: '#121212',
            fontWeight: 400
          }}>
            Tour Price and Inclusions
          </h2>
          
          <div style={{
            backgroundColor: '#ffffff',
            padding: '2rem',
            borderRadius: '4px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
            border: '1px solid rgba(18, 26, 22, 0.04)',
            marginBottom: '2rem'
          }}>
            <p style={{ fontSize: '1.25rem', color: '#121212', fontWeight: 500, marginBottom: '0.5rem' }}>
              Tour Price: JPY 367,700 – JPY 379,800 <span style={{ fontSize: '0.9rem', fontWeight: 300, color: '#666' }}>(including tax)</span>
            </p>
            <p style={{ color: '#555', fontSize: '0.95rem', margin: 0 }}>
              The base tour price is JPY 360,000 including tax. The race entry fee will be added depending on the race category selected.
            </p>
          </div>

          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '0.9rem',
              textAlign: 'left'
            }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #C39D63', color: '#121212' }}>
                  <th style={{ padding: '12px 8px', fontWeight: 600 }}>Race Category</th>
                  <th style={{ padding: '12px 8px', fontWeight: 600 }}>Base Tour Price</th>
                  <th style={{ padding: '12px 8px', fontWeight: 600 }}>Race Entry Fee <span style={{ fontWeight: 300, fontSize: '0.8rem' }}>(incl. tax)</span></th>
                  <th style={{ padding: '12px 8px', fontWeight: 600 }}>Total Tour Price <span style={{ fontWeight: 300, fontSize: '0.8rem' }}>(incl. tax)</span></th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(18, 26, 22, 0.06)' }}>
                  <td style={{ padding: '12px 8px', fontWeight: 500 }}>GTWS 23.5km</td>
                  <td style={{ padding: '12px 8px' }}>JPY 360,000</td>
                  <td style={{ padding: '12px 8px' }}>JPY 19,800</td>
                  <td style={{ padding: '12px 8px', fontWeight: 500, color: '#C39D63' }}>JPY 379,800</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(18, 26, 22, 0.06)' }}>
                  <td style={{ padding: '12px 8px', fontWeight: 500 }}>Myoko Trail 11km</td>
                  <td style={{ padding: '12px 8px' }}>JPY 360,000</td>
                  <td style={{ padding: '12px 8px' }}>JPY 9,900</td>
                  <td style={{ padding: '12px 8px', fontWeight: 500, color: '#C39D63' }}>JPY 369,900</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(18, 26, 22, 0.06)' }}>
                  <td style={{ padding: '12px 8px', fontWeight: 500 }}>Myoko Trail 5km</td>
                  <td style={{ padding: '12px 8px' }}>JPY 360,000</td>
                  <td style={{ padding: '12px 8px' }}>JPY 7,700</td>
                  <td style={{ padding: '12px 8px', fontWeight: 500, color: '#C39D63' }}>JPY 367,700</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ fontSize: '0.8rem', color: '#666', lineHeight: '1.6', marginBottom: '2rem' }}>
            <p style={{ margin: '2px 0' }}>※ The GTWS 23.5km race entry fee is JPY 18,000 plus 10% consumption tax.</p>
            <p style={{ margin: '2px 0' }}>※ The Myoko Trail 11km race entry fee is JPY 9,000 plus 10% consumption tax.</p>
            <p style={{ margin: '2px 0' }}>※ The Myoko Trail 5km race entry fee is JPY 7,000 plus 10% consumption tax.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {/* Included */}
            <div style={{
              backgroundColor: '#ffffff',
              padding: '1.8rem',
              borderRadius: '4px',
              borderLeft: '3px solid #C39D63',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)'
            }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 500, color: '#121212', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Included in the Tour Price
              </h3>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#555', fontSize: '0.9rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Accommodation for 6 nights</li>
                <li style={{ marginBottom: '0.5rem' }}>Meals: 6 breakfasts and 6 dinners</li>
                <li style={{ marginBottom: '0.5rem' }}>Trail running training sessions on Day 2 and Day 3</li>
                <li style={{ marginBottom: '0.5rem' }}>Japanese cultural experience on Day 6</li>
                <li style={{ marginBottom: '0.5rem' }}>Race entry fee</li>
                <li style={{ marginBottom: '0.5rem' }}>Insurance</li>
                <li style={{ marginBottom: '0.5rem' }}>Chartered bus transportation during the tour itinerary</li>
                <li style={{ marginBottom: 0 }}>Tour conductor service</li>
              </ul>
            </div>

            {/* Not Included */}
            <div style={{
              backgroundColor: '#ffffff',
              padding: '1.8rem',
              borderRadius: '4px',
              borderLeft: '3px solid #666',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)'
            }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 500, color: '#121212', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Not Included in the Tour Price
              </h3>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#555', fontSize: '0.9rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>International flights between Singapore and Japan</li>
                <li style={{ marginBottom: '0.5rem' }}>Transportation to/from Myoko within Japan</li>
                <li style={{ marginBottom: '0.5rem' }}>Lunches</li>
                <li style={{ marginBottom: '0.5rem' }}>Personal expenses such as additional food, drinks, and shopping</li>
                <li style={{ marginBottom: 0 }}>Any expenses not specifically listed above</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Chartered Bus Operator */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{
            fontFamily: 'var(--font-serif), serif',
            fontSize: '1.8rem',
            borderLeft: '2px solid #C39D63',
            paddingLeft: '1rem',
            marginBottom: '1.2rem',
            color: '#121212',
            fontWeight: 400
          }}>
            Chartered Bus Operator
          </h2>
          <div style={{
            backgroundColor: '#ffffff',
            padding: '1.5rem 1.8rem',
            borderRadius: '4px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
            border: '1px solid rgba(18, 26, 22, 0.04)'
          }}>
            <p style={{ fontSize: '1rem', color: '#121212', fontWeight: 500, margin: '0 0 0.5rem 0' }}>
              Chartered Bus Operator: Kubiki Motor Co., Ltd.
            </p>
            <p style={{ fontSize: '0.85rem', color: '#666', margin: 0 }}>
              ※ Depending on itinerary arrangements and vehicle availability, an equivalent chartered bus operator may be used.
            </p>
          </div>
        </section>

        {/* Section 3: Minimum Participants & Tour Conductor */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{
            fontFamily: 'var(--font-serif), serif',
            fontSize: '1.8rem',
            borderLeft: '2px solid #C39D63',
            paddingLeft: '1rem',
            marginBottom: '1.2rem',
            color: '#121212',
            fontWeight: 400
          }}>
            Minimum Participants &amp; Tour Conductor
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{
              backgroundColor: '#ffffff',
              padding: '1.5rem 1.8rem',
              borderRadius: '4px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
              border: '1px solid rgba(18, 26, 22, 0.04)'
            }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 500, color: '#121212', margin: '0 0 0.8rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#C39D63' }}></span>
                Minimum number of participants: 10
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#555', margin: '0 0 0.5rem 0' }}>
                The tour may be cancelled if the minimum number of participants is not reached.
              </p>
              <p style={{ fontSize: '0.9rem', color: '#C39D63', fontWeight: 500, margin: 0 }}>
                Please do not book flights or other travel arrangements until the tour has been officially confirmed.
              </p>
            </div>

            <div style={{
              backgroundColor: '#ffffff',
              padding: '1.5rem 1.8rem',
              borderRadius: '4px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
              border: '1px solid rgba(18, 26, 22, 0.04)'
            }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 500, color: '#121212', margin: '0 0 0.8rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#C39D63' }}></span>
                Tour conductor: A tour conductor will accompany the tour.
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#555', margin: '0 0 0.5rem 0' }}>
                A tour conductor will accompany the tour and support itinerary management and on-site guidance.
              </p>
              <p style={{ fontSize: '0.9rem', color: '#555', margin: 0 }}>
                During trail running training sessions and activities, local guides and the Myoko team will also support safety management and participant assistance.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Number of Meals */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{
            fontFamily: 'var(--font-serif), serif',
            fontSize: '1.8rem',
            borderLeft: '2px solid #C39D63',
            paddingLeft: '1rem',
            marginBottom: '1.2rem',
            color: '#121212',
            fontWeight: 400
          }}>
            Number of Meals
          </h2>
          <div style={{
            backgroundColor: '#ffffff',
            padding: '1.8rem',
            borderRadius: '4px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
            border: '1px solid rgba(18, 26, 22, 0.04)'
          }}>
            <p style={{ fontSize: '0.95rem', color: '#555', margin: '0 0 1.2rem 0' }}>
              The following meals are included in the tour price:
            </p>
            <div style={{
              display: 'flex',
              gap: '2.5rem',
              fontSize: '1.1rem',
              color: '#121212',
              fontWeight: 500,
              marginBottom: '1.2rem'
            }}>
              <div>Breakfast: <span style={{ color: '#C39D63' }}>6</span></div>
              <div>Lunch: <span style={{ color: '#666' }}>0</span></div>
              <div>Dinner: <span style={{ color: '#C39D63' }}>6</span></div>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#666', margin: 0 }}>
              ※ Lunches are not included in the tour price and are to be paid for individually.
            </p>
          </div>
        </section>

        {/* Section 5: Travel Terms & Conditions */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{
            fontFamily: 'var(--font-serif), serif',
            fontSize: '1.8rem',
            borderLeft: '2px solid #C39D63',
            paddingLeft: '1rem',
            marginBottom: '1.2rem',
            color: '#121212',
            fontWeight: 400
          }}>
            Travel Terms and Conditions
          </h2>
          <div style={{
            backgroundColor: '#ffffff',
            padding: '1.5rem 1.8rem',
            borderRadius: '4px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
            border: '1px solid rgba(18, 26, 22, 0.04)'
          }}>
            <p style={{ fontSize: '0.95rem', color: '#555', margin: 0 }}>
              Detailed travel terms and conditions will be provided before application. Please review the document for details regarding the tour price, cancellation policy, travel conditions, scope of responsibility, and other important information.
            </p>
          </div>
        </section>

        {/* Section 6: Information Validity Date */}
        <section style={{
          borderTop: '1px solid rgba(18, 26, 22, 0.08)',
          paddingTop: '2rem',
          fontSize: '0.85rem',
          color: '#666'
        }}>
          <p style={{ fontWeight: 500, color: '#121212', margin: '0 0 0.5rem 0' }}>
            Information Validity Date: As of July 9, 2026
          </p>
          <p style={{ margin: 0 }}>
            The information above is valid as of July 9, 2026. Tour price, itinerary, accommodation, transportation, race information, and other details are subject to change.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#121212',
        color: 'rgba(255, 255, 255, 0.4)',
        padding: '3rem 2rem',
        textAlign: 'center',
        fontSize: '0.8rem',
        letterSpacing: '0.05em',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <p style={{ margin: 0 }}>&copy; 2026 Touch the Sky JAPAN. Re-imagining Inbound Travel. Produced by DOUGHNUTSBROADCAST, INC.</p>
      </footer>

      <ScrollToTop />
      <ContactTab isDetailPage={true} />
    </div>
  )
}
