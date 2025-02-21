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

interface EmailProps {
    userFirstname: string;
}

export const EmailResponse = ({
    userFirstname,
}: EmailProps) => (
    <Html>
        <Head />
        <Body className="bg-white font-sans">
            <Preview>
                The coder that codes
            </Preview>
            <Container className="mx-auto py-5">
                <Img
                    src={`resources/images/about/black.png`}
                    width="170"
                    height="50"
                    alt="michael"
                    className="mx-auto"
                />
                <Text className="text-lg leading-7">Hi {userFirstname},</Text>
                <Text className="text-lg leading-7">
                    Thanks for contacting me! I will be sure to get back to you shortly.
                </Text>
                <Section className="text-center">
                    <Button className="bg-purple-700 rounded text-white text-lg no-underline text-center block py-3" href="https://michaelbayo.uk">
                        Back to michaelbayo.uk
                    </Button>
                </Section>
                <Text className="text-lg leading-7">
                    Best,
                    <br />
                    Michael Bayouk
                </Text>
                <Hr className="border-gray-300 my-5" />
            </Container>
        </Body>
    </Html>
);

EmailResponse.PreviewProps = {
    userFirstname: 'Alan',
} as EmailProps;

export default EmailResponse;
