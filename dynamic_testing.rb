

def func1(val)
 if val == 1
   return true
 else return false
 end
end
puts func1(2)


def max(a, b)
  if a > b
   return a
 else b
 end
end
puts max(1,2)


def looper 
  for i in 1..10
    puts i
  end
end




failures = 0 

if looper == 10 
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
end

if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end 


if max(100,1) == 100 
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end


if failures 
  puts "Test Failed"
else
  puts "Test Passed"
end