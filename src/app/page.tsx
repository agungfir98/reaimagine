"use client";
import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";
import { faker } from "@faker-js/faker";
import { GoArrowRight } from "react-icons/go";
import * as Accordion from "@radix-ui/react-accordion";
import { FaAngleDown } from "react-icons/fa";

export default function Home() {
	return (
		<>
			<div className="container mx-auto">
				<nav className="grid grid-cols-3 py-4">
					<div>Reaimagine</div>
					<div className="flex gap-7 justify-center">
						<Link href={"#"}>Lorem</Link>
						<Link href={"#"}>Lorem</Link>
						<Link href={"#"}>Lorem</Link>
					</div>
					<div className="flex justify-end gap-2">
						<Button
							className="outline outline-slate-400 outline-1 rounded-full font-semibold px-6"
							size="2"
						>
							Lorem
						</Button>
						<Button size="2" variant="primary" className="px-10 rounded-full">
							Lorem
						</Button>
					</div>
				</nav>

				<div className="grid grid-cols-2 min-h-screen">
					<div className="mx-auto py-32 pr-20 flex flex-col gap-3">
						<h1 className="text-7xl">Lorem ipsum dolor sit</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
							provident quo quidem sed doloremque ullam incidunt ipsum ad?
							Doloribus, natus.
						</p>
						<div className="flex items-center gap-5">
							<Button
								size="3"
								className="px-10 rounded-full bg-[#0f6eac] text-white"
							>
								Apply now
							</Button>
							<Link href={"#"} className="font-medium">
								Lorem ipsum dolor sit
							</Link>
						</div>
					</div>
					<div className="overflow-hidden ">
						<div className="grid gap-6 grid-cols-2 h-full">
							<div className="grid gap-4 auto-rows-min h-full -translate-y-16">
								<div className="relative h-[40vh]">
									<Image
										src={""}
										alt=""
										fill
										className="w-full object-cover bg-slate-400"
									/>
								</div>
								<div className="relative h-[40vh]">
									<Image
										src={""}
										alt=""
										fill
										className="w-full object-cover bg-slate-400"
									/>
								</div>
								<div className="relative h-[40vh]">
									<Image
										src={""}
										alt=""
										fill
										className="w-full object-cover bg-slate-400"
									/>
								</div>
							</div>
							<div className="grid gap-4 auto-rows-auto h-full">
								<div className="relative h-[40vh]">
									<Image
										src={""}
										alt=""
										fill
										className="w-full object-cover bg-slate-400"
									/>
								</div>
								<div className="relative h-[40vh]">
									<Image
										src={""}
										alt=""
										fill
										className="w-full object-cover bg-slate-400"
									/>
								</div>
								<div className="relative h-[40vh]">
									<Image
										src={""}
										alt=""
										fill
										className="w-full object-cover bg-slate-400"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="flex justify-between items-center mt-24 my-10">
					<h1 className="text-4xl font-light">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					</h1>
					<Button className="px-12 rounded-full" variant="primary" size="3">
						Lorem
					</Button>
				</div>

				<div className="flex relative justify-between h-[80vh]">
					<div className="relative h-full w-full">
						<Image
							src={""}
							alt=""
							fill
							className="w-full h-full object-cover bg-slate-400"
						/>
					</div>
					<div className="absolute bottom-0 m-3 ">
						<div className="flex items-center gap-2 text-white w-full">
							<div className="relative h-12 w-12">
								<Image
									src={faker.image.avatarGitHub()}
									alt=""
									fill
									className="w-full h-full object-cover rounded-full"
								/>
							</div>
							<div>
								<p className="font-semibold">Raka home</p>
								<p>Purwokerto</p>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-60">
					<h1 className="text-5xl font-light">Lorem ipsum dolor sit</h1>
					<div id="cardContainer" className="flex justify-between mt-10">
						<div id="card" className="w-[20rem]">
							<div className="relative h-[16rem] w-full bg-slate-400">
								<div className="absolute left-0 top-0 p-2">
									<div className="h-9 w-9 bg-slate-200 rounded-full outline outline-1 outline-blue-400 text-blue-400 flex justify-center items-center">
										<p>1</p>
									</div>
								</div>
							</div>
							<div className="py-8">
								<h2 className="text-xl font-semibold">
									Lorem, ipsum dolor sit
								</h2>
								<p className="">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Tenetur, adipisci facere aperiam eaque architecto unde eum
									molestias? Autem, deleniti sequi?
								</p>
							</div>
						</div>
						<div id="card" className="w-[20rem]">
							<div className="relative h-[16rem] w-full bg-slate-400">
								<div className="absolute left-0 top-0 p-2">
									<div className="h-9 w-9 bg-slate-200 rounded-full outline outline-1 outline-blue-400 text-blue-400 flex justify-center items-center">
										<p>2</p>
									</div>
								</div>
							</div>
							<div className="py-8">
								<h2 className="text-xl font-semibold">
									Lorem, ipsum dolor sit
								</h2>
								<p className="">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Tenetur, adipisci facere aperiam eaque architecto unde eum
									molestias? Autem, deleniti sequi?
								</p>
							</div>
						</div>
						<div id="card" className="w-[20rem]">
							<div className="relative h-[16rem] w-full bg-slate-400">
								<div className="absolute left-0 top-0 p-2">
									<div className="h-9 w-9 bg-slate-200 rounded-full outline outline-1 outline-blue-400 text-blue-400 flex justify-center items-center">
										<p>3</p>
									</div>
								</div>
							</div>
							<div className="py-8">
								<h2 className="text-xl font-semibold">
									Lorem, ipsum dolor sit
								</h2>
								<p className="">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Tenetur, adipisci facere aperiam eaque architecto unde eum
									molestias? Autem, deleniti sequi?
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-40 grid grid-cols-[2fr_3fr]">
					<h1 className="text-6xl break-words mx-5">
						Lorem ipsum dolor sit amet
					</h1>
					<div className="flex justify-center">
						<Accordion.Root type="single" collapsible className="w-full">
							<Accordion.Item value="item-1" className="w-full">
								<Accordion.Header>
									<Accordion.Trigger className="flex justify-between items-center w-full border-1 border-b border-slate-400 py-5 [&>#arrow]:aria-[expanded=true]:rotate-180">
										<p className="text-2xl font-bold">
											Lorem ipsum dolor sit amet consectetur
										</p>
										<FaAngleDown id="arrow" className="h-5 w-5" />
									</Accordion.Trigger>
								</Accordion.Header>
								<Accordion.Content className="AccordionContent overflow-hidden px-2">
									<p className="text-lg">Content for Section 1</p>
								</Accordion.Content>
							</Accordion.Item>
							<Accordion.Item value="item-2" className="w-full">
								<Accordion.Header>
									<Accordion.Trigger className="flex justify-between items-center w-full border-1 border-b border-slate-400 py-5 [&>#arrow]:aria-[expanded=true]:rotate-180">
										<p className="text-2xl font-bold">
											Lorem ipsum dolor sit amet consectetur
										</p>
										<FaAngleDown id="arrow" className="h-5 w-5" />
									</Accordion.Trigger>
								</Accordion.Header>
								<Accordion.Content className="AccordionContent overflow-hidden px-2">
									<p className="text-lg">Content for Section 2</p>
								</Accordion.Content>
							</Accordion.Item>
							<Accordion.Item value="item-3" className="w-full">
								<Accordion.Header>
									<Accordion.Trigger className="flex justify-between items-center w-full border-1 border-b border-slate-400 py-5 [&>#arrow]:aria-[expanded=true]:rotate-180">
										<p className="text-2xl font-bold">
											Lorem ipsum dolor sit amet consectetur
										</p>
										<FaAngleDown id="arrow" className="h-5 w-5" />
									</Accordion.Trigger>
								</Accordion.Header>
								<Accordion.Content className="AccordionContent overflow-hidden px-2">
									<p className="text-lg">Content for Section 3</p>
								</Accordion.Content>
							</Accordion.Item>
						</Accordion.Root>
					</div>
				</div>

				<div className="flex justify-center items-center my-24">
					<Link href={"#"} className="underline underline-offset-2">
						More FAQs
					</Link>{" "}
					<GoArrowRight />
				</div>
			</div>
			<footer className="bg-[#144769] h-96 text-white mt-10">
				<div className="grid grid-cols-2 container mx-auto h-96 py-10 ">
					<div className="grid grid-rows-[1fr_5rem]">
						<div>Reaimagine</div>
						<div className="flex items-center">
							&copy;{new Date().getFullYear()} Reaimagine, Inc. All rights
							reserved
						</div>
					</div>
					<div className="grid grid-cols-[1fr_14rem] grid-rows-[1fr_5rem] pl-24">
						<div>
							<h1 className="font-semibold">Social</h1>
							<ul>
								<li>Instagram</li>
								<li>Tiktok</li>
							</ul>
						</div>
						<div>
							<h1 className="font-semibold">Company</h1>
							<ul>
								<li>Careers</li>
								<li>Terms and Privacy</li>
								<li>Blog</li>
							</ul>
						</div>
						<div>
							<h1 className="font-semibold">Press</h1>
							<p>press@reaimagine.id</p>
						</div>
						<div>
							<h1 className="font-semibold">Contact</h1>
							<p>hello@reaimagine.id</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
