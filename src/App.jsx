import LoadingScreen from "./components/LoadingScreen";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <div className="App">
        <LoadingScreen />
        <AppRouter />
    </div>
  );
}

export default App;
