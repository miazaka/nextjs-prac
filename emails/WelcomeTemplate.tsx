import React from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
  Tailwind,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview> yo</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Text className="text-white">kjvcjlvf</Text>
            <Link href="egreg.com">egreg.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;
