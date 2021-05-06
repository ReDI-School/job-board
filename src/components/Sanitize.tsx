import React from 'react';
import dompurify from 'dompurify';
// import snarkdown from 'snarkdown';

/**
 * Sanitize a string of HTML with dompurify - output ready to input to dangerouslySetInnerHTML
 */
const purify = (dirty: string) => ({
  __html: dompurify.sanitize(dirty, { USE_PROFILES: { html: true } })
});

const parseLineBreaks = (content: string): string => {
  return content.replaceAll(
    /\n(.+)\n/g,
    '<p>$1</p>'
  );
};

const parseHeaders = (content: string): string => {
  return content.replaceAll(
    /\n(.{10,40})\n/g,
    '<h3>$1</h3>'
  );
};

const parseLists = (content: string): string => {
  return content.replaceAll(
    /\n{1,2}.{0,4}\*(.+)/g,
    '<li>$1</li>'
  );
};

/**
 * Sanitize and render a string of HTML or markdown (markdown will be parsed)
 *
 * @param param0.htmlOrMarkdown - A string of markdown or html to render
 * @param param0.inline - Return an inline element
 */
const Sanitize = ({ htmlOrMarkdown, inline }: { htmlOrMarkdown: string, inline?: boolean }) => {
  // const innerHTML = purify(snarkdown(htmlOrMarkdown));
  const innerHTML = purify(
    parseLineBreaks(parseHeaders(parseLists(htmlOrMarkdown)))
  );

  if (inline) {
    return <span dangerouslySetInnerHTML={innerHTML} />;
  } else {
    return <div dangerouslySetInnerHTML={innerHTML} />;
  }
};

export default Sanitize;
