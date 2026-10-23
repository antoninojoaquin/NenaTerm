import { Platform } from "react-native";
import * as Haptics from "expo-haptics";

// en Android, Expo recomienda performAndroidHapticsAsync en vez de vibrar a mano
const android = Platform.OS === "android";

// si el celular no vibra, no pasa nada: nunca tiene que romper la app
const safe = (p: Promise<void>) => p.catch(() => {});

export const hapticTap = () =>
  safe(
    android
      ? Haptics.performAndroidHapticsAsync(Haptics.AndroidHaptics.Virtual_Key)
      : Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light),
  );

export const hapticSuccess = () =>
  safe(
    android
      ? Haptics.performAndroidHapticsAsync(Haptics.AndroidHaptics.Confirm)
      : Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success),
  );

export const hapticError = () =>
  safe(
    android
      ? Haptics.performAndroidHapticsAsync(Haptics.AndroidHaptics.Reject)
      : Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error),
  );
