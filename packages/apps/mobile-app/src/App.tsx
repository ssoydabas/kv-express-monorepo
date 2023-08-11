import ServicesProvider from "./services/ServicesProvider";
import Navigation from "./navigation/Navigation";

export default function App() {
  console.log("ENV VARS!!!");
  console.log(process.env);

  return (
    <ServicesProvider>
      <Navigation />
    </ServicesProvider>
  );
}
