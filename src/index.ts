import { fetch } from "@/controllers/fetch";
import { queue } from "@/controllers/queue";

export default {
  fetch,
  queue,
} satisfies ExportedHandler<Env, Error>;
