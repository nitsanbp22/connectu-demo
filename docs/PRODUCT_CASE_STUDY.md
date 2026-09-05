# ConnectU Product Case Study

## Context

ConnectU was created as part of a **college hackathon focused on accessibility for students with physical and mental disabilities**.

The project explored how a digital campus experience could reduce friction around asking for help, communicating support needs, and participating in academic life while preserving privacy and personal control.

Because this was a hackathon, the goal was not to design a complete institutional system. The goal was to turn an accessibility challenge into a clear product hypothesis and a working interactive prototype quickly enough to demonstrate and discuss the core experience.

## Hackathon framing

The starting point was broader than interface accessibility alone.

The challenge involved students whose needs may affect:

- navigating the academic routine;
- sensory comfort;
- social participation;
- group work;
- attendance and transitions;
- communication during difficult moments;
- knowing who to ask for support.

The product opportunity was to create a layer between the student and the campus experience that could make support more proactive, contextual, and user-controlled.

## Problem framing

The core tension was:

Students may know what would help them but still want control over how much they reveal, to whom, and in what context.

Traditional support processes can require the student to:

- know who to contact;
- explain the situation from scratch;
- disclose more than they are comfortable sharing;
- ask for help during a moment when composing the request may itself be difficult;
- navigate separate academic, social, and support channels.

ConnectU tests whether these interactions can be reframed around **support preferences, explicit sharing controls, and a trusted network**.

## Target users

The primary concept was designed for students with physical disabilities, mental health-related accessibility needs, and other ongoing or situational support needs that can affect the academic experience.

The concept intentionally avoids being diagnosis-specific. The interface focuses on what the user needs in a situation rather than requiring them to identify themselves through a medical label.

Potential secondary users in a future system include:

- mentors;
- trusted peers;
- course staff;
- student-support teams;
- accessibility teams.

A production product would require different permissions, responsibilities, and interfaces for each role.

## Product hypothesis

If students can define concrete support preferences, choose who can see them, and request help through low-friction actions, then they may be more likely to ask for support earlier and feel greater control over the experience.

This is a product hypothesis, not a validated clinical or institutional claim. The prototype demonstrates the proposed interaction model and the assumptions that should be tested next.

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

The interface asks about practical experiences such as noise, group work, transitions, social initiation, or routine rather than asking the user to declare a diagnosis.

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
- easier future mapping from preference to support behavior;
- supports progressive disclosure.

Tradeoff:

A predefined taxonomy may fail to represent a user's situation. A production version would need an optional custom input and research-driven taxonomy refinement with accessibility experts and students.

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

### 6. Calm, accessibility-aware visual language

The mobile UI uses large touch targets, rounded containers, limited visual density, clear hierarchy, consistent colors, and repeated interaction patterns.

Why:

A product intended to support students with different accessibility needs should reduce avoidable cognitive and interaction load.

A future version would also require dedicated accessibility testing for keyboard navigation, screen readers, contrast, motion, text scaling, and assistive technologies.

## Prioritization under hackathon constraints

The prototype intentionally covered only the flows needed to make the concept understandable during a time-boxed event.

I prioritized:

1. support preferences;
2. privacy and sharing choices;
3. close-circle support;
4. a low-friction help action;
5. enough academic context to show how support could fit into daily student life.

I did not prioritize a production backend, institutional integrations, real notification infrastructure, or formal accessibility-service workflows because they would not have improved validation of the core concept during the hackathon.

## Privacy model at prototype stage

The current prototype stores no real student information and has no production backend.

If developed further, privacy would need to become a core system capability rather than only a UI concept. At minimum, the product would require:

- clear purpose limitation for each data field;
- explicit recipient-level access rules;
- default-minimum disclosure;
- auditability of sharing changes;
- deletion and retention policies;
- strong authentication and authorization;
- institutional and legal review;
- careful separation between peer support and formal institutional support.

## What I would research next

### Accessibility and usability questions

- Can students with different physical, sensory, cognitive, and mental health-related accessibility needs use the core flows comfortably?
- Can users accurately predict what each sharing mode will do?
- Are support-preference categories easy to scan and understand?
- Does the amount of configuration feel manageable?
- Are touch targets, contrast, hierarchy, and interaction patterns accessible across different needs?
- How does the prototype perform with screen readers, keyboard navigation, and text scaling?

### Product desirability questions

- Which situations would actually make a student open ConnectU?
- Would students maintain a close-circle list?
- Is peer connection desirable in the same product as academic support?
- Would users trust an institution-operated version differently from an independent version?
- Which features feel supportive and which risk feeling intrusive?

### Privacy questions

- Which preferences feel safe to store?
- Which should never be visible to peers?
- Do users prefer field-level sharing over one global sharing mode?
- What information would require explicit per-use confirmation?

## MVP prioritization if continued

A realistic next MVP would be smaller than the full concept surface.

Suggested first release:

1. onboarding;
2. support-preference profile;
3. recipient-level close circle;
4. explicit privacy controls;
5. one low-friction help-request flow;
6. lightweight reminders.

Community chat and deeper institutional integrations should come later, after the trust, privacy, and accessibility model has been validated.

## Success metrics I would consider

For a real pilot, I would avoid measuring success only through engagement.

Potential metrics include:

- onboarding completion;
- successful comprehension of sharing settings in usability testing;
- support preference completion and later edits;
- help-request completion without abandonment;
- perceived control and clarity scores;
- percentage of users who report knowing exactly who can see their information;
- task success across users with different accessibility needs;
- qualitative sense of belonging and usefulness.

## Prototype implementation

The concept was implemented as an interactive React prototype so the flows could be experienced rather than evaluated only through static screens.

The current implementation uses local React state and fictional mock data. This was sufficient for the hackathon goal while deliberately avoiding unnecessary collection or persistence of sensitive information during the concept stage.
