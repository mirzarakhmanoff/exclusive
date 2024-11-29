import { Button, Form, Input, Typography } from "antd";

const { Title, Text } = Typography;
import shop from "../../assets/shoplogin.png";
import { NavLink } from "react-router-dom";

const Register = () => {
  const onFinish = (values: string[]) => {
    console.log("Form Values:", values);
  };

  return (
    <div className="flex h-screen">
      {/* Левая часть с изображением */}
      <div className="flex-1 bg-blue-50 flex justify-center items-center">
        <img
          src={shop}
          alt="Registration illustration"
          className="object-contain max-w-md"
        />
      </div>

      {/* Правая часть с формой */}
      <div className="flex-1 flex justify-center items-center bg-white">
        <div className="max-w-md w-full p-8 shadow-md rounded-md">
          <Title level={3} className="text-center mb-2">
            Register to Exclusive
          </Title>
          <Text className="block text-center text-gray-500 mb-6">
            Create your account below
          </Text>

          <Form layout="vertical" size="large" onFinish={onFinish}>
            {/* Поле Email */}
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>

            {/* Поле Username */}
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please enter your username!" },
              ]}
            >
              <Input placeholder="Enter your username" />
            </Form.Item>

            {/* Поле Password1 */}
            <Form.Item
              label="Password"
              name="password1"
              rules={[
                { required: true, message: "Please enter your password!" },
                { min: 6, message: "Password must be at least 6 characters!" },
              ]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>

            {/* Поле Password2 */}
            <Form.Item
              label="Confirm Password"
              name="password2"
              dependencies={["password1"]}
              rules={[
                { required: true, message: "Please confirm your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password1") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Passwords do not match!"));
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Confirm your password" />
            </Form.Item>

            {/* Кнопка Register */}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-red-500 hover:bg-red-600"
              >
                Register
              </Button>
            </Form.Item>

            {/* Ссылка на логин */}
            <div className="text-center">
              <Text>
                Already have an account?{" "}
                <NavLink to={"/login"} className="text-red-500 hover:underline">
                  Log In
                </NavLink>
              </Text>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
