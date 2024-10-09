// src/Components/formSchema.js
export const formSchema = [
    {
      label: "Name",
      type: "text",
      name: "name",
      placeholder: "Enter your name",
      validation: {
        required: true,
      },
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Enter your email",
      validation: {
        required: true,
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      },
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "Enter your password",
      validation: {
        required: true,
        minLength: 6,
      },
    },
    {
      label: "Gender",
      type: "select",
      name: "gender",
      options: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Other", value: "other" },
      ],
      validation: {
        required: true,
      },
    },
  ];
  