import { BrowserWorker } from "@cloudflare/playwright";

export interface Env {
  tmp_url: string;
  evaluate_code: string;
  MY_BROWSER: BrowserWorker;
}
