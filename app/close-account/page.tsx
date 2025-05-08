import React from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer'; // Make sure this exists

const CloseAccountPage = () => {
  return (
    <div style={{ backgroundColor: 'black', color: '#eaeaea', fontFamily: 'Inter, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ flex: '1', display: 'flex', justifyContent: 'center', padding: '2rem' }}>
        <div
          style={{
            maxWidth: '960px',
            width: '100%',
            backgroundColor: 'black',
            padding: '3rem',
            borderRadius: '16px',
            boxShadow: '0 0 24px rgba(255, 255, 255, 0.36)',
          }}
        >
          <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '2.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>
              Close Your Strength Account
            </h1>
            <p style={{ fontSize: '1rem', color: '#aaa' }}>
              We're sorry to see you go, but we respect your decision.
            </p>
          </header>

          <section style={{ lineHeight: '1.75', fontSize: '1rem' }}>
            <p style={{ marginBottom: '2rem', textAlign: 'center' }}>
              If you’re considering closing your Strength account, we’re here to help. This is a permanent action and cannot be undone. Please read the following information carefully.
            </p>

            <h2 style={sectionHeading}>Overview</h2>
            <p style={paragraph}>
              Closing your Strength account means you’ll lose access to your sports profile, connections, posts, and any associated data. You won't be able to recover your data after closure.
            </p>

            <h2 style={sectionHeading}>Steps to Close Your Account</h2>
            <ol style={orderedList}>
              {[
                {
                  title: 'Click on Your Profile Picture or Icon',
                  steps: ['Go to the top-right corner of your Strength homepage.', 'Click your profile image to open the dropdown.'],
                },
                {
                  title: 'Select Settings',
                  steps: ['Choose "Settings" from the dropdown menu.'],
                },
                {
                  title: 'Click on Close Account',
                  steps: ['Scroll to the bottom of the settings panel.', 'Click "Close Account" to continue.'],
                },
                {
                  title: 'Review the Closure Information',
                  steps: ['Read all information thoroughly.', 'Click "Next" to proceed.'],
                },
                {
                  title: 'Enter Your Credentials',
                  steps: ['Confirm with your email and password.', 'Click "Done" to finalize.'],
                },
              ].map(({ title, steps }, index) => (
                <li key={index} style={{ marginBottom: '1.5rem' }}>
                  <strong>{title}</strong>
                  <ul style={unorderedList}>
                    {steps.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>

            <h2 style={sectionHeading}>What Happens After Account Closure?</h2>
            <ul style={unorderedList}>
              <li>
                <strong>Permanent Deletion:</strong> All personal and sports data will be erased permanently.
              </li>
              <li>
                <strong>Reactivation Not Allowed:</strong> This action cannot be reversed.
              </li>
              <li>
                <strong>Impact on Community:</strong> Inform teammates before leaving to avoid disruption.
              </li>
            </ul>

            <h2 style={sectionHeading}>Need Help?</h2>
            <p style={paragraph}>
              Contact us at <strong>yourstrength.official@gmail.com</strong> or visit our Help Center if you need support.
            </p>

            <p style={{ marginTop: '3rem', textAlign: 'center', fontWeight: '600', fontSize: '1.1rem' }}>
              Thank you for being a part of Strength.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const sectionHeading = {
  marginTop: '2.5rem',
  marginBottom: '1rem',
  fontSize: '1.5rem',
  fontWeight: '600',
  color: '#fff',
};

const paragraph = {
  marginBottom: '1.5rem',
  color: '#ccc',
};

const orderedList = {
  listStyle: 'decimal',
  paddingLeft: '1.5rem',
};

const unorderedList = {
  listStyle: 'disc',
  paddingLeft: '1.5rem',
  marginTop: '0.5rem',
  color: '#bbb',
};

export default CloseAccountPage;
