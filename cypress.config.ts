import { defineConfig } from 'cypress'
import * as dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  env: {
    GITHUB_PASSWORD: process.env.GITHUB_PASSWORD,
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  },

  e2e: {
    experimentalModifyObstructiveThirdPartyCode: true,
    setupNodeEvents(on, config) {},
  },
})
