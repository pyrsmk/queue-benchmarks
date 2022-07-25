task :bench do
  shell "deno bench --unstable benchmarks/queue_bench.ts"
end

task :specs do
  shell "deno test specs/*"
end
