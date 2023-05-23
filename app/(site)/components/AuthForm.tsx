"use client";

import Input from "@/app/components/Inputs/Input";
import Button from "@/app/components/Button";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";

type Variant = "LOGIN" | "REGISTER";

export default function AuthForm() {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (variant === "REGISTER") {
      // Axios Register
    }

    if (variant === "LOGIN") {
      // NextAuth SignIn
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    //NextAuth Social Sign in
  };

  return (
    <div
      className="
            mt-8
            sm:mx-auto
            sm: w-full
            sm:max-w-md
        "
    >
      <div
        className="
            bg-white
            px-4
            py-8
            shadow-xl
            sm:rounded-lg
            sm:px-10
        "
      >
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input errors={errors} id="name" label="Name" register={register} />
          )}
          <Input
            errors={errors}
            id="email"
            label="Email Adress"
            type="email"
            register={register}
            disabled={isLoading}
          />
          <Input
            errors={errors}
            id="password"
            label="password"
            type="password"
            register={register}
            disabled={isLoading}
          />

          <div>
            <Button disabled={isLoading} type="submit" fullWidth>
              {variant === "LOGIN" ? "Login" : "Sing up"}
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-grey-500">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              onClick={() => socialAction("google")}
              icon={FcGoogle}
            />
          </div>
        </div>
        <div
          className="
            flex
            gap-2
            justify-center
            text-sm
            mt-6
            px-2
            text-gray-500
            "
        >
          {variant === "LOGIN"
            ? "New to messanger?"
            : "Already have and account?"}
        <div onClick={toggleVariant} className="underline cursor-pointer">
          {variant === "LOGIN" ? "Creater an account" : "Log in"}
        </div>
        </div>
      </div>
    </div>
  );
}
