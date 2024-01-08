import { Manifest } from "deno-slack-sdk/mod.ts";
import NewEmojiNotification from "./workflows/new_emoji_notification.ts";

export default Manifest({
  name: "New Emoji Notification",
  description: "Notify new emoji creation",
  icon: "assets/default_new_app_icon.png",
  workflows: [
    NewEmojiNotification,
  ],
  botScopes: [
    "commands",
    "emoji:read",
    "chat:write",
    "chat:write.public",
  ],
});
