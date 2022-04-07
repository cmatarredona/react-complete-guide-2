import styles from "./UsersList.module.css";
import Card from "../UI/Card";
const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => {
          return <li key={user.id}>{user.name} ({user.age})</li>;
        })}
      </ul>
    </Card>
  );
};
export default UsersList;
