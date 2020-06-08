/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React, {useEffect} from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="https://unpkg.com/scrollreveal"
      src="https://unpkg.com/scrollreveal"
      crossOrigin="anonymous"
      defer
    />,

    <script
    dangerouslySetInnerHTML={{
        __html: `
        setTimeout(() => {
            ScrollReveal().reveal(".module", {
            delay:0,
            distance:"80px",
            origin:"bottom",
            duration:1000,
            viewFactor: 0.15
            });
        }, 250);

        setTimeout(() => {
            ScrollReveal().reveal(".post", {
            delay:0,
            distance:"80px",
            origin:"bottom",
            duration:1000,
            viewFactor: 0.15
            });
        }, 250);
            `,
    }}
    />
  ])
}