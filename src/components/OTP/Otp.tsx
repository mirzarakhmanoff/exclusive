import { Button, Input, Typography } from "antd";

const { Title, Text } = Typography;

const OTP = () => {
  const handleSubmit = () => {
    console.log("OTP Verified");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <div className="p-8 bg-white shadow-md rounded-md max-w-sm w-full">
        <Title level={4} className="text-center">
          Enter OTP
        </Title>
        <Text className="block text-center text-gray-500 mb-4">
          Please enter the OTP sent to your email
        </Text>
        <Input placeholder="Enter OTP" className="mb-4" />
        <Button
          type="primary"
          block
          onClick={handleSubmit}
          className="bg-red-500 hover:bg-red-600"
        >
          Verify OTP
        </Button>
      </div>
    </div>
  );
};

export default OTP;
