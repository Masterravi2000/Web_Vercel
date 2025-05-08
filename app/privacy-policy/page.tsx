import React from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer'; // Make sure this exists

const PrivacyPolicy = () => {
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
              Strength Privacy Policy
            </h1>
            <p style={{ fontSize: '1rem', color: '#aaa' }}>
              Your privacy is important to us. Please read this policy to understand how we handle your data.
            </p>
          </header>

          <section style={{ lineHeight: '1.75', fontSize: '1rem' }}>
            <h2 style={sectionHeading}>1. Information We Collect</h2>
            <p style={paragraph}>
              We collect personal information such as name, email, profile pictures, and content you share. We also collect device and usage information to improve our services.
            </p>

            <h2 style={sectionHeading}>2. How We Use Your Information</h2>
            <p style={paragraph}>
              We use your information to provide, personalize, and improve our services, for communication, and to ensure community safety.
            </p>

            <h2 style={sectionHeading}>3. Sharing of Information</h2>
            <p style={paragraph}>
              We do not sell your data. We may share your data with service providers or if required by law.
            </p>

            <h2 style={sectionHeading}>4. Data Retention</h2>
            <p style={paragraph}>
              We retain your data as long as your account is active. Upon account deletion, we remove your personal data from our active systems.
            </p>

            <h2 style={sectionHeading}>5. Your Rights</h2>
            <ul style={unorderedList}>
              <li>You can access or update your information.</li>
              <li>You can delete your account at any time.</li>
              <li>You can request a copy of your data.</li>
            </ul>

            <h2 style={sectionHeading}>6. Children's Privacy</h2>
            <p style={paragraph}>
              Our service is not directed to individuals under 13. We do not knowingly collect personal data from children.
            </p>

            <h2 style={sectionHeading}>7. Changes to This Policy</h2>
            <p style={paragraph}>
              We may update this policy. We will notify you of significant changes through email or platform notices.
            </p>

            <h2 style={sectionHeading}>8. Contact Us</h2>
            <p style={paragraph}>
              If you have questions, contact us at <strong>yourstrength.official@gmail.com</strong>.
            </p>

            <p style={{ marginTop: '3rem', textAlign: 'center', fontWeight: '600', fontSize: '1.1rem' }}>
              Thank you for trusting Strength.
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

const unorderedList = {
  listStyle: 'disc',
  paddingLeft: '1.5rem',
  marginTop: '0.5rem',
  color: '#bbb',
};

export default PrivacyPolicy;
