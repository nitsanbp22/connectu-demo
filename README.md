# ConnectU | Accessibility Hackathon Product & UX Prototype

ConnectU is an interactive campus-accessibility prototype created as part of a **college hackathon focused on improving accessibility for students with physical and mental disabilities**.

The concept explores how a digital campus experience could help students communicate practical support needs, control what they share, build a trusted support circle, and navigate academic life with greater autonomy.

The project is primarily a **product and UX case study**. The current implementation is a front-end prototype built with React and mock data so the main flows could be experienced and demonstrated during the hackathon.

[View the live prototype](https://connectu-demo.vercel.app)

## Hackathon context

The challenge was not simply to make an existing campus interface more accessible. The broader product question was how a college could better support students whose physical, emotional, sensory, social, or routine-related needs may affect their academic experience.

Because the project was developed in a time-boxed hackathon setting, I focused on turning the problem into a tangible product concept quickly:

```text
Accessibility challenge
   ↓
User needs and friction points
   ↓
Product hypothesis
   ↓
Core flows and privacy model
   ↓
Mobile-first UX
   ↓
Interactive prototype
```

## Product problem

Students with accessibility needs may know what would help them but still lack a simple, low-friction way to communicate those needs in context.

The product question behind ConnectU was:

> How might we make it easier for students with accessibility needs to ask for support while preserving autonomy, privacy, and control over disclosure?

ConnectU explores a model where the user describes **needs and preferences rather than diagnoses**, chooses how much to share, and can change that choice at any time.

## Product principles

- **Accessibility through user control:** support should adapt to the student rather than forcing one fixed process.
- **Needs over labels:** the experience focuses on practical support preferences rather than diagnoses.
- **Low-friction help:** asking for help should not require composing a long explanation in a stressful moment.
- **Progressive disclosure:** users can configure support gradually instead of completing one overwhelming form.
- **Belonging, not only accommodation:** academic support, peer connection, and day-to-day participation are treated as parts of the same experience.
- **Calm UI:** the visual language aims to reduce cognitive load and make sensitive actions feel approachable.

## Core product journey

```text
Onboarding
   ↓
Support preferences
   ↓
Choose sharing mode
   ↓
Home and academic context
   ↓
Tasks / lesson support / community
   ↓
Need help
   ↓
Selected support circle or mentor receives a simulated alert
```

## Key UX flows

### 1. Onboarding and personalization

The onboarding flow introduces three core ideas before asking the user to configure anything:

- personalization;
- privacy under the user's control;
- a support circle rather than a one-directional help system.

Users can either configure support preferences immediately or enter the demo first.

### 2. Support preferences

Preferences are grouped into practical categories such as:

- study environment;
- social interaction;
- routine and attendance;
- group work;
- campus life.

The user selects concrete needs through lightweight chips rather than being asked to explain or justify them in free text.

### 3. Privacy and sharing modes

ConnectU prototypes three sharing modes:

- **Private:** needs remain anonymous in broader academic contexts.
- **Public:** the user can connect with students experiencing similar challenges.
- **Close Circle:** information is shared only with people selected in advance.

The important product decision is that sharing mode is not a one-time onboarding choice. It remains visible and editable as part of the profile experience.

### 4. Support circle and help request

The prototype lets users maintain a close support circle and simulate a low-friction help request.

Instead of forcing the user to decide what to write during a difficult moment, the flow can send a predefined, gentle request for contact to selected people or a mentor.

### 5. Academic continuity

Tasks, lesson context, reminders, and community are included in the same concept because accessibility is not only about formal accommodations. It also affects participation, routine, communication, and belonging throughout academic life.

## My role

I shaped the product concept and built the interactive prototype during the hackathon, covering both product design and implementation.

My work included:

- framing the accessibility challenge as a product problem;
- identifying core user needs and product hypotheses;
- prioritizing which flows could meaningfully be demonstrated within the hackathon timeframe;
- mapping the onboarding, support, privacy, and help-request journeys;
- defining sharing states and user control over disclosure;
- designing the information architecture and mobile-first flows;
- translating sensitive support needs into practical UI choices;
- designing the interaction and visual system for a Hebrew RTL experience;
- implementing the interactive React prototype so the concept could be presented as a working experience.

The technical implementation supports the product work, but the main purpose of this project is to demonstrate **product thinking, accessibility-focused UI/UX, interaction design, prioritization, and rapid prototyping under time constraints**.

## What this prototype intentionally does not include

This repository is not presented as a production-ready campus platform.

The current version:

- uses mock data;
- does not include real authentication or user accounts;
- does not persist personal support preferences to a backend;
- simulates notifications and chat behavior locally;
- does not integrate with an academic institution or learning-management system;
- is not a medical, diagnostic, emergency, or clinical support tool.

These limitations were appropriate for the hackathon stage. They allowed the team to focus on the product concept, interaction model, and accessibility assumptions without handling real sensitive data.

## Product questions I would validate next

Before moving from hackathon prototype to a real campus product, I would test:

1. whether students with different accessibility needs find the proposed preference model relevant;
2. whether users understand the difference between the sharing modes;
3. which support preferences feel useful versus too personal;
4. whether the Need Help action feels reassuring and clear rather than alarming;
5. how much control users expect over exactly who can see each preference;
6. whether community features improve belonging without creating pressure to participate;
7. which campus integrations would provide value without increasing privacy risk;
8. how the experience should differ for students, mentors, faculty, and accessibility/support teams.

See [`docs/PRODUCT_CASE_STUDY.md`](docs/PRODUCT_CASE_STUDY.md) for the full product reasoning and next-step validation plan.

## Tech used for the prototype

- React 19
- Vite
- JavaScript
- Tailwind CSS
- Lucide React
- Responsive Hebrew / RTL interface
- Vercel deployment

## Repository scope and privacy

The prototype contains fictional mock users and simulated interactions only. No real student records, medical information, authentication secrets, or institutional account data are required for the demo.

See [`SECURITY.md`](SECURITY.md) for the public-repository scope.

---

**Project:** ConnectU  
**Context:** College accessibility hackathon  
**Status:** Interactive product prototype  
**Focus:** Product management · accessibility UX · privacy-aware interaction design · rapid prototyping
