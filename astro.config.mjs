// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://Waximusglub.github.io',
  base: '/portfolio_SF/',
  integrations: [tailwind(), icon(),react()],
});