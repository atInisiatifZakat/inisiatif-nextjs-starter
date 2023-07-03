import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Checkbox,
  Container,
  FormControl,
  Heading,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
  chakra,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { PasswordInput } from "~/components/forms";
import { Logo } from "~/components/logo";

export const LoginView = () => {
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      remember: true,
    },
  });

  return (
    <Center minH="100vh" bg="gray.50">
      <Container>
        <Center pb={8}>
          <Stack spacing={{ base: "4", md: "6" }} textAlign="center">
            <Logo h={10} />
            <Heading size={{ base: "md", lg: "lg" }}>
              Log in to your account
            </Heading>
          </Stack>
        </Center>
        <Card
          as={chakra.form}
          variant="elevated"
          onSubmit={form.handleSubmit(() => router.push("/"))}
        >
          <CardBody>
            <VStack align="stretch" spacing={4}>
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  autoComplete="off"
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <PasswordInput id="password" placeholder="Your password" />
              </FormControl>
              <HStack justify="space-between">
                <Checkbox>Remember me</Checkbox>
              </HStack>
            </VStack>
          </CardBody>
          <CardFooter>
            <Button
              w="full"
              size="md"
              type="submit"
              isLoading={form.formState.isSubmitting}
            >
              Sign in
            </Button>
          </CardFooter>
        </Card>
      </Container>
    </Center>
  );
};
