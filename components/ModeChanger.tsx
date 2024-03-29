import {
  MODE_ACTION,
  Mode,
  ModeList,
  displayModeAction,
} from "@/constants/Mode";
import { Box, Button, ButtonText, Center, VStack } from "@gluestack-ui/themed";

interface ModeChangerProps {
  mode: Mode;
  changeMode: (mode: Mode) => void;
}

const ModeChanger = (props: ModeChangerProps) => {
  const { mode, changeMode } = props;
  const isActive = (key: Mode) => (mode === key ? "active" : "default");
  return (
    <Center>
      <VStack space="md">
        {ModeList.map((_mode) => (
          <Box key={_mode.key} mx="$2">
            <Button
              onPress={() => changeMode(_mode.key)}
              variant="outline"
              action={displayModeAction(_mode.key)}
            >
              <ButtonText>{_mode.key}</ButtonText>
            </Button>
          </Box>
        ))}
      </VStack>
    </Center>
  );
};

export default ModeChanger;
