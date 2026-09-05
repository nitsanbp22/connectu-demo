# ConnectU Privacy & Repository Scope

ConnectU is an interactive product and UX prototype created for an accessibility hackathon. It is not a production campus system and does not handle real student records in this repository.

## Current prototype scope

The public demo uses fictional mock data and local front-end state.

It intentionally does not include:

- production authentication;
- a connected student database;
- real academic records;
- stored support preferences;
- medical or diagnostic records;
- production notification infrastructure;
- institutional credentials;
- API keys or provider secrets.

## Sensitive-product considerations

The product concept deals with potentially sensitive accessibility and support preferences. If ConnectU were developed into a real service, privacy and authorization would need to be core product requirements from the start.

Areas requiring dedicated review would include:

- data minimization;
- explicit user consent;
- recipient-level access control;
- purpose limitation for stored preferences;
- secure authentication;
- authorization by user role and relationship;
- encryption and secure storage;
- deletion and retention policies;
- audit trails for sharing changes;
- notification privacy;
- institutional, accessibility, and legal requirements.

## Accessibility boundary

This prototype explores accessibility-focused product flows, but it has not been presented as a fully audited accessible production interface.

A production version would require dedicated testing for:

- keyboard navigation;
- screen-reader behavior;
- semantic structure;
- contrast;
- focus visibility;
- text scaling;
- motion sensitivity;
- touch-target sizing;
- assistive technologies.

## Product boundary

ConnectU is not a medical, diagnostic, emergency, or clinical support tool. The Need Help flow is a simulated product interaction for the hackathon prototype and must not be interpreted as a real emergency-response mechanism.
