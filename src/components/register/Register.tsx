import { Button, Form, Input, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { registerSuccess } from "../../redux/slice/register-state";
import OTP from "../OTP/Otp";
import { useSignUpMutation } from "../../redux/api/register-api";
import { useState } from "react";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

const Register = () => {
  const [signUp] = useSignUpMutation();
  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>("");
  const isRegistered = useSelector(
    (state: any) => state.authSlice.isRegistered
  );

  const onFinish = (values: any) => {
    console.log("Form Values:", values);
    signUp(values)
      .unwrap()
      .then(() => dispatch(registerSuccess()));
    setEmail(values.email);
  };

  if (isRegistered) {
    return <OTP email={email} />;
  }

  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-blue-50 flex justify-center items-center">
        <img
          src="https://via.placeholder.com/400"
          alt="Registration illustration"
          className="object-contain max-w-md"
        />
      </div>

      <div className="flex-1 flex justify-center items-center bg-white">
        <div className="max-w-md w-full p-8 shadow-md rounded-md">
          <Title level={3} className="text-center mb-2">
            Регистрация на Exclusive
          </Title>
          <Text className="block text-center text-gray-500 mb-6">
            Создайте аккаунт ниже
          </Text>

          <Form layout="vertical" size="large" onFinish={onFinish}>
            <Form.Item
              label="Электронная почта"
              name="email"
              rules={[
                { required: true, message: "Пожалуйста, введите ваш email!" },
                {
                  type: "email",
                  message: "Пожалуйста, введите корректный email!",
                },
              ]}
            >
              <Input placeholder="Введите ваш email" />
            </Form.Item>

            <Form.Item
              label="Имя пользователя"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите ваше имя пользователя!",
                },
              ]}
            >
              <Input placeholder="Введите ваше имя пользователя" />
            </Form.Item>

            <Form.Item
              label="Пароль"
              name="password1"
              rules={[
                { required: true, message: "Пожалуйста, введите ваш пароль!" },
                {
                  min: 6,
                  message: "Пароль должен содержать минимум 6 символов!",
                },
              ]}
            >
              <Input.Password placeholder="Введите ваш пароль" />
            </Form.Item>

            <Form.Item
              label="Подтвердите пароль"
              name="password2"
              dependencies={["password1"]}
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, подтвердите ваш пароль!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password1") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Пароли не совпадают!"));
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Подтвердите ваш пароль" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-red-500 hover:bg-red-600"
              >
                Зарегистрироваться
              </Button>
            </Form.Item>

            <div className="text-center">
              <Text>
                Уже есть аккаунт?{" "}
                <Link to={"/login"} className="text-red-500 hover:underline">
                  Войти
                </Link>
              </Text>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
