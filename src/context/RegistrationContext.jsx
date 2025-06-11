import { createContext, useState, useEffect } from "react";

const RegistrationContext = createContext();

export function RegistrationProvider({ children }) {
  const [registrations, setRegistrations] = useState(() => {
    const saved = localStorage.getItem("registrations");
    return saved ? JSON.parse(saved) : [];
  });

  //  Uppdatera localStorage när registrations ändras
  useEffect(() => {
    localStorage.setItem("registrations", JSON.stringify(registrations));
  }, [registrations]);

  const registerToCourse = (
    courseId,
    courseTitle,
    coursePrice,
    courseDuration,
    courseNivå,
    courseImage,
    name,
    email
  ) => {
    const newRegistration = {
      courseId,
      courseTitle,
      coursePrice,
      courseDuration,
      courseNivå,
      courseImage,
      name,
      email,
    };
    setRegistrations((prev) => [...prev, newRegistration]);
  };

  return (
    <RegistrationContext.Provider
      value={{ registrations, setRegistrations, registerToCourse }}
    >
      {children}
    </RegistrationContext.Provider>
  );
}

export default RegistrationContext;
