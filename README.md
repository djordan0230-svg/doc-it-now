\# Doc It Now



A modern, mobile-first marketing site and guided document form for creating legal-style documents.



Built with \*\*Next.js 14\*\* (App Router), \*\*Tailwind CSS\*\*, and \*\*TypeScript\*\*.



\---



\## Run it locally (3 steps)



You need \[Node.js 18.17+](https://nodejs.org) installed. That's it.



```bash

\# 1. Install dependencies

npm install



\# 2. Start the dev server

npm run dev



\# 3. Open it

\# Go to http://localhost:3000 in your browser

```



The site hot-reloads as you edit files.



\---



\## Deploy to the web (free, 2 minutes)



The easiest way is \*\*Vercel\*\* (made by the same team as Next.js):



1\. Push this folder to a new GitHub repo.

2\. Go to \[vercel.com/new](https://vercel.com/new) and sign in with GitHub.

3\. Import your repo, click \*\*Deploy\*\*, and wait \~60 seconds.



Vercel auto-detects Next.js. No configuration needed.



\---



\## File structure



```

app/

&#x20; layout.tsx          Root layout + Inter font

&#x20; globals.css         Tailwind directives + base styles

&#x20; page.tsx            Homepage (composes all sections)

&#x20; form/page.tsx       Typeform-style guided form with success screen



components/

&#x20; Navbar.tsx

&#x20; Hero.tsx

&#x20; HowItWorks.tsx

&#x20; TrustSection.tsx

&#x20; NotarySection.tsx

&#x20; CTASection.tsx

&#x20; Footer.tsx



package.json          Dependencies + scripts

next.config.js        Next.js config (empty default)

postcss.config.js     Tailwind + autoprefixer

tailwind.config.ts    Tailwind theme

tsconfig.json         TypeScript config

```



\---



\## Things to do before launch



Search the code for `TODO` — there are a few clearly marked spots where placeholder content needs to be replaced:



\- \*\*`components/Footer.tsx`\*\* — legal disclaimer needs attorney review.

\- \*\*`app/form/page.tsx`\*\* — success-screen notice and the "Download PDF" button both have TODOs. The download button currently shows an alert; replace it with a real API call once your document generation pipeline is built.



\---



\## How to expand it



\*\*More document types.\*\* The form currently asks questions for a financial Power of Attorney. To add new document types, extract the step definitions and the `POWERS` array from `app/form/page.tsx` into config files like `lib/forms/power-of-attorney.ts`, then make the route dynamic: `app/form/\[docType]/page.tsx`. Each new document becomes a new config file.



\*\*Real document generation.\*\* Add an API route at `app/api/generate/route.ts` that takes the form data and returns a PDF. Good libraries: `docxtemplater` (fills a `.docx` template) or `pdf-lib` (builds a PDF directly). Wire the "Download PDF" button on the success screen to `fetch('/api/generate')`.



\*\*Save progress.\*\* Add \[NextAuth](https://next-auth.js.org) with magic-link email login, and persist form state to a database (Supabase or Neon are free and simple) after every step. Users can leave and resume — important for anything legal.



\*\*Notary integration.\*\* The notary callout currently links to `#`. Replace with a real flow: embed an online-notary provider (Notarize, BlueNotary, Proof) or let users book a session after generation.



\*\*Analytics.\*\* Drop \[Plausible](https://plausible.io) or \[PostHog](https://posthog.com) into `app/layout.tsx` and fire events for each step view. The metric that matters most is drop-off per step — it tells you which question is losing users.

