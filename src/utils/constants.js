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
