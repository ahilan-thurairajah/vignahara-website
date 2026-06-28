# Vignahara Inc. Website Solution Overview

## Company Background

**Vignahara Inc.** is a real estate investment company operating since 2015.

### Current Operations
- Own residential rental properties in:
  - Barrie
  - Orillia
  - Oshawa

### Active Projects
- Building a 50-unit apartment complex in Orillia

### Mission & Vision
We partner with other organizations to provide financially feasible, socially responsible, and environmentally friendly housing solutions in Ontario, with the scope of expanding into other provinces in Canada.

---

## Website Purpose

The website serves as a comprehensive business showcase and partnership portal for Vignahara Inc.

### Primary Goals
- **Funding Applications**: Support applications for mortgages, grants, and forgivable loans from:
  - Government agencies
  - Banks and financial institutions
  - Private investors

- **Partnership Development**: Provide detailed information to organizations interested in partnering with or supporting Vignahara Inc.

### Target Audiences
- **Financial Partners**: Banks, investors, government funding bodies
- **Business Partners**: Organizations seeking collaboration opportunities
- **Vendors & Service Providers**: 
  - Property managers
  - Contractors
  - Other service providers
- **Prospective Tenants**: Individuals interested in understanding our mission and values

### Proptech Innovation
As a proptech company, Vignahara Inc. leverages AI technology to identify and implement innovative housing solutions.

---

## Website Structure

### Key Sections

1. **Home Page**
   - Company overview presented in slideshow format
   - Video content showcasing our mission and operations
   - Highlights our proptech approach and AI-driven solutions

2. **Rental Properties**
   - Summary and portfolio of existing rental properties
   - Properties in Barrie, Orillia, and Oshawa

3. **Development Projects**
   - Current and upcoming development initiatives
   - Featured: 50-unit apartment complex in Orillia

4. **Market Research**
   - Industry insights and analysis
   - Market trends and opportunities

5. **Contact & Inquiry**
   - Contact information
   - Inquiry forms for partners, investors, and stakeholders

---

## Technology Stack

### Frontend
- **React** or **Next.js** - Modern, component-based UI framework
- Responsive design for desktop and mobile devices

### Backend
- **Node.js with Express** - Server-side JavaScript runtime
- **Firebase Cloud Functions** - Serverless backend logic

### Database & Storage
- **Firebase Firestore** - NoSQL cloud database for real-time data
- **Firebase Cloud Storage** - Media storage for images, videos, and documents
- Future consideration: **Google Cloud SQL (PostgreSQL)** for complex relational data

### Hosting & Infrastructure
- **Firebase Hosting** - Fast, secure, CDN-backed hosting with SSL
- **Firebase Authentication** - User authentication and authorization
- **Google Cloud Platform** - Integration with other Google services

### Key Benefits
- **Cost-effective**: Pay-as-you-grow model with generous free tier
- **Scalable**: Serverless architecture scales automatically
- **Maintainable**: Large developer community and extensive documentation
- **Integrated**: Seamless integration with existing Google services

---

## Functional Requirements

### Initial Version (Phase 1)
Focus: **Public-facing information portal**

- **Public Access**: No authentication required
- **Content Display**: 
  - Company overview with multimedia (slideshow, videos)
  - Property portfolio showcase
  - Development projects information
  - Market research insights
- **Contact & Inquiry Forms**: 
  - Contact form for general inquiries
  - Partnership inquiry form
  - Email notifications for form submissions
- **Responsive Design**: Mobile and tablet friendly
- **Analytics**: Track visitor engagement and page views

### Future Enhancements (Phase 2+)

- **User Authentication**: Firebase Authentication integration
- **Role-Based Access Control**:
  - Investor portal (financial reports, investment opportunities)
  - Partner portal (collaboration tools, shared documents)
  - Tenant portal (lease information, maintenance requests)
  - Admin portal (content management, user management)
- **Document Management**: Upload and share documents securely
- **Content Management System**: Admin interface for updating properties and projects
- **Advanced Analytics**: Detailed user behavior and engagement tracking
- **Multi-language Support**: French/English for Canadian market

---

## Project Timeline

**Target Launch**: 2-4 weeks from project start

**Phase 1 Deliverables**:
- Public-facing website with core sections
- Contact and inquiry forms
- Responsive design
- Initial content and media

---

## Branding & Design

### Assets
- Existing logo available
- AI-generated imagery for properties and marketing
- Color scheme: To be defined
- Brand guidelines: To be developed

### Design Approach
- Professional and trustworthy appearance
- Emphasis on sustainability and social responsibility
- Modern proptech company aesthetic
- Clean, accessible interface

### Brand Values to Communicate
- **Trust & Stability**: Established since 2015, reliable partner
- **Innovation & Forward-thinking**: Proptech and AI-driven solutions
- **Warmth & Community**: Socially responsible housing
- **Environmental Consciousness**: Environmentally friendly solutions
- **Financial Strength**: Credible investment partner

### Color Scheme

**Primary Color:**
- Deep Blue: `#1e3a5f` - Trust, professionalism, financial stability

**Secondary Color:**
- Warm Orange: `#f59e0b` - Innovation, energy, warmth, accessibility

**Neutral Colors:**
- White: `#ffffff` - Clean, modern, spacious
- Light Gray: `#f3f4f6` - Backgrounds, subtle sections
- Dark Gray: `#374151` - Body text, readability

**Usage Guidelines:**
- Primary blue for headers, navigation, key sections
- Orange for call-to-action buttons, highlights, accents
- White and gray for backgrounds and content areas

---

## Content Strategy

### Multi-language Support
- **Content Storage**: Firestore database for all website content
- **Internationalization (i18n)**: Support for multiple languages (English, French)
- **Dynamic Content**: All text, descriptions, and metadata retrieved from Firestore
- **Language Switching**: User-selectable language preference
- **Content Management**: Easy updates through admin interface or Firebase Console

### Content Schema Design
Firestore collections structure:
- `content` - General website content (about, mission, etc.)
- `properties` - Rental property listings
- `projects` - Development projects
- `research` - Market research articles
- `settings` - Site configuration and metadata

Each document will include language-specific fields (e.g., `en`, `fr`) for internationalization.

### Initial Content Approach
- **Placeholder Content**: Use Lorem Ipsum and random text for all sections
- **Placeholder Images**: AI-generated or stock images for properties and projects
- **Placeholder Videos**: Video placeholders or stock footage for demonstrations
- **Template Structure**: All sections will have proper layout and structure ready for real content
- **Content Schema**: Database/XML structure designed to accommodate all content types and languages

### Content to be Developed
Each section will include placeholders for:

1. **Home Page**:
   - Company overview text (multi-language)
   - Mission statement (multi-language)
   - Slideshow images (5-7 slides) with captions
   - Introduction video with subtitles/descriptions

2. **Rental Properties**:
   - Property cards with images, descriptions, locations (multi-language)
   - Property features and amenities (multi-language)
   - Rental information

3. **Development Projects**:
   - Project descriptions and timelines (multi-language)
   - Architectural renderings or images
   - Project milestones and updates (multi-language)

4. **Market Research**:
   - Industry insights and articles (multi-language)
   - Market trends and data
   - Research reports or summaries (multi-language)

5. **Contact & Inquiry**:
   - Company contact information
   - Office locations
   - Form fields for inquiries (multi-language labels)

**Content Migration Plan**: Real content to be added by client after initial launch or during development phase.

---

## Third-Party Integrations

### CRM Integration
- **Twenty CRM**: Open-source CRM integration for managing inquiries and contacts
  - Website: https://twenty.com/
  - Form submissions to be sent to Twenty CRM
  - Contact management and follow-up tracking

### Additional Services
- **Google Analytics**: Website traffic and user behavior tracking
- **Google Maps**: Property location displays
- **Email Service**: Firebase or SendGrid for form notifications
- **Firebase Services**: Authentication, hosting, database, storage

---

## SEO Strategy

### Target Keywords
- Real estate investment Ontario
- Affordable housing solutions [Barrie/Orillia/Oshawa]
- Sustainable housing development Canada
- Proptech real estate investment
- Socially responsible housing partners
- Housing investment opportunities Ontario

### Technical SEO Implementation
- **Server-Side Rendering (SSR)**: Next.js for fast page loads and SEO-friendly content
- **Automatic Sitemap Generation**: XML sitemap for search engines
- **Meta Tags**: Unique title, description, and keywords for each page
- **Mobile-Friendly**: Responsive design for all devices
- **Performance Optimization**: Fast loading times (Core Web Vitals)
- **Structured Data**: JSON-LD schema markup for organization, properties, and breadcrumbs

### Local SEO
- **Google Business Profile**: Listings for each city location (Barrie, Orillia, Oshawa)
- **Location-Based Content**: City-specific property pages
- **Google Maps Integration**: Embedded maps for property locations
- **Local Keywords**: City and region-specific optimization

### Bilingual SEO
- **Language-Specific URLs**: `/en/` and `/fr/` paths
- **hreflang Tags**: Proper language and region targeting
- **Translated Metadata**: Localized titles, descriptions, and keywords

### Content Marketing (Future)
- **Blog/News Integration**: External blogging platform to be integrated in Phase 2+
- **Content Syndication**: Import blog posts and news from external CMS
- **API Integration**: Connect with external content management tools

---

## Domain & Hosting

### Domain
- **Domain Name**: vignahara.com (registered)
- **DNS Configuration**: Update DNS records to point to Firebase Hosting
- **SSL Certificate**: Automatic HTTPS via Firebase Hosting

### Hosting Configuration
- **Primary Hosting**: Firebase Hosting
- **CDN**: Global content delivery network through Firebase
- **Region**: North America (optimized for Canadian users)
- **Custom Domain Setup**: Connect vignahara.com to Firebase project
- **Subdomain Support**: www.vignahara.com redirect to vignahara.com (or vice versa)

### Deployment
- **Production**: vignahara.com
- **Staging/Development**: Firebase preview URLs for testing before production deployment

---

## Performance & Accessibility

### Performance Strategy
- **Static Site Generation (SSG)**: Pre-render pages at build time for maximum performance
- **Incremental Static Regeneration (ISR)**: Regenerate static pages when database content is updated
- **Image Optimization**: Next.js Image component for automatic optimization and lazy loading
- **Code Splitting**: Automatic code splitting for faster initial page loads
- **Caching**: Aggressive CDN caching for static assets
- **Performance Targets**:
  - First Contentful Paint (FCP): < 1.5 seconds
  - Largest Contentful Paint (LCP): < 2.5 seconds
  - Time to Interactive (TTI): < 3.5 seconds
  - Lighthouse Score: 90+ across all metrics

### Accessibility Compliance
- **AODA Compliance**: Accessibility for Ontarians with Disabilities Act (AODA) Level AA
- **WCAG 2.1 Level AA**: Web Content Accessibility Guidelines compliance
- **Keyboard Navigation**: Full keyboard accessibility for all interactive elements
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Color Contrast**: Minimum 4.5:1 contrast ratio for text
- **Focus Indicators**: Clear visual focus states for all interactive elements
- **Alt Text**: Descriptive alternative text for all images
- **Accessible Forms**: Proper labels, error messages, and validation feedback
- **Skip Links**: Skip to main content navigation
- **Responsive Text**: Support for text resizing up to 200%
- **Language Declaration**: Proper HTML lang attributes for bilingual content

### Browser & Device Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile Devices**: iOS Safari, Android Chrome
- **Tablets**: iPad, Android tablets
- **Desktop**: Windows, macOS, Linux

---

## Development Workflow

### Version Control
- **Repository**: GitHub
- **Branching Strategy**:
  - `main` branch: Production-ready code (www.vignahara.com)
  - `develop` branch: Development code (test.vignahara.com)
  - Feature branches: `feature/[feature-name]`
  - Hotfix branches: `hotfix/[issue-name]`

### Development Environment
- **Primary Tool**: GitHub Copilot for AI-assisted development
- **Local Development**: Node.js environment with Firebase emulators
- **Code Editor**: Visual Studio Code (recommended)

### CI/CD Pipeline
- **Automation Platform**: GitHub Actions
- **Automated Processes**:
  - Code linting and formatting (ESLint, Prettier)
  - Automated testing (unit tests, integration tests)
  - AI-powered code review
  - Build verification
  - Security scanning

### Testing Strategy
- **AI-Driven Testing**: AI agents for test script generation and code review
- **Test Types**:
  - Unit tests (Jest)
  - Component tests (React Testing Library)
  - End-to-end tests (Cypress or Playwright)
  - Accessibility tests (axe-core)
  - Performance tests (Lighthouse CI)

### Deployment Workflow

**Test Environment (test.vignahara.com)**:
- **Access**: Authentication required (Firebase Auth)
- **Automatic Deployment**: On merge to `develop` branch (after passing CI checks)
- **Manual Approval**: Required before deployment
- **Purpose**: Preview and testing before production

**Production Environment (www.vignahara.com)**:
- **Access**: Public, no authentication required
- **Manual Approval**: Required before deployment
- **Deployment Trigger**: Manual promotion from test after approval
- **Source**: Merge from `develop` to `main` branch

### Deployment Approval Process
1. Code merged to `develop` branch
2. CI/CD pipeline runs automated tests and checks
3. Notification sent for test deployment approval
4. Manual approval by project owner
5. Deploy to test.vignahara.com
6. Review and testing on test environment
7. Notification sent for production deployment approval
8. Manual approval by project owner
9. Deploy to www.vignahara.com

---

## Team & Resources

### Development Team
- **Phase 1**: Sole developer (project owner)
- **Phase 2+**: Potential expansion with additional developers

### Content Management
- **Phase 1**: Direct Firestore Console access for content updates
- **Phase 2+**: Custom admin/CMS interface for non-technical users
  - User-friendly content editor
  - Media upload and management
  - Property and project management
  - User role management
  - Analytics dashboard

### Training & Documentation
- **Developer Documentation**: Code documentation, architecture diagrams, setup guides
- **User Documentation**: Content management guides (for Phase 2+ admin interface)
- **API Documentation**: Firebase integration and custom endpoints

---

## Monitoring & Maintenance

### Error Tracking & Logging
- **Google Cloud Logging**: Built-in logging with Firebase (free tier)
- **Sentry** (Optional): Enhanced error tracking with detailed context and user-friendly interface (free tier)

### Analytics & User Behavior
- **Google Analytics 4 (GA4)**: Comprehensive website analytics (free)
- **Firebase Analytics**: Mobile and web app analytics with Firebase integration (free)
- **Conversion Tracking**: Form submissions, inquiry tracking, page engagement

### Performance Monitoring
- **Firebase Performance Monitoring**: Real-time performance data (free)
- **Google Cloud Monitoring**: Infrastructure and application monitoring
- **Lighthouse CI**: Automated performance testing in CI/CD pipeline
- **Core Web Vitals Tracking**: LCP, FID, CLS monitoring

### Uptime & Availability
- **Google Cloud Monitoring Uptime Checks**: Basic uptime monitoring (free)
- **UptimeRobot**: Enhanced uptime monitoring with email alerts (free for up to 50 monitors)
- **Status Alerts**: Instant notifications for downtime or issues

### Security Monitoring
- **Firebase Security Rules**: Database access control and monitoring
- **Google Cloud Security Scanner**: Automatic vulnerability scanning
- **Dependabot (GitHub)**: Automated dependency updates and security alerts
- **SSL/TLS Monitoring**: Certificate expiration alerts

### Database Backup & Recovery
- **Firestore Automated Exports**: Scheduled daily backups to Cloud Storage
- **Firebase Extensions**: Automated backup solutions
- **Backup Retention**: 30-day backup retention policy
- **Disaster Recovery Plan**: Documented recovery procedures

### Form & Communication Monitoring
- **Firebase Cloud Functions**: Email notifications on form submissions
- **SendGrid or Mailgun**: Reliable email delivery service (free tier)
- **Twenty CRM Integration**: Direct form submission tracking
- **Email Deliverability Monitoring**: Track email success rates

### Maintenance Schedule
- **Weekly**: Review error logs and performance metrics
- **Monthly**: Security updates, dependency updates, backup verification
- **Quarterly**: Performance optimization, accessibility audit, SEO review
- **Annually**: Comprehensive security audit, disaster recovery testing

---

## Budget & Cost Management

### Phase 1 Budget Constraints
- **Monthly Operating Cost**: < CAD $50.00
- **Scalability**: Budget can increase as business grows

### Cost Breakdown (Estimated)

**Firebase Services** (Pay-as-you-go):
- **Hosting**: Free tier sufficient for initial traffic (10 GB/month)
- **Firestore Database**: Free tier (1 GB storage, 50K reads/day, 20K writes/day)
- **Cloud Functions**: Free tier (2M invocations/month)
- **Storage**: Minimal cost for images/videos (~$0.026/GB)
- **Authentication**: Free for most use cases
- **Estimated**: $0-10/month initially

**Domain & DNS**:
- **Domain Registration**: ~$15-20/year (already owned)
- **DNS**: Free with most registrars

**Third-Party Services** (Free Tiers):
- **Google Analytics**: Free
- **Firebase Analytics**: Free
- **Firebase Performance Monitoring**: Free
- **UptimeRobot**: Free (50 monitors)
- **Sentry**: Free tier (5K events/month)
- **SendGrid**: Free tier (100 emails/day)
- **GitHub**: Free for public repositories
- **Twenty CRM**: Open-source, self-hosted or free tier

**Email Service** (if needed):
- **SendGrid/Mailgun**: Free tier sufficient for contact forms

**Total Estimated Phase 1 Cost**: $5-15 CAD/month

### Cost Optimization Strategy
- Leverage free tiers wherever possible
- Use Firebase Spark (free) plan initially
- Upgrade to Firebase Blaze (pay-as-you-go) only when needed
- Monitor usage to stay within budget
- Implement caching to reduce database reads
- Optimize images to reduce storage costs
- Static site generation to minimize serverless function calls

### Scaling Considerations
- Monitor Firebase usage through Firebase Console
- Set up billing alerts at $25 and $45 CAD
- Plan for budget increase as traffic grows
- Optimize before scaling infrastructure

---

## Legal & Compliance

### Privacy & Data Protection
**Canadian Compliance:**
- **PIPEDA**: Personal Information Protection and Electronic Documents Act
  - Consent for data collection
  - Clear privacy policy
  - Right to access personal information
  - Secure data handling and storage

**U.S. Compliance:**
- **CCPA**: California Consumer Privacy Act
  - Right to know what data is collected
  - Right to delete personal data
  - Right to opt-out of data sales
  - Privacy policy disclosure
- **State-Specific Laws**: Compliance with other state privacy laws

**European Compliance:**
- **GDPR**: General Data Protection Regulation
  - Explicit consent for data collection
  - Right to access, rectify, and erase data
  - Data portability
  - Privacy by design
  - Data breach notification (72 hours)
  - Privacy policy in plain language

### Required Legal Pages
1. **Privacy Policy**:
   - Data collection practices
   - How data is used and stored
   - Third-party services (Google Analytics, Firebase, Twenty CRM)
   - User rights (access, deletion, portability)
   - Contact information for privacy inquiries
   - Cookie usage disclosure

2. **Terms of Service**:
   - Website usage terms
   - Intellectual property rights
   - Limitation of liability
   - Governing law (Canadian jurisdiction)

3. **Cookie Consent**:
   - Cookie banner on first visit
   - Accept/Reject options
   - Cookie policy details
   - Analytics and tracking disclosure

4. **Accessibility Statement**:
   - AODA/WCAG compliance commitment
   - Contact for accessibility issues
   - Ongoing improvement plan

### Data Handling Requirements
- **Consent Management**: Cookie consent solution (e.g., Cookiebot, OneTrust free tier)
- **Data Minimization**: Collect only necessary information
- **Data Encryption**: In transit (HTTPS) and at rest (Firebase encryption)
- **Data Retention**: Clear policies on how long data is stored
- **User Rights Portal**: Mechanism for users to request data access/deletion
- **Third-Party Data Processing Agreements**: Ensure vendors are compliant

### Security Measures
- **SSL/TLS Encryption**: Automatic via Firebase Hosting
- **Secure Forms**: HTTPS submission, validation, sanitization
- **Firebase Security Rules**: Restrict database access
- **Regular Security Audits**: Quarterly vulnerability assessments
- **Data Breach Response Plan**: Documented procedures

### Implementation Plan
**Phase 1:**
- Privacy policy and terms of service pages
- Cookie consent banner
- HTTPS enforcement
- Basic data protection measures

**Phase 2:**
- Enhanced user rights portal (data access/deletion requests)
- Advanced cookie management
- Data retention automation
- Comprehensive audit logging

---

## Project Summary

### Phase 1 Scope (2-4 Weeks)
**Core Deliverables:**
- ✅ Public-facing website with 5 main sections
- ✅ Static site generation with Next.js + React
- ✅ Firebase backend (Firestore, Hosting, Functions)
- ✅ Multi-language support (English/French)
- ✅ Responsive design with defined color scheme
- ✅ Contact and inquiry forms with Twenty CRM integration
- ✅ AODA/WCAG 2.1 Level AA accessibility compliance
- ✅ SEO optimization with meta tags and structured data
- ✅ Test environment (test.vignahara.com) with authentication
- ✅ Production environment (www.vignahara.com) public access
- ✅ Privacy policy, terms of service, cookie consent
- ✅ Google Analytics and monitoring tools
- ✅ CI/CD pipeline with GitHub Actions
- ✅ Budget: < $50 CAD/month

**Out of Scope (Phase 2+):**
- User authentication and role-based portals
- Custom admin/CMS interface
- Blog/news section
- Advanced document management
- Enhanced analytics dashboard

### Next Steps
1. Set up development environment and Firebase project
2. Create GitHub repository and CI/CD pipeline
3. Implement base Next.js application structure
4. Design and develop UI components
5. Integrate Firestore database with content schema
6. Implement multi-language support
7. Build all five main sections with placeholder content
8. Integrate Twenty CRM and contact forms
9. Implement SEO and accessibility features
10. Set up monitoring and analytics
11. Deploy to test environment for review
12. Final approval and production deployment

---

**Document Version**: 1.0  
**Last Updated**: 2025  
**Status**: Ready for Development

