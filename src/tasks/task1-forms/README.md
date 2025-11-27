### MentorForm is a controlled form here

This form contains multiple related fields: radio groups, textareas, comments, fields depend on each other, there's validation, dynamic UI behavior.

Using controlled components here is justified because:

- clear state management
  all field values live in React state → easy to read, analyze, and send to the server;

- radio groups are easier to control →
  controlled state ensures the selected option is always correctly reflected in the UI;

- simple form reset →
  a single setFormData(initFormState) resets the entire form;

- flexible conditional logic →
  you can disable fields, show validation messages, or change behavior dynamically;

- reliable validation →
  controlled components make it easy to validate fields on submit and clear errors locally during input.

### MenteeForm is an uncontrolled form

This form is small, simple, and has no complex dependencies: the fields don't depend on each other, there's no need for validation, and there is no dynamic UI behavior.

Using an uncontrolled form is appropriate because:

- no need to store each field in state;

- no complex validation required;

- React avoids unnecessary re-renders.
