
  # Build website with background

  This is a code bundle for Build website with background. The original project is available at https://www.figma.com/design/6cqdXxHTqgON34tXbMYvMX/Build-website-with-background.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Local content API and Admin dashboard

  The portfolio now has a local JSON content API and a protected Admin dashboard at `/admin`.

  1. Copy `.env.example` to `.env`.
  2. Set a long, unique `ADMIN_PASSWORD`. Never use a `VITE_` prefix for this value; Vite exposes those variables to the browser.
  3. In one terminal, start the content API:

     ```powershell
     npm run content-api
     ```

  4. In another terminal, start Vite:

     ```powershell
     npm run dev
     ```

  5. Open `http://127.0.0.1:5174/admin` and sign in with `ADMIN_PASSWORD`.

  Content is persisted in `server/content.json`. Uploaded PNG, JPEG, WebP, and GIF assets are validated (5 MB maximum) and stored under `public/uploads/`.

  The API verifies the password server-side, rate limits failed login attempts, uses expiring in-memory tokens, and does not hard-code secrets. For production, run the API behind HTTPS and replace the JSON service with a durable server-side provider such as Supabase, Firebase, or your own API; the client service is isolated in `src/lib/content-service.ts` for that change.

  ## Publish with Supabase and Vercel (recommended)

  The project is ready to use Supabase for the public content, Arabic content, admin login, and uploaded images. This replaces the local JSON API in production.

  1. Create a new Supabase project.
  2. In **SQL Editor**, open and run [001_portfolio_cms.sql](supabase/migrations/001_portfolio_cms.sql).
  3. In **Authentication → Users**, create your admin user with an email address and a strong password.
  4. Run the final commented SQL command in the migration file, replacing the sample email with that admin email. This grants that user permission to edit the CMS.
  5. In **Project Settings → API**, copy the **Project URL** and the public **anon key**.
  6. Add the following Environment Variables in Vercel, then deploy:

     ```text
     VITE_SUPABASE_URL=https://your-project.supabase.co
     VITE_SUPABASE_ANON_KEY=your-public-anon-key
     ```

  7. Open `/admin`, sign in using the Supabase admin email and password, then select **English** or **العربية** before editing and saving the respective content.

  `VITE_SUPABASE_ANON_KEY` is designed to be public. Never add the Supabase `service_role` key to Vercel or to this website.
  
