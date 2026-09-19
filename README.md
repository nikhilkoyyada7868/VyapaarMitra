<div align="center">

# VyapaarMitra

### An end-to-end working-capital journey designed for Indian small businesses.

![Status](https://img.shields.io/badge/Status-UX_prototype-F59E0B)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)

</div>

## The opportunity

Many MSMEs need short-term working capital but face opaque eligibility rules, paperwork, and fragmented financial records. VyapaarMitra explores a mobile-first flow that uses consented business data to explain credit readiness and make an offer easier to understand.

## Prototype scope

- Welcome and mobile OTP journey
- Business identity capture using GSTIN and PAN
- Account Aggregator consent explanation
- Dashboard with credit limit, score, and business signals
- Working-capital amount and tenure selection
- EMI calculation and credit-summary review
- Loan-offer presentation and simulated bank selection
- Simulated disbursal confirmation
- Repayment schedule and payment history
- Business analytics, gamification, and settings

## End-to-end flow

```text
Welcome → OTP → Business details → Data consent → Dashboard
       → Apply → Credit summary → Offer → Success → Repayment
```

## Product thinking behind it

- **Explain before asking:** show what data is used and why.
- **Make eligibility legible:** turn a hidden decision into understandable signals.
- **Keep the journey mobile:** design for an owner managing the business on the move.
- **Support continued engagement:** pair credit access with analytics, repayment visibility, and progress mechanics.

## Tech stack

- React 18 and TypeScript
- Vite and SWC
- Radix UI component primitives
- Motion animations
- Recharts data visualization
- Lucide icons

## Run locally

```bash
git clone https://github.com/nikhilkoyyada7868/VyapaarMitra.git
cd VyapaarMitra
npm install
npm run dev
```

Create a production bundle with `npm run build`.

## Prototype boundaries

All user records, scores, business signals, offers, and transactions in this repository are simulated in the browser. There is no backend, real authentication, lender integration, Account Aggregator connection, KYC, or money movement. This project demonstrates the product journey and interaction design; it is not a live financial service or financial advice.

## Continued iteration

The broader product direction continues in [VyapaarMitra V2](https://github.com/nikhilkoyyada7868/VM2), which adds credit coaching, growth insights, expanded data connections, richer rewards, and faster demo navigation.
