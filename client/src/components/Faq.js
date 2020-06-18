import React from "react";
import { Container, Row, Accordion, Card } from "react-bootstrap";
import { Icon } from "react-icons-kit";
import { arrowDown2 } from "react-icons-kit/icomoon/arrowDown2";

function Faq() {
  const faqs = [
    {
      question: "Is it 100% free?",
      answer: "Yes.",
      key: "0",
    },
    {
      question: "Where do the experts come from?",
      answer: "Our experts are volunteer professionals from various fields of expertise.",
      key: "1",
    },
    {
      question: "Who is able to see my post?",
      answer: "It 's up to you. You can make your post either public or private. Public posts can be seen by everyone while private posts can only be seen by our experts.",
      key: "2",
    },
    {
      question: "Who is able to answer my post?",
      answer: "Only experts are able to answer to posts.",
      key: "3",
    },
    {
      question: "What happens after I post my problem?",
      answer: "An expert will start a session with you to try and find a solution. After your session with the expert has concluded, a solution will be added to your post.",
      key: "4",
    },
    {
      question: "Why would I make my post public?",
      answer: "By making your post public, the solution will be visible to everyone. This way someone with a similar problem will be able to get help faster without the need to create a post.",
      key: "5",
    },
    {
      question: "Can anyone become an expert?",
      answer: "No. Experts are hand-picked by our administration team after they have been interviewed and they have proved that they are actually able to provide counsil.",
      key: "6",
    },
    {
      question: "I'm an expert. How can I apply?",
      answer: "Follow the link on the home page, fill out the application and we will contact you on the email you provided as soon as possible.",
      key: "7",
    }
  ];

  return (
    <Container>
      <Row className="my-4">
        <h1>FAQ</h1>
      </Row>
      <Row className="d-flex flex-column">
        <Accordion>
          {faqs.map((faq) => (
            <FaqCard
              key={faq.key}
              question={faq.question}
              answer={faq.answer}
              eventKey={faq.key}
            />
          ))}
        </Accordion>
      </Row>
    </Container>
  );
}

const FaqCard = ({ question, answer, eventKey }) => (
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey={eventKey}>
      <Icon icon={arrowDown2} className="mr-2" />
      {question}
    </Accordion.Toggle>
    <Accordion.Collapse eventKey={eventKey}>
      <Card.Body>{answer}</Card.Body>
    </Accordion.Collapse>
  </Card>
);

export default Faq;
