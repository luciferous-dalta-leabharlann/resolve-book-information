export async function queue(
  batch: MessageBatch,
  env: Env,
  ctx: ExecutionContext,
): Promise<void> {
  for (const message of batch.messages) {
    console.log({
      id: message.id,
      body: message.body,
    });
  }
}
