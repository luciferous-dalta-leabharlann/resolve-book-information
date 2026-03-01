export type Task = {
  url: string;
};

export async function queue(
  batch: MessageBatch<Task>,
  env: Env,
  ctx: ExecutionContext,
): Promise<void> {
  console.log({ env, ctx });
  for (const message of batch.messages) {
    console.log({
      id: message.id,
      body: message.body,
    });
  }
}
