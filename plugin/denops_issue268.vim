if exists('g:loaded_denops_issue268')
  finish
endif
let g:loaded_denops_issue268 = 1

command! DenopsIssue268 call denops#request('issue268', 'reproduce', [])

