import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
  } from '@react-email/components';
  import * as React from 'react';

  
  interface EmailResponseProps {
    userFirstname: string;
  }
  
const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';
    
  
  export const EmailResponse = ({
    userFirstname,
  }: EmailResponseProps) => (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>
          The coder who loves to build.
        </Preview>
        <Container style={container}>
          <Img
            src={`${baseUrl}/resources/images/email/golden.jpg`}
            width="100"
            height="200"
            alt={`${baseUrl}/golden.jpg`}
            style={logo}
          />
          <Text style={paragraph}>Hi {userFirstname},</Text>
          <Text style={paragraph}>
            Thank you for contacting me. I will get back to you as soon as possible!
          </Text>
          <Section style={btnContainer}>
            <Button style={button} href="https://michaelbayo.uk">
              Back to michaelbayo.uk
            </Button>
          </Section>
          <Text style={paragraph}>
            Best,
            <br />
            Michael J. Bayouk
          </Text>
          <Hr style={hr} />
          <Section style={btnContainer}>
            <Text style={footer}>
              <a href="https://github.com/mykalbayouk" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none' }}>
                GitHub
              </a>
            </Text>
            <Text style={footer}>
              <a href="https://linkedin.com/in/michaelbayouk" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none' }}>
                LinkedIn
              </a>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
  
  EmailResponse.PreviewProps = {
    userFirstname: 'Alan',
  } as EmailResponseProps;
  
  export default EmailResponse;
  
  const main = {
    backgroundColor: '#231E26FF',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
    borderRadius: '8px',
  };
  
  const logo = {
    margin: '0 auto',
    color: '#ffffff',
    textAlign: 'center' as const,
  };
  
  const paragraph = {
    fontSize: '16px',
    lineHeight: '26px',
    color: '#ffffff',
  };
  
const btnContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
};
  
  const button = {
    backgroundColor: '#B851E8FF',
    borderRadius: '3px',
    color: '#fff',
    fontSize: '16px',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'block',
    padding: '12px',
  };
  
  const hr = {
    borderColor: '#cccccc',
    margin: '20px 0',
  };
  
  const footer = {
    color: '#8898aa',
    fontSize: '12px',
  };

  
  