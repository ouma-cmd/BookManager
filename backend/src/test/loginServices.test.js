import { describe, test, expect, vi } from "vitest";

import authServices from "../modules/auth/service/auth.services.js";
import User from "../modules/auth/Model/auth.model.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

vi.mock("../src/modules/auth/Model/auth.model.js", () => ({
  default: {
    findOne: vi.fn(),
  },
}));

vi.mock("bcryptjs", () => ({
  default: {
    compare: vi.fn(),
  },
}));

vi.mock("jsonwebtoken", () => ({
  default: {
    sign: vi.fn(),
  },
}));

describe("Login Service", () => {
  test("should return null when email does not exist", async () => {
    User.findOne.mockResolvedValue(null);

    const result = await authServices.loginServices(
      "notfound@gmail.com",
      "123456",
    );

    expect(result).toBeNull();
  });

  test("should return null when password is incorrect", async () => {
    User.findOne.mockResolvedValue({
      _id: "123",
      name: "Oumaima",
      email: "test@gmail.com",
      password: "hashedPassword",
      role: "user",
    });

    bcrypt.compare.mockResolvedValue(false);

    const result = await authServices.loginServices(
      "test@gmail.com",
      "wrongPassword",
    );

    expect(result).toBeNull();
  });

  test("should return token and user when credentials are correct", async () => {
    User.findOne.mockResolvedValue({
      _id: "123",
      name: "Oumaima",
      email: "test@gmail.com",
      password: "hashedPassword",
      role: "user",
    });

    bcrypt.compare.mockResolvedValue(true);

    jwt.sign.mockReturnValue("fakeToken");

    const result = await authServices.loginServices(
      "test@gmail.com",
      "correctPassword",
    );

    expect(result).toEqual({
      token: "fakeToken",
      user: {
        id: "123",
        name: "Oumaima",
        role: "user",
      },
    });
  });
});
