# SerLibre Demo - Contact Management App

## Phase 1: Backend Setup
- [x] Configure Supabase database connection
- [x] Create contacts table schema (id, name, phone, city, userId, createdAt)
- [x] Set up Supabase Auth with Google provider
- [x] Add database query helpers in server/db.ts

## Phase 2: Frontend Development
- [x] Create landing page with Google login button
- [x] Build dashboard layout with contacts table
- [x] Implement add contact form with validation
- [x] Add delete contact functionality with confirmation dialog
- [x] Style with Tailwind CSS and shadcn/ui components
- [x] Add loading and error states

## Phase 3: tRPC Integration
- [x] Create contacts.list procedure (protected)
- [x] Create contacts.create procedure (protected)
- [x] Create contacts.delete procedure (protected)
- [x] Write vitest tests for all procedures
- [x] Test auth protection on procedures

## Phase 4: Deployment
- [ ] Create GitHub repository
- [ ] Connect Vercel to GitHub
- [ ] Configure environment variables in Vercel
- [ ] Deploy and test live application
- [ ] Verify Google Auth flow end-to-end
