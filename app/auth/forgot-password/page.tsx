import { Logo } from "@/components/Logo"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  RotateCcw,
  ShieldCheck,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ForgotPasswordPage() {
  return (
    <main className="flex w-full flex-col items-center gap-8 px-8 py-4">
      <Logo />
      <div className="flex w-full max-w-lg flex-col gap-4">
        <Link
          href="/auth"
          className="flex w-fit items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" /> Back to Login
        </Link>
        <Card>
          <CardHeader className="gap-3 text-center">
            <div className="mx-auto flex size-12 items-center justify-center rounded-lg bg-muted">
              <RotateCcw className="size-6" aria-hidden="true" />
            </div>
            <CardTitle>
              <h1 className="text-2xl font-bold">Reset your password</h1>
            </CardTitle>
            <CardDescription>
              Enter your registered CEU Malolos institutional email and we will
              send you a secure verification link to reset your account
              password.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <form>
              <FieldSet>
                <FieldGroup>
                  <Field>
										<FieldLabel htmlFor="reset-email">
											CEU Email Account
										</FieldLabel>
                    <InputGroup>
                      <InputGroupAddon>
                        <Mail aria-hidden="true" />
                      </InputGroupAddon>
                      <InputGroupInput
                        id="reset-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="surnameXXXXXXX@mls.ceu.edu.ph"
                        aria-describedby="reset-email-description"
                        required
                        pattern="[^\s@]+@mls\.ceu\.edu\.ph"
                      />
                    </InputGroup>
                    <FieldDescription id="reset-email-description">
                      Must end with @mls.ceu.edu.ph.
                    </FieldDescription>
                  </Field>
                  <Field>
                    <Button type="button" size="lg">
                      Send Reset Link <ArrowRight aria-hidden="true" />
                    </Button>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </form>
            <Alert className="bg-muted">
              <Mail aria-hidden="true" />
              <AlertTitle>Check your inbox</AlertTitle>
              <AlertDescription>
                After requesting a reset link, check your inbox and CEU spam
                folder.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
