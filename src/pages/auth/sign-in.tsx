import { zodResolver } from '@hookform/resolvers/zod'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const signInFormSchema = z.object({
  email: z.string().email({ message: 'Informe seu e-mail.' }),
  password: z.string().min(6, { message: 'Informe sua senha.' }),
})

type SignInForm = z.infer<typeof signInFormSchema>

export function SignIn() {
  const form = useForm<SignInForm>({
    resolver: zodResolver(signInFormSchema),
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { handleSubmit } = useForm()

  function handleSignIn() {}
  return (
    <>
      <Helmet title="Login" />
      <div className="bg-custom-color bg-gradient rounded-xl p-8">
        <div className="flex w-[400px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2">
            <div className="mb-4 flex w-full md:mb-0 md:mr-4 md:w-auto">
              <h1 className="text-4xl font-bold text-white">League of</h1>
              <h1 className="ml-2 text-4xl font-bold text-blue-800">Draven</h1>
            </div>
            <p className="text-sm text-white">
              Entre ou crie sua conta através do seu e-mail.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Digite seu e-mail</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="seuemail@email.com"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Digite sua senha</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="password"
                          placeholder="Informe sua senha"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button className="w-full" type="submit">
                Login
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  )
}
