export default function Main(props) {

  return (
    <div>
      <form onSubmit={props.onSubmit} className="form">
        <input
          value={props.firstName}
          type="text"
          onChange={props.onChange}
          placeholder="First Name"
          name="firstName"
        />
        <input
          value={props.lastName}
          type="text"
          onChange={props.onChange}
          placeholder="Last Name"
          name="lastName"
        />
        <input       
          type="email"
          onChange={props.onChange}
          value={props.email}
          placeholder="Email"
          name="email"
        />
        <input
          value={props.birth}
          type="text"
          onChange={props.onChange}
          placeholder="Place of Birth"
          name="birth"
        />
        <input
          value={props.phone}
          type="text"
          onChange={props.onChange}
          placeholder="Phone"
          name="phone"
        />
        <input
          value={props.food}
          type="text"
          onChange={props.onChange}
          placeholder="Favorite Food"
          name="food"
        />
        <textarea
          value={props.info}
          onChange={props.onChange}
          placeholder="Tell us about yourself"
          name="info"
        />
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
