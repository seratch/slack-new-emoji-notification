import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";

const workflow = DefineWorkflow({
  callback_id: "new-emoji-notification-workflow",
  title: "Notify new emoji creation",
  input_parameters: {
    properties: {
      name: { type: Schema.types.string },
      subtype: { type: Schema.types.string },
      value: { type: Schema.types.string },
    },
    required: ["name", "subtype", "value"],
  },
});

workflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: "C06D6AL8JJV", // TODO: edit this parameter
  message:
    `New emoji created: \`:${workflow.inputs.name}:\` <${workflow.inputs.value}>`,
});

export default workflow;
