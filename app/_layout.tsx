import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack 
      screenOptions={{
        headerStyle: { backgroundColor: '#282c34' },
        headerTintColor: '#fff',
        contentStyle: { backgroundColor: '#282c34' },
      }}/>
  )
}
