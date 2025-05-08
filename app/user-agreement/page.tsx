import React from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

const UserAgreement = () => {
  return (
    <div
      style={{
        backgroundColor: 'black',
        color: '#eaeaea',
        fontFamily: 'Inter, sans-serif',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Navbar />

      <main
        style={{
          flex: '1',
          display: 'flex',
          justifyContent: 'center',
          padding: '2rem',
        }}
      >
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
              User Agreement and End-User License Agreement (EULA)
            </h1>
            <p style={{ fontSize: '1rem', color: '#aaa' }}>
              Effective Date: May 8, 2025
            </p>
          </header>

          <section style={{ lineHeight: '1.75', fontSize: '1rem' }}>
            {userAgreementContent.split('\n').map((line, index) => {
              if (line.trim().startsWith('‍')) line = line.replace('‍', ''); // Remove zero-width characters
              if (line.startsWith('1.') || /^[1-9]\./.test(line))
                return (
                  <h2 key={index} style={sectionHeading}>
                    {line}
                  </h2>
                );
              else if (line.match(/^[a-f]\)/))
                return (
                  <p key={index} style={{ ...paragraph, paddingLeft: '1rem' }}>
                    {line}
                  </p>
                );
              else if (line.startsWith('-'))
                return (
                  <li key={index} style={{ ...paragraph, listStyleType: 'disc', marginLeft: '1.5rem' }}>
                    {line.replace('-', '').trim()}
                  </li>
                );
              else if (line.trim())
                return (
                  <p key={index} style={paragraph}>
                    {line}
                  </p>
                );
              else return <br key={index} />;
            })}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const sectionHeading = {
  marginTop: '2rem',
  marginBottom: '1rem',
  fontSize: '1.25rem',
  fontWeight: '600',
  color: '#fff',
};

const paragraph = {
  marginBottom: '1rem',
  color: '#ddd',
};

const userAgreementContent = `
Welcome to Strength! Our mission is to create a vibrant sports community where athletes, enthusiasts, and professionals connect, share, and grow. By accessing or using our platform, you agree to the following terms, which ensure a safe, productive, and fair environment for all users.

1. Agreement Overview

1.1 Scope of Agreement
This User Agreement (UA) and End-User License Agreement (EULA) governs your use of Strength’s services, apps, websites, and other associated platforms (“Services”).

1.2 Acceptance of Terms
By registering, accessing, or using our Services, you acknowledge that you have read, understood, and agree to these terms. If you do not agree, discontinue using the Services immediately.

2. License to Use Strength Services

2.1 Grant of License
Subject to your compliance with these terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to access and use Strength for personal and non-commercial purposes.

2.2 Restrictions
By downloading, accessing, or using the platform, you agree to abide by the following restrictions. You shall not, under any circumstances:

a) Reverse Engineering or Tampering
Reverse-engineer, decompile, disassemble, or attempt to derive the source code, algorithms, or any component of the platform, or otherwise tamper with any security features or functionalities.

b) Malicious or Unauthorized Activities
- Use the platform to distribute, transmit, or facilitate the spread of malware, viruses, or other harmful code.
- Send spam, unauthorized advertising, or promotional content to users or third parties.
- Engage in any activity that disrupts the platform’s operations or compromises its integrity.

c) Unauthorized Transfers or Access
Transfer, sublicense, rent, lease, or assign your account, license, or any rights to the platform without prior written consent from Strength.

d) Improper Use of Intellectual Property
Copy, reproduce, modify, distribute, or create derivative works from any part of the platform, including UI/UX designs, content, or proprietary materials, without explicit authorization.

e) Misuse of Services
Access or use the platform for purposes not expressly permitted under this Agreement, including any illegal, harmful, or fraudulent activities.

f) Bypassing Access Restrictions
Circumvent, disable, or interfere with any features related to security, authentication, or access restrictions within the platform.

2.3 Termination of License
This license is valid until terminated. Violation of these terms may result in immediate suspension or termination of access to the Services.

2.4 Zero Tolerance Policy
We maintain a zero tolerance policy for objectionable content and abusive behavior. By using our Services, you agree not to:
- Post, share, or distribute content that is harmful, harassing, defamatory, obscene, sexually explicit, or otherwise objectionable.
- Engage in abusive behavior, including but not limited to bullying, harassment, hate speech, threats, or discrimination based on race, gender, religion, ethnicity, or other protected categories.
- Use the platform to incite violence, promote illegal activities, or spread misinformation.
- Exploit or harm minors in any way, including through inappropriate content or communications.

Consequences of Violation
Violations of this policy may result in:
- Immediate suspension or termination of your account without prior notice.
- Removal of objectionable content from the platform.
- Legal action, if necessary, to protect the safety and integrity of our users and platform.

Reporting Abuse
Users can report objectionable content or abusive behavior directly through the app’s reporting tools or by contacting our support team at yourstrength.official@gmail.com. Strength will review and take appropriate action promptly.

3. User Obligations

3.1 Eligibility
You must be at least 13 years old to use the Services. If the law in your jurisdiction requires a higher minimum age, you must comply with that age requirement.

3.2 Account Security
Keep your account credentials confidential. Notify us immediately of unauthorized access to your account.

3.3 Content Sharing
When you share content (e.g., posts, clips, or videos) through Strength:
a) Ensure that the content complies with applicable laws and respects intellectual property rights.
b) Grant Strength a non-exclusive, worldwide, royalty-free license to host, display, and distribute the content solely to provide and improve our Services.

4. Rights and Responsibilities

4.1 Your Rights
You retain ownership of the content you upload. You may delete your content, and we will remove it from active visibility, subject to reasonable backup retention policies.

4.2 Strength’s Rights
We may modify, limit, or suspend Services as necessary. We reserve the right to remove content that violates these terms or applicable laws.

4.3 Third-Party Content
Strength is not liable for the accuracy, legality, or safety of content shared by other users. Interact with third-party content or services at your own risk.

5. Payments and Subscriptions

5.1 Fees
Certain features may require payment. By purchasing, you agree to the applicable fees, taxes, and terms.

5.2 Auto-Renewals
Subscriptions renew automatically unless canceled before the renewal date.

5.3 Refund Policy
Refunds will be provided only as outlined in our subscription terms.

6. Limitation of Liability
Strength provides its Services “as is” without warranties of any kind. We are not responsible for indirect, incidental, or consequential damages arising from your use of the platform. Our total liability will not exceed the amount paid (if any) for accessing the Services during the last six months.

7. Termination
You may terminate your account at any time by contacting support. Strength reserves the right to terminate or suspend your account for violations of this Agreement, fraudulent activities, or at our sole discretion.

8. Governing Law and Dispute Resolution

8.1 Governing Law
This Agreement is governed by the laws of India.

8.2 Dispute Resolution
Disputes will be resolved through arbitration conducted in English in accordance with the Arbitration and Conciliation Act, 1996.

9. Privacy Policy
Your use of Strength is subject to our Privacy Policy, which outlines how we collect, use, and store your personal data.

10. General Terms
a) Strength reserves the right to modify this Agreement. Updates will be notified, and continued use implies acceptance.
b) If any provision of this Agreement is deemed unenforceable, the remaining provisions remain effective.

Contact Us
For questions or concerns, reach out to:
Email: yourstrength.official@gmail.com
Address: Strength HQ, Sector V, Kolkata, India
`;

export default UserAgreement;
