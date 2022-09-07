import React from "react";
import { SafeAreaView } from "react-native";
// import { BoxObjectModelScreen } from "./src/screens/BoxObjectModelScreen";
// import { DimensionesScreen } from "./src/screens/DimensionesScreen";
// import { FlexScreen } from "./src/ns/FlexScreen";
import { TareaScreen } from "./src/screens/TareaScreen";
// import { PositionScreen } from "./src/screens/PositionScreen";
// import { ContadorScreen } from "./src/screens/ContadorScreen";
// import { HolaMundoScreen } from "./src/screens/HolaMundoScreen";

const App = () => {

  return (
    <SafeAreaView style={{
      flex: 1
    }}>
      <TareaScreen/>
    </SafeAreaView>
    
  )
  
}

export default App;