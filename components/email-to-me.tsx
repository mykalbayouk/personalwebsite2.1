import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  email: string;
  message: string;
}

export const EmailTempToMe: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  message,
}) => (
  <div style={{ padding: '1rem', backgroundColor: '#f7fafc', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
    <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2d3748' }}>Message Received From, {firstName}!</h1>
    <p style={{ color: '#718096' }}>Email: {email}</p>
    <p style={{ color: '#718096' }}>Message: {message}</p>
  </div>
);