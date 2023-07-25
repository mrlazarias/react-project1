const user = {
  name: "Murilo",
  lastName: "Azarias",
};

function User() {
  return <span>{`${user.name} ${user.lastName}`}</span>;
}

export default User;
