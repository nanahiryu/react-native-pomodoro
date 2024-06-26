export const MODE = {
  pomodoro: "ポモドーロ",
  shortBreak: "小休憩",
  longBreak: "長休憩",
};

export const MODE_COLOR = {
  pomodoro: "text-red-300",
  shortBreak: "text-blue-300",
  longBreak: "text-green-300",
};

export const MODE_ACTION = {
  pomodoro: "negative",
  shortBreak: "primary",
  longBreak: "positive",
};

export type Mode = keyof typeof MODE;

export const ModeList = Object.entries(MODE).map(([key, value]) => ({
  key: key as Mode,
  value,
}));

export const ModeActionList = Object.entries(MODE_ACTION).map(
  ([key, value]) => ({
    key: key as Mode,
    value,
  })
);

export const displayMode = (key: Mode): (typeof MODE)[Mode] | "" => {
  const mode = ModeList.find((mode) => mode.key === key);
  if (mode) return mode.value;
  return "";
};

export const displayModeColor = (key: Mode): (typeof MODE_COLOR)[Mode] | "" => {
  const mode = ModeList.find((mode) => mode.key === key);
  if (mode) return MODE_COLOR[mode.key];
  return "";
};

export const displayModeAction = (
  key: Mode
): "primary" | "negative" | "positive" | "default" => {
  const mode = ModeList.find((mode) => mode.key === key);
  if (mode) return MODE_ACTION[mode.key] as "primary" | "negative" | "positive";
  return "default";
};
