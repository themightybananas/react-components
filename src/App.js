import "./App.css";
import "./App.css";
import FeatureFlags from "./feature-flag-implementation";
import FeatureFlagGlobalState from "./feature-flag-implementation/context";

function App() {
  return (
    <div className="App">
      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>
    </div>
  );
}

export default App;
