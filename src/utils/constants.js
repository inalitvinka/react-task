export const navLinks = [
  { to: '/task1', text: 'Task 1: Forms' },
  { to: '/task2', text: 'Task 2: Portals' },
  { to: '/task3', text: 'Task 3: Pagination & Virtualization' },
];

export const formLinks = [
  { to: '/', text: 'Home' },
  { to: 'mentor', text: 'Mentor' },
  { to: 'mentee', text: 'Mentee' },
];

export const portalsLinks = [{ to: '/', text: 'Home' }];

export const linksTask3 = [
  { to: '/', text: 'Home' },
  { to: 'pagination', text: 'Pagination' },
  { to: 'virtualization', text: 'Virtualization' },
];

export const grade = ['1 - Poor', '2 - Fair', '3 - Good', '4 - Very Good', '5 - Excellent'];

export const initFormState = {
  dialogue: '',
  confidence: '',
  comments: '',
  links: '',
  topicsToImprove: '',
};

export const minCommentsLength = 10;

export const errorMsg = {
  dialogue: '* Please select a dialogue rating.',
  confidence: '* Please select a confidence rating.',
  comments: `* Comments must be at least ${minCommentsLength} characters long.`,
};

export const TIME_TO_SHOW = 3000;

export const ANIMATION_DURATION = 300;
