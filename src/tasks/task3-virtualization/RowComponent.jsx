export const RowComponent = ({ index, feedbacks, style }) => {
  const feedback = feedbacks[index];
  return (
    <div
      style={{
        ...style,
        padding: '20px 40px',
        borderBottom: 'solid 1px #e0d8d8ff',
        background: index % 2 === 0 ? '#fafafa' : 'inherit',
      }}
    >
      <p>{feedback.author}</p>
      <p>{feedback.text}</p>
    </div>
  );
};
