common:=cd ../newcli &&

all:
	$(common) \
	make calculate-number
	make print-series


ocli-generate:
	$(common) \
	  npx oclif generate command fib

calculate-number:
	$(common) \
	  bin/dev fib --number 3

print-series:
	$(common) \
	  bin/dev fib print --number 3