# ConnectU Product Case Study

## Context

ConnectU explores a campus support experience centered on belonging, autonomy, and practical support needs.

The prototype was created to examine a product opportunity rather than to simulate a finished institutional system. The goal was to make the core experience tangible enough to evaluate the flows, language, privacy model, and interaction decisions before investing in production infrastructure.

## Problem framing

The product starts from a simple tension:

Students may need support but still want control over how much they reveal, to whom, and in what context.

Traditional support processes can require the student to:

- know who to contact;
- explain the situation from scratch;
- disclose more than they are comfortable sharing;
- ask for help during a moment when composing the request may itself be difficult;
- navigate separate academic, social, and support channels.

ConnectU tests whether these interactions can be reframed around **support preferences, explicit sharing controls, and a trusted network**.

## Target users

The primary prototype user is a student who may occasionally benefit from additional structure, social support, environmental adjustments, reminders, or easier ways to communicate needs.

The concept is intentionally broader than a diagnosis-specific solution. The same interaction patterns could be useful for students experiencing different types of temporary or ongoing friction.

Potential secondary users in a future system include:

- mentors;
- trusted peers;
- course staff;
- student-support teams;
- accessibility teams.

A production product would require different permissions, responsibilities, and interfaces for each role.

## Product hypothesis

If students can define concrete support preferences, choose who can see them, and request help through low-friction actions, then they may be more likely to ask for support early and feel greater control over the experience.

This hypothesis needs user research and behavioral validation. The prototype demonstrates the proposed interaction model, not proof that the hypothesis is correct.

## Experience architecture

```text
Configure
├── onboarding
├── support preferences
└── privacy / sharing mode

Use
├── home
├── tasks
├── lesson context
└── community

Ask for support
├── close circle
├── mentor
└── simulated help alert

Adjust over time
├── sharing level
├── selected support people
├── notification preferences
└── communication tone
```

The important design choice is that configuration is not isolated from the rest of the product. Privacy and support preferences remain editable after onboarding.

## Key product decisions

### 1. Needs instead of diagnoses

The interface asks about practical experiences such as noise, group work, transitions, or social initiation rather than asking the user to declare a diagnosis.

Why:

- it keeps the UI focused on actionable support;
- it reduces unnecessary disclosure;
- it can serve a broader range of users;
- it makes each selected item easier to connect to product behavior later.

### 2. Sharing is a state, not a consent checkbox

The prototype exposes three sharing modes and keeps the current state visible in the profile.

Why:

Consent in a sensitive product should not disappear after onboarding. Users need to understand the current behavior and be able to change it without searching through settings.

### 3. Support preferences use grouped chips

Instead of one large free-text form, support needs are split into themed sections with selectable chips.

Why:

- faster scanning;
- lower writing burden;
- clearer product semantics;
- easier future mapping from preference to recommendation or accommodation workflow;
- supports progressive disclosure.

Tradeoff:

A predefined taxonomy may fail to represent a user's situation. A production version would need an optional custom input and research-driven taxonomy refinement.

### 4. Need Help is intentionally lightweight

The help action simulates sending a predefined request to trusted people.

Why:

The moment when support is needed may be the worst time to require a long composition flow.

Tradeoff:

The interface must make the consequence extremely clear before sending. A real implementation would also need safeguards for accidental taps, recipient availability, emergency expectations, and escalation boundaries.

### 5. Community is optional, not the default answer

The concept includes peer connection but also private and close-circle modes.

Why:

Belonging does not mean every user wants to participate publicly. The product should support connection without making disclosure or community participation mandatory.

### 6. Calm visual language

The mobile UI uses large touch targets, rounded containers, limited visual density, consistent teal/navy color language, and repeated interaction patterns.

Why:

For a product involving potentially stressful moments, the interface should avoid adding unnecessary visual or decision complexity.

## Privacy model at prototype stage

The current prototype stores no real student information and has no production backend.

If developed further, privacy would need to become a core system capability rather than only a UI concept. At minimum, the product would require:

- clear purpose limitation for each data field;
- explicit recipient-level access rules;
- default-minimum disclosure;
- auditability of sharing changes;
- deletion and retention policies;
- strong authentication and authorization;
- institutional/legal review;
- careful separation between peer support and formal institutional support.

## What I would research next

### Usability questions

- Can users accurately predict what each sharing mode will do?
- Do they understand who receives a Need Help request?
- Are support-preference categories easy to scan?
- Does the amount of configuration feel manageable?
- Is the interface calm without feeling childish or overly therapeutic?

### Product desirability questions

- Which situations would actually make a student open ConnectU?
- Would students maintain a close-circle list?
- Is peer connection desirable in the same product as academic support?
- Would users trust an institution-operated version differently from an independent version?

### Privacy questions

- Which preferences feel safe to store?
- Which should never be visible to peers?
- Do users prefer field-level sharing over one global sharing mode?
- What information would require explicit per-use confirmation?

## MVP prioritization if continued

A realistic next MVP would be smaller than the current concept surface.

Suggested first release:

1. onboarding;
2. support-preference profile;
3. recipient-level close circle;
4. explicit privacy controls;
5. one low-friction help-request flow;
6. lightweight reminders.

Community chat and deeper institutional integrations should come later, after the trust and privacy model has been validated.

## Success metrics I would consider

For a real pilot, I would avoid measuring success only through engagement.

Potential metrics include:

- onboarding completion;
- percentage of users who successfully understand sharing settings in usability testing;
- support preference completion and later edits;
- help-request completion without abandonment;
- perceived control and clarity scores;
- percentage of users who report knowing exactly who can see their information;
- repeat use of support features when relevant;
- qualitative sense of belonging and usefulness.

## Prototype implementation

The concept was implemented as an interactive React prototype so flows could be experienced rather than evaluated only through static screens.

The current implementation uses local React state and fictional mock data. This was sufficient for the product-design goal while deliberately avoiding unnecessary collection or persistence of sensitive information during the concept stage.
