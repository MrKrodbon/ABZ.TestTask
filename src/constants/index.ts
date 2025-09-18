export const JOB_TYPES = [
  { label: "Frontend developer", id: "frontend", defaultChecked: true },
  { label: "Backend developer", id: "backend" },
  { label: "Designer", id: "designer" },
  { label: "QA", id: "qa" },
];

export const VALIDATION_RULES = {
  name: {
    required: "Name is required",
    minLength: { value: 2, message: "Name must be at least 2 characters" },
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address",
    },
  },
  phone: {
    required: "Phone is required",
    pattern: {
      value: /^\+38\s?\(?\d{3}\)?\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/,
      message: "Invalid phone format",
    },
  },
} as const;
