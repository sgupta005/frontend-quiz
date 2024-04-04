function Subject({ subject, dispatch }) {
  return (
    <div onClick={() => dispatch({ type: 'selectSubject', payload: subject })}>
      {subject.title}
    </div>
  );
}

export default Subject;
