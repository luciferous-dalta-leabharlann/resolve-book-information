import { fetch } from "@/controllers/fetch";
import { queue } from "@/controllers/queue";
import type { Env, Task } from "@/models";

export default {
  fetch,
  queue,
} satisfies ExportedHandler<Env, Task>;
