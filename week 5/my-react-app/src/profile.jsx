function Profile(props) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h2>Name: {props.name}</h2>
      <p>age: {2026 - 2005}</p>
    </div>
  );
}

export default Profile;
