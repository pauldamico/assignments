export default function Main(props) {
  return (
    <div className="main-div">
      <form onSubmit={props.onSubmit}>
        <label htmlFor="item1">What To Do </label>
        <br />
        <input onChange ={props.onChange} type="text" id="item1" value={props.item1} name="item1" />
        <br></br>
        <label htmlFor="date">Date </label>
        <br />
        <input required type="date" onChange ={props.onChange} value={props.date} name="date" id="date" />
        <br />
        <button>Add To List</button>
      </form>
    </div>
  );
}
