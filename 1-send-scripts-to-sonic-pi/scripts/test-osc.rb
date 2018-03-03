# looks for messages from the MaKey MaKey via Pygame Zero
# and runs appropriate command
live_loop :listen do
  use_real_time
  set_sched_ahead_time! 0
  sync '/osc/play'
  sample :ambi_choir, rate: 0.59999
end

