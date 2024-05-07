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

      <div className="flex flex-col items-center justify-center gap-8">
        <div className="mb-4 flex w-full md:mb-0 md:mr-4 md:w-auto">
          <h1 className="text-4xl font-bold text-gray-700">League of</h1>
          <h1 className="ml-2 text-4xl font-bold text-blue-700">Draven</h1>
        </div>

        <Form {...form}>
          <form
            onSubmit={handleSubmit(handleSignIn)}
            className="flex flex-col items-center space-y-4"
          >
            <div className="mb-4 w-96 space-y-2 p-0">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
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
            <div className="mb-4 w-96 space-y-2 p-0">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
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

            <Button
              className="mb-2 me-2 h-12 w-36 rounded-3xl border-2 border-black bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-lg text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
              type="submit"
            >
              Login
            </Button>

            <div className="flex items-center text-sm">
              <p className="text-black">Entre ou</p>
              <p className="ml-1 font-bold text-blue-700">crie sua conta</p>
              <p className="ml-1 text-black">através do seu email</p>
            </div>
          </form>
        </Form>
      </div>
    </>
  )
}
