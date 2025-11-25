export const RowComponent = ({ index, feedbacks, style }) => {
  const feedback = feedbacks[index];
  return (
    <div
      style={{
        ...style,
        padding: '10px',
        borderBottom: 'solid 1px #e0d8d8ff',
        background: index % 2 === 0 ? '#fafafa' : 'white',
      }}
    >
      <p>{feedback.author}</p>
      <p>{feedback.text}</p>
    </div>
  );
};
