import { Button, Form, Input, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { registerSuccess } from "../../redux/slice/register-state";
import OTP from "../OTP/Otp";
import { useSignUpMutation } from "../../redux/api/register-api";

const { Title, Text, Link } = Typography;

const Register = () => {
  const [signUp] = useSignUpMutation();
  const dispatch = useDispatch();
  const isRegistered = useSelector(
    (state: any) => state.authSlice.isRegistered
  );

  const onFinish = (values: any) => {
    console.log("Form Values:", values);
    signUp(values);

    dispatch(registerSuccess());
  };

  if (isRegistered) {
    return <OTP />;
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
            Register to Exclusive
          </Title>
          <Text className="block text-center text-gray-500 mb-6">
            Create your account below
          </Text>

          <Form layout="vertical" size="large" onFinish={onFinish}>
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

            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please enter your username!" },
              ]}
            >
              <Input placeholder="Enter your username" />
            </Form.Item>

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

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-red-500 hover:bg-red-600"
              >
                Register
              </Button>
            </Form.Item>

            <div className="text-center">
              <Text>
                Already have an account?{" "}
                <Link href="#" className="text-red-500 hover:underline">
                  Log In
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
