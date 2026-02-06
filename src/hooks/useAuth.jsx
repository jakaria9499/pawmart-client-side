import { use } from "react";
import { AuthContext } from "../contests/AuthContext";

const useAuth = () => {
  const authInfo = use(AuthContext);
  return authInfo;
};
export default useAuth;
