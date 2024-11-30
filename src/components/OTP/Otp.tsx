import React from "react";
import { Flex, Input, Typography, Button } from "antd";
import type { GetProps } from "antd";
import { useNavigate } from "react-router-dom"; // импортируем useNavigate
import { useSendOtpMutation } from "../../redux/api/register-api";

type OTPProps = GetProps<typeof Input.OTP>;

interface OtpComponentProps {
  email: string;
}

const { Title, Text } = Typography;

const Otp: React.FC<OtpComponentProps> = ({ email }) => {
  const [sendOtp] = useSendOtpMutation();
  const navigate = useNavigate(); // вызываем navigate

  const onChange: OTPProps["onChange"] = (text) => {
    console.log("onChange:", text);
    sendOtp(text)
      .unwrap()
      .then((res) => {
        if (res) {
          // Перенаправляем на главную страницу
          navigate("/home");
        }
      })
      .catch((error) => {
        console.error("Error sending OTP:", error);
      });
  };

  const onInput: OTPProps["onInput"] = (value) => {
    console.log("onInput:", value);
  };

  const sharedProps: OTPProps = {
    onChange,
    onInput,
  };

  return (
    <div className="mx-auto flex items-center justify-center h-screen bg-blue-50">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <Flex vertical gap={3} align="center">
          <Title level={4} className="text-center text-gray-700">
            We've sent the code to your email
          </Title>
          <Text className="text-center text-gray-500 mb-6">
            Please enter the code sent to: <strong>{email}</strong>
          </Text>

          <Input.OTP
            length={6}
            formatter={(str) => str.toUpperCase()}
            {...sharedProps}
            style={{
              fontSize: "18px",
              width: "50%",
              height: "48px",
              marginBottom: "20px",
            }}
          />

          <Button
            type="primary"
            block
            style={{
              fontSize: "16px",
              backgroundColor: "#1890ff",
              borderColor: "#1890ff",
              padding: "12px 0",
              borderRadius: "8px",
            }}
            className="hover:bg-blue-800"
          >
            Verify Code
          </Button>
        </Flex>
      </div>
    </div>
  );
};

export default Otp;
