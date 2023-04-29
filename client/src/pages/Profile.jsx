import { useState } from "react";
import useUserContext from "../hooks/useUserContext";
import { InputElement, Loading } from "../components";
import { UserPageWrapper } from "../assets/wrappers";

const Profile = () => {
  const { uploadImage, currentUser, userLoading } = useUserContext();
  const [file, setFile] = useState(null);

  const handleChange = e => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return
    const formData = new FormData();
    formData.append('image', file);
    uploadImage(formData);
  }

  return (
    <UserPageWrapper>
      <h2>Profile</h2>
      {userLoading && <Loading />}
      {!userLoading && <img src={currentUser.image} alt="" style={{ width: 100, height: 100 }} />}
      <div>{currentUser?.email}</div>
      <form onSubmit={handleUpload}>
        <input type="file" name="image" id="image" onChange={handleChange} accept="image/*" />
        {/* <InputElement 
          type="file"
          name="image"
          id="image"
        /> */}
        <button type="submit">Upload</button>
      </form>
    </UserPageWrapper>
  )
}
export default Profile