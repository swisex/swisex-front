import React from "react";
import ReactMarkdown from "react-markdown";

const intro = `
# Swise Technical Test

This exercise is an opportunity for you to show us your thought process as well as your technical expertise and present it to Swise’s technical team for review. It is expected that it will take several hours to complete the different challenges. We expect the test to be completed within 3 days, however, if more time is needed or if you have any questions about the test please don’t hesitate in reaching out to us.

Once you have completed all challenges please send an email to <rd@swise.ai> and <rodrigo@swise.ai> with the submissions.
Feel free to ask any questions, timeframe to complete all challenges is 3days.
`;

export default function Challenge1() {
  return <ReactMarkdown children={intro} />;
}
