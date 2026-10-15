import { PasswordInput } from "@/components/ui/password-input";
import { Logo } from "@/components/Logo";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
	FieldSet,
  FieldDescription,
	FieldContent,
  FieldLabel,
  FieldError,
  FieldGroup,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ShieldCheck } from "lucide-react"
import Link from "next/link";
import { PROGRAMS, YEAR_LEVELS } from "@/types/school.types";
import { Checkbox } from "@/components/ui/checkbox";

export default function AuthPage(){
	return(
		<main className='w-full gap-8 flex flex-col items-center py-4 px-4 lg:px-8'>
			<Logo />
			<Card className="max-w-lg w-full">
				<CardHeader>
					<Badge variant="secondary">
						<ShieldCheck />
						<p className="uppercase">secure gateway</p>
					</Badge>
					<div className="text-center">
						<CardTitle>
							<h1 className="font-bold text-2xl">Welcome Back Escolarian!</h1>
						</CardTitle>
						<CardDescription>
							The verified peer-to-peer campus marketplace for Centro Escolar University Malolos.
						</CardDescription>
					</div>
					<CardContent className="pt-4">
						<Tabs 
							defaultValue="signup">
							<TabsList className='w-full'>
								<TabsTrigger value="login">Log In</TabsTrigger>
								<TabsTrigger value="signup">Sign Up</TabsTrigger>
							</TabsList>
							<TabsContent value="login">
								<form>
									<FieldSet>
										<FieldGroup>
											<Field>
												<FieldLabel htmlFor="login-email" className="flex gap-0">
													CEU Email Account<sup className="text-red-500">*</sup>
												</FieldLabel>
												<Input 
													id="login-email"
													name="login-email"
													type="email"
													pattern="[^\s@]+@mls\.ceu\.edu\.ph"
													placeholder="surnameXXXXXXX@mls.ceu.edu.ph"	
												/>
												<FieldError></FieldError>
											</Field>
											<Field>
												<FieldLabel htmlFor="login-password" className="flex gap-0">
													Password<sup className="text-red-500">*</sup>
												</FieldLabel>
												<PasswordInput 
													id="login-password"
													name="login-password"
													placeholder="••••••••"	
												/>
												<FieldError></FieldError>
												<Link className="text-xs text-end" href="/auth/forgot-password">
													Forgot Password?
												</Link>
											</Field>
											<Field>
												<Button size="lg">
													Log In to EscolarTrade <ArrowRight />
												</Button>
											</Field>
										</FieldGroup>
									</FieldSet>
								</form>
							</TabsContent>
							<TabsContent value="signup">
								<form>
									<FieldSet>
										<FieldGroup>
											<Field>
												<FieldLabel className="flex gap-0" htmlFor="full-name">Full Name<sup className="text-red-500">*</sup></FieldLabel>
												<Input 
													id="full-name"
													name="full-name"
													type="text"
													placeholder="Juan Dela Cruz"
												/>
											</Field>
											<Field>
												<FieldLabel htmlFor="email" className="flex gap-0">
													CEU Email Account<sup className="text-red-500">*</sup>
												</FieldLabel>
												<Input 
													id="email"
													name="email"
													type="email"
													pattern="[^\s@]+@mls\.ceu\.edu\.ph"
													placeholder="surnameXXXXXXX@mls.ceu.edu.ph"	
												/>
												<FieldError></FieldError>
											</Field>
											<div className="gap-2 grid sm:grid-cols-2 grid-rows-2">
												<Field>
													<FieldLabel htmlFor="program" className="flex gap-0">
														Degree Program<sup className="text-red-500">*</sup>
													</FieldLabel>
													<Select id="program" name="program" items={PROGRAMS}>
														<SelectTrigger>
															<SelectValue placeholder="Select Program"/>
														</SelectTrigger>		
														<SelectContent>
															<SelectGroup>
																{
																	PROGRAMS.map((item) => {
																		return(
																			<SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>
																		);
																	})
																}
															</SelectGroup>
														</SelectContent>
													</Select>
													<FieldError></FieldError>
												</Field>
												<Field>
													<FieldLabel htmlFor="year-level" className="flex gap-0">
														Year Level<sup className="text-red-500">*</sup>
													</FieldLabel>
													<Select id="year-level" name="year-level" items={YEAR_LEVELS}>
														<SelectTrigger>
															<SelectValue placeholder="Select Year Level"/>
														</SelectTrigger>		
														<SelectContent>
															<SelectGroup>
																{
																	YEAR_LEVELS.map((item) => {
																		return(
																			<SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>
																		);
																	})
																}
															</SelectGroup>
														</SelectContent>
													</Select>
													<FieldError></FieldError>
												</Field>
												<Field>
													<FieldLabel htmlFor="password" className="flex gap-0">
														Create Password<sup className="text-red-500">*</sup>
													</FieldLabel>
													<PasswordInput 
														id="password"
														name="password"
														placeholder="••••••••"	
													/>
													<FieldError></FieldError>
												</Field>
												<Field>
													<FieldLabel htmlFor="confirm-password" className="flex gap-0">
														Confirm Password<sup className="text-red-500">*</sup>
													</FieldLabel>
													<PasswordInput 
														id="confirm-password"
														name="confirm-password"
														placeholder="••••••••"	
													/>
													<FieldError></FieldError>
												</Field>
											</div>
											<Field orientation="horizontal">
												<Checkbox id="tos" defaultChecked/>
												<FieldContent>
													<FieldLabel htmlFor="tos">I agree to Terms of Service</FieldLabel>
													<FieldDescription>
														I agree to the EscolarTrade Terms of Service,
														and official
														campus safe-zone handover protocols.
													</FieldDescription>
													<FieldError></FieldError>
												</FieldContent>
											</Field>
											<Field>
												<Button size="lg">
													Create EscolarTrade Account<ArrowRight />
												</Button>
											</Field>
										</FieldGroup>
									</FieldSet>
								</form>
							</TabsContent>
						</Tabs>
					</CardContent>
				</CardHeader>
			</Card>
		</main>
	);
}
