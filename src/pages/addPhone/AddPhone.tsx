import { useState } from "react";
import { useAddPhoneMutation } from "../../redux/api/product-api";

const AddPhoneForm = () => {
  const [formData, setFormData] = useState({
    model: "",
    title: "",
    price: "",
    year: "",
    description: "",
    photo: null,
  });

  const models = ["Samsung", "Iphone", "Redmi", "Honor", "Huawei", "Xiaomi"];
  const [addPhone] = useAddPhoneMutation();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      photo: file, // Устанавливаем файл в состояние
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted", formData);

    // Формируем данные для отправки
    const dataToSend = {
      model: formData.model,
      title: formData.title,
      price: formData.price,
      year: formData.year,
      description: formData.description,
      photo: formData.photo, // Добавляем файл
    };

    addPhone(dataToSend);
  };

  return (
    <form onSubmit={handleSubmit} className="w-[600px] mx-auto p-6 bg-white">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Add New Phone
      </h2>

      <div className="mb-4">
        <label htmlFor="model" className="block text-gray-700 font-medium mb-2">
          Model *
        </label>
        <select
          id="model"
          name="model"
          value={formData.model}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled>
            Select a model
          </option>
          {models.map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>
      </div>

      {/* Title Input */}
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
          Title *
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Price Input */}
      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 font-medium mb-2">
          Price *
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Year Input */}
      <div className="mb-4">
        <label htmlFor="year" className="block text-gray-700 font-medium mb-2">
          Year *
        </label>
        <input
          type="text"
          id="year"
          name="year"
          value={formData.year}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Description Input */}
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 font-medium mb-2"
        >
          Description *
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Photo Upload */}
      <div className="mb-4">
        <label htmlFor="photo" className="block text-gray-700 font-medium mb-2">
          Upload Photo *
        </label>
        <input
          type="file"
          id="photo"
          name="photo"
          onChange={handleFileChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        Add Phone
      </button>
    </form>
  );
};

export default AddPhoneForm;
