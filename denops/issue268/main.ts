import { Denops } from "https://deno.land/x/denops_std@v5.0.0/mod.ts";

export function main(denops: Denops) {
  denops.dispatcher = {
    async reproduce() {
      await Promise.all([
        denops.call("denops#request", "issue268", "echo", ["Hello"]),
        denops.call("denops#request", "issue268", "echo", ["World"]),
      ]);
    },

    async echo(m) {
      await denops.cmd(`echomsg '${m}'`);
    },
  };
}
