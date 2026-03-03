import { launch } from "@cloudflare/playwright";

import type { Env, Task } from "@/models";
import { sleep } from "@/utils";

export async function queue(
  batch: MessageBatch<Task>,
  env: Env,
  ctx: ExecutionContext,
): Promise<void> {
  console.log({ env, ctx, environments: process.env });
  for (const message of batch.messages) {
    await main(message, env);
  }
}

async function main(message: Message<Task>, env: Env) {
  console.log("main start");
  await sleep(100);
  const browser = await launch(env.MY_BROWSER);
  const page = await browser.newPage();
  await page.goto(env.tmp_url);

  const title = await page.title();
  const data: object = await page.evaluate(env.evaluate_code);

  await browser.close();

  const result = {
    title,
    data: data,
  };
  console.log(result);
}
