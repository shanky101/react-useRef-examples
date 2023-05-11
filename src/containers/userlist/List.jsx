import classes from "./List.module.css";

function ListComponent({ data = [], status }) {
  if (status == "fetched" && !data.length) {
    console.log("Inside if Listcomponent");
    return <p>No more users entry found!</p>;
  }
  return (
    <div class={classes.listContainer}>
      {data &&
        data.length &&
        data.map((item) => {
          return (
            <div className={classes.listItem}>
              <p>ID - {item.id}</p>
              <p>First name - {item.first_name}</p>
              <p>Email - {item.email}</p>
            </div>
          );
        })}
    </div>
  );
}

export default ListComponent;
