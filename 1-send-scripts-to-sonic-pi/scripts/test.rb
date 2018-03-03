live_loop :flibble do
  4.times do
    sample :ambi_choir, rate: 0.3
    sleep 0.25
    sample :bd_haus, rate: 0.1
    sleep 0.75
  end
end
