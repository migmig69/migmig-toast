import { PlayGround, ToastProvider } from "./Components";

function App() {
  return (
    <div>
      <ToastProvider>
        <PlayGround />
      </ToastProvider>
    </div>
  );
}

export default App;
