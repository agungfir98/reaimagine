"use client";
import Button from "@/components/button";
import Input from "@/components/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { faker } from "@faker-js/faker";
import { useFormik } from "formik";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import * as yup from "yup";
import { useMutation } from "react-query";
import axios from "axios";
import { setCookie } from "cookies-next";

const AuthPage = () => {
	const signInMutation = useMutation({
		mutationFn(data: typeof formik.values) {
			return axios.post("https://dummyjson.com/auth/login", data, {
				headers: {
					"Content-Type": "application/json",
				},
			});
		},
		onSuccess(data) {
			console.log({ msg: "loged in" });
			setCookie("token", data.data.token);
		},
		onError() {
			console.log({ msg: "fail to loged in" });
		},
	});

	const formik = useFormik({
		initialValues: {
			username: "atuny0",
			password: "9uQFF1Lh",
		},
		validationSchema: yup.object().shape({
			username: yup.string().required(),
			password: yup.string().required().min(6),
		}),
		onSubmit(values) {
			signInMutation.mutate(values);
		},
	});

	return (
		<div className="grid grid-cols-2 h-screen">
			<div className="mt-24">
				<h1 className="text-center font-semibold text-4xl mb-16">
					Welcome back
				</h1>
				<form onSubmit={formik.handleSubmit}>
					<div className="grid grid-cols-1 gap-4 items-center justify-center w-[55%] mx-auto">
						<div className="flex flex-col justify-center items-center">
							{formik.errors.username && (
								<p className="text-red-400 font-light self-start">
									{formik.errors.username}
								</p>
							)}
							<Input
								size="sm"
								type="text"
								name="username"
								rounded="md"
								placeholder="username"
								onChange={formik.handleChange}
								value={formik.values.username}
								className={formik.errors.username && "outline-red-400"}
							/>
						</div>
						<div className="flex flex-col justify-center items-center">
							{formik.errors.password && (
								<p className="text-red-400 font-light self-start">
									{formik.errors.password}
								</p>
							)}
							<Input
								size="sm"
								type="password"
								name="password"
								rounded="md"
								placeholder="Password"
								onChange={formik.handleChange}
								value={formik.values.password}
								className={formik.errors.password && "outline-red-400"}
							/>
						</div>
						<div className="flex justify-end">
							<Link
								href={"#"}
								className="underline underline-offset-4 text-xs font-semibold"
							>
								Forgot password?
							</Link>
						</div>
						<Button
							className="place-self-center w-full bg-black text-white rounded-md"
							type="submit"
							size="3"
						>
							Log in
						</Button>
						<div className="flex gap-2 text-xs">
							<p>Don&apos;t have an account?</p>
							<Link
								href={"#"}
								className="underline underline-offset-4 text-xs font-semibold"
							>
								Sign up
							</Link>
						</div>
					</div>
				</form>
			</div>
			<div className="bg-black relative">
				<Image
					alt="interior image"
					src={faker.image.urlLoremFlickr({ category: "interiors" })}
					sizes="100vh"
					fill
					className="h-full w-full absolute top-0 left-0 object-cover"
				/>
				<div className="absolute h-screen">
					<div className="text-white px-16 py-24 flex flex-col justify-between h-full">
						<div className=" flex flex-col gap-8">
							<h1 className="text-5xl font-light break-words">
								We are here to optimized your workflow
							</h1>
							<p className="text-2xl font-light">
								Your docs, projects, notes, and reminder. <br />
								Together.
							</p>
						</div>
						<div className="flex flex-col gap-10">
							<p className="text-2xl font-light">
								Finally, all your work in one place
							</p>

							<div className="flex gap-1 items-center">
								<div className="outline outline-1 outline-white rounded-full p-1 w-fit">
									<GoArrowLeft className="h-6 w-6 " />
								</div>
								•
								<div className="outline outline-1 outline-white rounded-full p-1 w-fit">
									<GoArrowRight className="h-6 w-6" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuthPage;
