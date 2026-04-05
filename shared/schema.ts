const roleEnum = ["user", "admin"];
const chitStatusEnum = ["active", "upcoming", "completed", "cancelled"];
const paymentStatusEnum = ["pending", "paid", "overdue", "partial"];
const membershipStatusEnum = ["active", "inactive", "removed"];

const loginSchema = {
  email: (value) => typeof value === 'string' && value.includes('@'),
  password: (value) => typeof value === 'string' && value.length >= 6,
};

const signupSchema = {
  name: (value) => typeof value === 'string' && value.length >= 2,
  email: (value) => typeof value === 'string' && value.includes('@'),
  phone: (value) => typeof value === 'string' && value.length >= 10,
  password: (value) => typeof value === 'string' && value.length >= 6,
};

module.exports = {
  roleEnum,
  chitStatusEnum,
  paymentStatusEnum,
  membershipStatusEnum,
  loginSchema,
  signupSchema,
};
