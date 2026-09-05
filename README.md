# ConnectU | Student Belonging & Support UX Prototype

ConnectU is an interactive product prototype exploring how a digital campus experience could help students ask for support, control what they share, build a trusted circle, and feel more connected to academic life.

The project is primarily a **product and UX case study**. The current implementation is a front-end prototype built with React and mock data so the main flows can be experienced and evaluated interactively.

[View the live prototype](https://connectu-demo.vercel.app)

## Product problem

Students can experience academic, social, sensory, or routine-related friction without having an easy way to communicate what would help them.

The product question behind ConnectU was:

> How might we make it easier to ask for support while preserving autonomy, privacy, and control over disclosure?

ConnectU explores a model where the user describes **needs and preferences rather than diagnoses**, chooses how much to share, and can change that choice at any time.

## Product principles

- **User control first:** sharing is explicit and adjustable.
- **Needs over labels:** the experience focuses on practical support preferences rather than diagnoses.
- **Low-friction help:** asking for help should not require composing a long explanation in a stressful moment.
- **Progressive disclosure:** users can configure support gradually instead of completing one overwhelming form.
- **Belonging, not only productivity:** tasks and reminders sit alongside community and support flows.
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

Instead of forcing the user to decide what to write during a difficult moment, the flow can send a predefined, gentle request for contact to the selected people or mentor.

### 5. Academic continuity

Tasks, lesson context, reminders, and community are included in the same product concept because support is more useful when it is connected to the student's actual academic routine.

## My role

I defined the product concept, user flows, interaction model, visual direction, and prototype behavior for ConnectU.

My work included:

- framing the user problem and product hypothesis;
- mapping the onboarding and support journeys;
- defining privacy and sharing states;
- designing the information architecture and mobile-first flows;
- translating sensitive support needs into practical UI choices;
- designing the interaction and visual system for a Hebrew RTL experience;
- defining the support-circle and help-request behavior;
- implementing the interactive React prototype so the concept could be tested as a working experience.

The technical implementation supports the product work, but the main purpose of this project is to demonstrate **product thinking, UI/UX decisions, interaction design, and rapid prototyping**.

## What this prototype intentionally does not include

This repository is not presented as a production-ready campus platform.

The current version:

- uses mock data;
- does not include real authentication or user accounts;
- does not persist personal support preferences to a backend;
- simulates notifications and chat behavior locally;
- does not integrate with an academic institution or learning-management system;
- is not a medical, diagnostic, emergency, or clinical support tool.

These limitations are deliberate for the prototype stage. They allow the product flows and UX assumptions to be explored before introducing production infrastructure or handling real sensitive data.

## Product questions I would validate next

Before moving from prototype to a real product, I would test:

1. whether users understand the difference between the sharing modes;
2. which support preferences feel useful versus too personal;
3. whether the Need Help action feels reassuring and clear rather than alarming;
4. how much control users expect over exactly who can see each preference;
5. whether community features improve belonging without creating pressure to participate;
6. which academic integrations would provide value without increasing privacy risk;
7. how the experience should differ for students, mentors, faculty, and accessibility/support teams.

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
**Status:** Interactive product prototype  
**Focus:** Product management · UI/UX · privacy-aware interaction design · rapid prototyping
