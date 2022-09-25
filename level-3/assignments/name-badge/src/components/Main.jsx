export default function Main(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit} className="form">
        <input
          required
          value={props.name}
          type="text"
          onChange={props.onChange}
          placeholder="First Name"
          name="firstName"
        />
        <input
          required
          value={props.lastName}
          type="text"
          onChange={props.onChange}
          placeholder="Last Name"
          name="lastName"
        />
        <input
          required
          type="email"
          onChange={props.onChange}
          value={props.email}
          placeholder="Email"
          name="email"
        />
        <input
          required
          value={props.birth}
          type="text"
          onChange={props.onChange}
          placeholder="Place of Birth"
          name="birth"
        />
        <input
          required
          value={props.phone}
          type="number"
          onChange={props.onChange}
          placeholder="Phone"
          name="phone"
        />
        <input
          required
          value={props.food}
          type="text"
          onChange={props.onChange}
          placeholder="Favorite Food"
          name="food"
        />
        <textarea
        required
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
