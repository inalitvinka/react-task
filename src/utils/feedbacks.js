export const feedbacks = Array.from({ length: 200 }, (_, index) => ({
  id: index + 1,
  author: `Mentee ${index + 1}`,
  text: `This is a sample feedback number ${index + 1}.`,
}));
