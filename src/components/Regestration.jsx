import React, { useState } from "react";

import {
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Text,
  Image,
  Card,
  useMantineTheme,
  Grid,
  Progress,
  Group,
  Center,
} from "@mantine/core";

import { useInputState } from "@mantine/hooks";

import { IconCheck, IconX } from "@tabler/icons-react";

import { Link } from "react-router-dom";

import axios from "axios";

function PasswordRequirement({ meets, label }) {
  return (
    <Text color={meets ? "teal" : "red"} mt={5} size="sm">
      <Center inline>
        {meets ? (
          <IconCheck size="0.9rem" stroke={1.5} />
        ) : (
          <IconX size="0.9rem" stroke={1.5} />
        )}

        <Text ml={7}>{label}</Text>
      </Center>
    </Text>
  );
}

const requirements = [
  { re: /[0-9]/, label: "Includes number" },

  { re: /[a-z]/, label: "Includes lowercase letter" },

  { re: /[A-Z]/, label: "Includes uppercase letter" },

  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" },
];

function getStrength(password) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 0);
}

const RegistrationPage = () => {
  const [firstname, setFirstName] = useState("");

  const [lastname, setLastName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useInputState("");

  const [confirmPassword, setConfirmPassword] = useInputState("");

  const [emailError, setEmailError] = useState("");

  const [passwordError, setPasswordError] = useState("");

  const [key, setKey] = useState("");

  const theme = useMantineTheme();

  const [registrationError, setRegistrationError] = useState("");

  // Set the default base URL for Axios

  axios.defaults.baseURL = "http://52.172.4.41:7070";

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleKeyChange = (event) => {
    setKey(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);

    setEmailError("");
  };

  const validateEmail = (email) => {
    // Email validation regex pattern

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
  };

  const strength = getStrength(password);

  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(password)}
    />
  ));

  const handleRegistration = async () => {
    if (!validateEmail(email)) {
      setEmailError("Invalid email address");

      return;
    } else if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");

      return;
    } else {
      try {
        const response = await axios.post("/register", {
          firstname,

          lastname,

          email,

          password,
        });

        // Check if the response contains an "error" property indicating a failed registration

        if (response.data.error) {
          setRegistrationError(response.data.error); // Use the error message from the backend
        } else {
          console.log(response.data.message);

          if (
            response.data.message ===
            "Registration successful. Check your email for confirmation."
          ) {
            window.location.href = "/login";
          }
        }
      } catch (error) {
        console.error("Registration failed:", error.message);

        setRegistrationError("Registration failed. Please try again.");
      }
    }
  };

  return (
    <div>
      <Grid p="20px">
        <Grid.Col md={6} lg={2}></Grid.Col>

        <Grid.Col md={6} lg={4}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Paper
              padding="lg"
              style={{
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[5]
                    : theme.colors.gray[0],
              }}
            >
              <Text fz="lg" fw={800} align="center" mb="md">
                LMAS : Registration
              </Text>

              <TextInput
                label="First Name"
                placeholder="Enter your firstname"
                value={firstname}
                style={{ marginBottom: "1rem" }}
                onChange={handleFirstNameChange}
                required
              />

              <TextInput
                label="Last Name"
                placeholder="Enter your lastname"
                value={lastname}
                style={{ marginBottom: "1rem" }}
                onChange={handleLastNameChange}
                required
              />

              <TextInput
                label="Email"
                placeholder="Enter your email"
                value={email}
                style={{ marginBottom: "1rem" }}
                onChange={handleEmailChange}
                // error={emailError}

                required
              />

              {emailError && (
                <Text color="red" size="sm">
                  {emailError}
                </Text>
              )}

              <PasswordInput
                label="Password"
                placeholder="Enter your password"
                style={{ marginBottom: "1rem" }}
                value={password}
                onChange={setPassword}
                error={passwordError}
                required
              />

              <Group spacing={5} grow mt="xs" mb="md">
                <Progress
                  styles={{ bar: { transitionDuration: "0ms" } }}
                  value={password.length > 0 ? 100 : 0}
                  color={
                    strength > 80 ? "teal" : strength > 50 ? "yellow" : "red"
                  }
                  size={4}
                />
              </Group>

              {checks}

              <PasswordInput
                label="Confirm Password"
                placeholder="Confirm your password"
                style={{ marginBottom: "1rem" }}
                value={confirmPassword}
                onChange={setConfirmPassword}
                error={passwordError}
                required
              />

              {/* <TextInput

                label="Key"

                placeholder="Enter the Key Provided by Manav"

                style={{ marginBottom: "1rem" }}

                onChange={handleKeyChange}

                // error={emailError}

                required

              /> */}

              <Button
                type="submit"
                radius="xl"
                ml="xl"
                onClick={handleRegistration}
              >
                Register
              </Button>

              <p>
                Have an account? <Link to="/login">Login</Link>
              </p>
            </Paper>
          </Card>
        </Grid.Col>

        <Grid.Col md={6} lg={4}>
          <Image
            width="80%"
            height="100%"
            src="../src/assets/ManavLogo2021.png"
            align="center"
            p="xl"
          />
        </Grid.Col>

        <Grid.Col md={6} lg={2}></Grid.Col>
      </Grid>
    </div>
  );
};

export default RegistrationPage;
