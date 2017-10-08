
def func1 val if val = 1 return true else return false end end


# the first 'val' should be inside (), as it is an argument, although not essential, but we've been doing like that in classes

# instead of '=', should be the operator '==' 




dif max a b if a > b return a else b end end end


# 'dif' should be 'def'
# 'a b' should be (a, b), or at least a, b
# there's one extra 'end'




def looper for i in 1..10 puts i end end

failures = 0

if looper == 10 puts "looper passed" else puts "looper failed" failures = failures + 1


# 'end' is missing




if func1(3) == false puts "func1(3) passed" else puts "func1(3) failed" failures = failures + 1 end

if max(100,1) == 100 puts "max(100,1) passed" else puts "func1(3) failed" failrues = failures + 1 end


# 'failrues' should be failures




if failures puts "Test Failed" else puts "Test Passed" end