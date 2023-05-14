function SearchResultsContainer({ data }) {
  if (!data) return;

  return (
    <div
      style={{
        border: "2px solid black",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
      }}
    >
      {data &&
        data.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.title}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
    </div>
  );
}

export default SearchResultsContainer;
