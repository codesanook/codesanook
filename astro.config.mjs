import { defineConfig } from "astro/config";
import MinimalPortforlioTheme from '@dotnetthailand/minimal-portfolio-theme';

export default defineConfig({
  integrations: [
    MinimalPortforlioTheme({
      config: {
        title: "Codesanook",
        description: "Codesanook useful articles",
      },
      pages: {
      },
      overrides: {
      }
    }),
  ],
});
