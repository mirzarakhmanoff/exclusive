import { Button, Form, Input, Typography } from "antd";
import shop from "../../assets/shoplogin.png";
import { NavLink } from "react-router-dom";
import { useLoginMutation } from "../../redux/api/register-api";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const Login = () => {
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const onFinish = (values: { username: string; password: string }) => {
    login(values)
      .unwrap()
      .then((res) => {
        if (res) {
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Login failed:", error);
        if (error?.data) {
          console.log("Error details:", error.data);
        }
      });
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-blue-50 flex justify-center items-center">
        <img
          src={shop}
          alt="Shopping cart and phone"
          className="object-cover max-w-md"
        />
      </div>

      <div className="flex-1 flex justify-center items-center bg-white">
        <div className="max-w-md w-full p-8 shadow-md rounded-md">
          <Title level={3} className="text-center mb-2">
            Log in to Exclusive
          </Title>
          <Text className="block text-center text-gray-500 mb-6">
            Enter your details below
          </Text>

          <Form layout="vertical" size="large" onFinish={onFinish}>
            <Form.Item
              label="Your username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please enter your username !",
                },
              ]}
            >
              <Input placeholder="Enter your email or phone" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please enter your password!",
                },
              ]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-red-500 hover:bg-red-600"
              >
                Log In
              </Button>
            </Form.Item>

            <div className="text-right">
              <NavLink
                to={"/register"}
                className="text-red-500 hover:underline"
              >
                Register
              </NavLink>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
