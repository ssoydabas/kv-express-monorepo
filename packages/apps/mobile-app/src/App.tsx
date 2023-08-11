import ServicesProvider from "./services/ServicesProvider";
import Navigation from "./navigation/Navigation";

export default function App() {
  return (
    <ServicesProvider>
      <Navigation />
    </ServicesProvider>
  );
}
