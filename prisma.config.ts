import { defineConfig } from '@prisma/config'

export default defineConfig({
  datasource: {
    url: "postgresql://neondb_owner:npg_e8pLT3auWdHA@ep-red-forest-a1i68cch-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  },
})
