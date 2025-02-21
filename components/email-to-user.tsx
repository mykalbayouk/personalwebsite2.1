import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface EmailResponseProps {
  userFirstname: string;
}

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
        <Section style={section}>
          <Row>
            <Column style={columnLeft}>
              <Img
                src="https://www.michaelbayo.uk/resources/images/email/golden.JPG"
                alt="Michael Bayouk"
                style={logo}
              />
            </Column>
            <Column style={columnRight}>
              <Text style={heading}>Hi {userFirstname},</Text>
              <Text style={paragraph}>
                Thank you for contacting me. I will get back to you as soon as possible!
              </Text>
              <Text style={paragraph}>
                If you have any questions feel free to reach out to me on LinkedIn or GitHub.
              </Text>
              <Button style={button} href="https://michaelbayo.uk">
                Back to michaelbayo.uk
              </Button>
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
            </Column>
          </Row>
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
  overflowY: 'auto',
  overflowX: 'hidden',
  color: '#ffffff',
  fontSize: '16px',
  lineHeight: '24px',
  padding: '5',
  margin: '5',
  WebkitTextSizeAdjust: '100%',
  MsTextSizeAdjust: '100%',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  boxSizing: 'border-box',
  letterSpacing: '0.5px',
  textTransform: 'none',

};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  borderRadius: '8px',
  overflowY: 'auto',
  maxHeight: '100vh',
};

const section = {
  margin: '16px 0',
};

const columnLeft = {
  width: '50%',
  paddingRight: '16px',
};

const columnRight = {
  width: '50%',
  paddingLeft: '16px',
};

const logo = {
  width: '100%',
  height: 'auto',
  borderRadius: '12px',
  objectFit: 'cover' as const,
};

const heading = {
  fontSize: '24px',
  fontWeight: 'bold' as const,
  color: '#ffffff',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '24px',
  color: '#ffffff',
};

const btnContainer = {
  textAlign: 'center' as const,
  marginTop: '24px',
};

const button = {
  backgroundColor: '#B851E8FF',
  borderRadius: '8px',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '12px 24px',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
};