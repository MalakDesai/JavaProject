import React from "react";
import {ArgTypes, Meta, Title, Subtitle, Description, Stories} from '@storybook/blocks';

const preview = {
  parameters: {
    server: {
      url: process.env.STORYBOOK_SERVER_URL || "https://wisdwd.ddev.site/storybook/stories/render",
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      // Auto-maps variable names to control types.
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
      // Source will not render in docs unless we have exported components, which we cannot do with JSON.
      // Unless we change our stories to fit with CSF (Component Story Format), we cannot render the HTML.
      canvas: {
        // Turns off source code entirely
        sourceState: 'none',
      },
      page: () => (
        <>
          <Meta />
          <Title />
          <Subtitle />
          <Description />
          <Stories />
          <ArgTypes />
        </>
      ),
      story: {
        inline: true,
        iframeHeight: "100%",
      },
    },
  },
};

export default preview;
