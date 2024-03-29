import ModeChanger from "@/components/ModeChanger";
import { Mode, displayModeAction } from "@/constants/Mode";
import {
  Box,
  Button,
  ButtonText,
  Center,
  HStack,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { useEffect, useState } from "react";

interface Timer {
  minute: number;
  second: number;
}
export default function TabOneScreen() {
  const defaultPomodoroMin = 25;
  const defaultShortBreakMin = 5;
  const defaultLongBreakMin = 15;

  const [mode, setMode] = useState<Mode>("pomodoro");
  const [timer, setTimer] = useState<Timer>({
    minute: defaultPomodoroMin,
    second: 0,
  });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (timer.minute === 0 && timer.second === 0) {
      setIsRunning(false);
    }
    if (isRunning) {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev.second === 0) {
            return { minute: prev.minute - 1, second: 59 };
          }
          return { minute: prev.minute, second: prev.second - 1 };
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const toggleRun = () => {
    setIsRunning((prev) => !prev);
  };

  const changeMode = (mode: Mode) => {
    setMode(mode);
    switch (mode) {
      case "pomodoro":
        setTimer({ minute: defaultPomodoroMin, second: 0 });
        break;
      case "shortBreak":
        setTimer({ minute: defaultShortBreakMin, second: 0 });
        break;
      case "longBreak":
        setTimer({ minute: defaultLongBreakMin, second: 0 });
        break;
    }
    setIsRunning(false);
  };

  return (
    <Center h="$full">
      <VStack space="md" alignItems="center">
        <ModeChanger mode={mode} changeMode={changeMode} />
        <HStack>
          <Text fontFamily="SpaceMono" fontSize="$4xl" fontWeight="$bold">
            {timer.minute.toString().padStart(2, "0")}
          </Text>
          <Text fontFamily="SpaceMono" fontSize="$4xl" fontWeight="$bold">
            :
          </Text>
          <Text fontFamily="SpaceMono" fontSize="$4xl" fontWeight="$bold">
            {timer.second.toString().padStart(2, "0")}
          </Text>
        </HStack>
        <Box>
          <Button onPress={toggleRun} action={displayModeAction(mode)}>
            <ButtonText>Button</ButtonText>
          </Button>
        </Box>
      </VStack>
    </Center>
  );
}
