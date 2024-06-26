import { Errors } from "@/types";
import { useEffect, useState } from "react";
import { Login } from "../components/Login";
import { useGetTokenMutation } from "../redux/authApi";
import { setCredentials } from "../redux/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { AuthCredentials } from "../redux/types";

export const LoginView = () => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<AuthCredentials>({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [getToken, { error, isLoading }] = useGetTokenMutation();

  useEffect(() => {
    if (error) {
      if ("status" in error) {
        setErrors(error.data as Errors);
      }
    }
  }, [error]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getToken(data)
      .unwrap()
      .then((payload) => {
        dispatch(setCredentials({ token: payload.access }));
      })
      .catch((err) => console.error("Failed to login", err));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <Login
      onChange={handleChange}
      onSubmit={handleSubmit}
      data={data}
      isLoading={isLoading}
      errors={errors}
    />
  );
};
