import * as React from "react";
import UserList from "./UsersList";
import { addUserData, fetchData } from "./server";
import FormDialog from "./FormDialog";

export default function UserHome() {
  const [open, setOpen] = React.useState(false); // handle popup open & close

  const [userData, setUserData] = React.useState([]); // handle user data

  React.useEffect(() => {
    fetchData().then((result) => setUserData(result));
  }, []);
  /**
   * register data to state obj from multistep form
   * @param {*} data
   */
  const handleRegisterUserData = async (userDetail) => {
    await addUserData(userDetail).then(() =>
      fetchData().then((result) => setUserData(result))
    );
  };

  return (
    <div style={{ backgroundColor: "#DDE6ED", height: 700 }}>
      <UserList userData={userData} setOpen={setOpen} />
      {open && (
        <FormDialog
          open={open}
          onClose={() => setOpen(false)}
          setUserData={(data) => handleRegisterUserData(data)}
        />
      )}
    </div>
  );
}
