import { Trigger } from "deno-slack-sdk/types.ts";
import {
  TriggerContextData as D,
  TriggerEventTypes,
  TriggerTypes,
} from "deno-slack-api/mod.ts";
import workflow from "../workflows/new_emoji_notification.ts";

// https://api.slack.com/automation/triggers/event#supported-events
const trigger: Trigger<typeof workflow.definition> = {
  type: TriggerTypes.Event,
  name: "Emoji Creation Trigger",
  workflow: `#/workflows/${workflow.definition.callback_id}`,
  event: {
    event_type: TriggerEventTypes.EmojiChanged,
    filter: {
      version: 1,
      root: {
        operator: "AND",
        inputs: [
          { statement: `${D.Event.EmojiChanged.subtype} == 'add'` },
          { statement: `${D.Event.EmojiChanged.value} CONTAINS 'https://'` },
        ],
      },
    },
    // If you're in an Enterprise Grid Organization,
    // you must pass team_ids to enable this workflow as well.
    // Check team_ids at https://app.slack.com/manage/{your_org_id_here}/workspaces/all
    // and list the IDs as below:
    // team_ids: ["T014GJXU940"],
  },
  inputs: {
    name: { value: D.Event.EmojiChanged.name },
    subtype: { value: D.Event.EmojiChanged.subtype },
    value: { value: D.Event.EmojiChanged.value },
  },
};

export default trigger;
